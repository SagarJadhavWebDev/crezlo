import React, { createContext, useContext, useReducer, useEffect, useCallback, ReactNode } from "react";
import { createApiClient } from "../utils/apiClient";
import { createCookieManager } from "../utils/cookieManager";
import { User, AuthTokens, AuthState, AuthContextValue, AuthProviderConfig, AuthAction, LoginCredentials, RegisterData } from "../types/auth";

// Default configuration
const defaultConfig: Required<AuthProviderConfig> = {
  apiBaseURL: "",
  endpoints: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
    profile: "/auth/profile",
    updateProfile: "/auth/profile",
    changePassword: "/auth/change-password",
  },
  tokenStorage: {
    accessTokenKey: "accessToken",
    refreshTokenKey: "refreshToken",
    userKey: "user",
    storageType: "localStorage",
    cookieOptions: {
      secure: true,
      sameSite: "lax",
      path: "/",
    },
  },
  autoRefresh: true,
  refreshThreshold: 5, // 5 minutes
  redirectOnUnauthorized: "/login",
  onAuthStateChange: () => {},
};

// Initial state
const initialState: AuthState = {
  user: null,
  tokens: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Auth reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        error: null,
      };

    case "SET_TOKENS":
      return { ...state, tokens: action.payload };

    case "SET_AUTHENTICATED":
      return { ...state, isAuthenticated: action.payload };

    case "UPDATE_USER":
      return {
        ...state,
        user: state.user ? { ...state.user, ...action.payload } : null,
      };

    case "CLEAR_AUTH":
      return {
        ...initialState,
        isLoading: false,
      };

    default:
      return state;
  }
};

// Create context
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// Auth Provider component
export interface AuthProviderProps {
  children: ReactNode;
  config: AuthProviderConfig;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  config }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const mergedConfig = { ...defaultConfig, ...config };

  // Initialize API client
  const apiClient = createApiClient({
    baseURL: mergedConfig.apiBaseURL,
    withCredentials: true,
  });

  // Initialize storage manager
  const storageManager = mergedConfig?.tokenStorage?.storageType === "cookie" ? createCookieManager({ prefix: "auth_" }) : null;

  // Storage utilities
  const setStorageItem = useCallback(
    (key: string, value: string) => {
      try {
        if (mergedConfig.tokenStorage.storageType === "cookie" && storageManager) {
          storageManager.set(key, value, mergedConfig.tokenStorage.cookieOptions);
        } else if (mergedConfig.tokenStorage.storageType === "sessionStorage") {
          sessionStorage.setItem(key, value);
        } else {
          localStorage.setItem(key, value);
        }
      } catch (error) {
        console.error("Error setting storage item:", error);
      }
    },
    [mergedConfig.tokenStorage.storageType, storageManager]
  );

  const getStorageItem = useCallback(
    (key: string): string | null => {
      try {
        if (mergedConfig.tokenStorage.storageType === "cookie" && storageManager) {
          return storageManager.get(key);
        } else if (mergedConfig.tokenStorage.storageType === "sessionStorage") {
          return sessionStorage.getItem(key);
        } else {
          return localStorage.getItem(key);
        }
      } catch (error) {
        console.error("Error getting storage item:", error);
        return null;
      }
    },
    [mergedConfig.tokenStorage.storageType, storageManager]
  );

  const removeStorageItem = useCallback(
    (key: string) => {
      try {
        if (mergedConfig.tokenStorage.storageType === "cookie" && storageManager) {
          storageManager.remove(key);
        } else if (mergedConfig.tokenStorage.storageType === "sessionStorage") {
          sessionStorage.removeItem(key);
        } else {
          localStorage.removeItem(key);
        }
      } catch (error) {
        console.error("Error removing storage item:", error);
      }
    },
    [mergedConfig.tokenStorage.storageType, storageManager]
  );

  // Token management
  const saveTokens = useCallback(
    (tokens: AuthTokens) => {
      setStorageItem(mergedConfig.tokenStorage.accessTokenKey, tokens.accessToken);
      if (tokens.refreshToken) {
        setStorageItem(mergedConfig.tokenStorage.refreshTokenKey, tokens.refreshToken);
      }
      dispatch({ type: "SET_TOKENS", payload: tokens });
    },
    [setStorageItem, mergedConfig.tokenStorage]
  );

  const loadTokens = useCallback((): AuthTokens | null => {
    const accessToken = getStorageItem(mergedConfig.tokenStorage.accessTokenKey);
    const refreshToken = getStorageItem(mergedConfig.tokenStorage.refreshTokenKey);

    if (accessToken) {
      return {
        accessToken,
        refreshToken: refreshToken || undefined,
      };
    }

    return null;
  }, [getStorageItem, mergedConfig.tokenStorage]);

  const clearTokens = useCallback(() => {
    removeStorageItem(mergedConfig.tokenStorage.accessTokenKey);
    removeStorageItem(mergedConfig.tokenStorage.refreshTokenKey);
    dispatch({ type: "SET_TOKENS", payload: null });
  }, [removeStorageItem, mergedConfig.tokenStorage]);

  // User management
  const saveUser = useCallback(
    (user: User) => {
      setStorageItem(mergedConfig.tokenStorage.userKey, JSON.stringify(user));
      dispatch({ type: "SET_USER", payload: user });
    },
    [setStorageItem, mergedConfig.tokenStorage.userKey]
  );

  const loadUser = useCallback((): User | null => {
    const userStr = getStorageItem(mergedConfig.tokenStorage.userKey);
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
    return null;
  }, [getStorageItem, mergedConfig.tokenStorage.userKey]);

  const clearUser = useCallback(() => {
    removeStorageItem(mergedConfig.tokenStorage.userKey);
    dispatch({ type: "SET_USER", payload: null });
  }, [removeStorageItem, mergedConfig.tokenStorage.userKey]);

  // API request interceptor to add auth token
  useEffect(() => {
    apiClient.addRequestInterceptor(async (config) => {
      const tokens = loadTokens();
      if (tokens?.accessToken) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${tokens.accessToken}`,
        };
      }
      return config;
    });

    // Response interceptor to handle token refresh
    apiClient.addErrorInterceptor(async (error) => {
      if (error.status === 401 && mergedConfig.autoRefresh) {
        try {
          await refreshToken();
          // Retry the original request would need to be implemented here
        } catch (refreshError) {
          await logout();
        }
      }
      return error;
    });
  }, [apiClient]);

  // Authentication methods
  const login = useCallback(
    async (credentials: LoginCredentials) => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        dispatch({ type: "SET_ERROR", payload: null });

        const response = await apiClient.post(mergedConfig.endpoints.login, credentials);
        const { user, tokens } = response.data;

        saveTokens(tokens);
        saveUser(user);

        dispatch({ type: "SET_LOADING", payload: false });
      } catch (error: any) {
        dispatch({ type: "SET_ERROR", payload: error.message || "Login failed" });
        throw error;
      }
    },
    [apiClient, mergedConfig.endpoints.login, saveTokens, saveUser]
  );

  const register = useCallback(
    async (data: RegisterData) => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });
        dispatch({ type: "SET_ERROR", payload: null });

        const response = await apiClient.post(mergedConfig.endpoints.register, data);
        const { user, tokens } = response.data;

        if (tokens) {
          saveTokens(tokens);
          saveUser(user);
        }

        dispatch({ type: "SET_LOADING", payload: false });
      } catch (error: any) {
        dispatch({ type: "SET_ERROR", payload: error.message || "Registration failed" });
        throw error;
      }
    },
    [apiClient, mergedConfig.endpoints.register, saveTokens, saveUser]
  );

  const logout = useCallback(async () => {
    try {
      // Call logout endpoint if available
      if (mergedConfig.endpoints.logout) {
        await apiClient.post(mergedConfig.endpoints.logout);
      }
    } catch (error) {
      console.error("Logout API call failed:", error);
    } finally {
      clearTokens();
      clearUser();
      dispatch({ type: "CLEAR_AUTH" });
    }
  }, [apiClient, mergedConfig.endpoints.logout, clearTokens, clearUser]);

  const refreshToken = useCallback(async () => {
    try {
      const tokens = loadTokens();
      if (!tokens?.refreshToken) {
        throw new Error("No refresh token available");
      }

      const response = await apiClient.post(mergedConfig.endpoints.refresh, {
        refreshToken: tokens.refreshToken,
      });

      const newTokens = response.data;
      saveTokens(newTokens);
    } catch (error) {
      clearTokens();
      clearUser();
      dispatch({ type: "CLEAR_AUTH" });
      throw error;
    }
  }, [apiClient, mergedConfig.endpoints.refresh, loadTokens, saveTokens, clearTokens, clearUser]);

  const updateUser = useCallback(
    async (userData: Partial<User>) => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });

        const response = await apiClient.put(mergedConfig.endpoints.updateProfile, userData);
        const updatedUser = response.data;

        saveUser(updatedUser);
        dispatch({ type: "SET_LOADING", payload: false });
      } catch (error: any) {
        dispatch({ type: "SET_ERROR", payload: error.message || "Update failed" });
        throw error;
      }
    },
    [apiClient, mergedConfig.endpoints.updateProfile, saveUser]
  );

  const changePassword = useCallback(
    async (oldPassword: string, newPassword: string) => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });

        await apiClient.post(mergedConfig.endpoints.changePassword, {
          oldPassword,
          newPassword,
        });

        dispatch({ type: "SET_LOADING", payload: false });
      } catch (error: any) {
        dispatch({ type: "SET_ERROR", payload: error.message || "Password change failed" });
        throw error;
      }
    },
    [apiClient, mergedConfig.endpoints.changePassword]
  );

  // Role and permission checks
  const hasRole = useCallback(
    (roleName: string): boolean => {
      return state.user?.roles.some((role) => role.name === roleName) || false;
    },
    [state.user]
  );

  const hasAnyRole = useCallback(
    (roleNames: string[]): boolean => {
      return roleNames.some((roleName) => hasRole(roleName));
    },
    [hasRole]
  );

  const hasAllRoles = useCallback(
    (roleNames: string[]): boolean => {
      return roleNames.every((roleName) => hasRole(roleName));
    },
    [hasRole]
  );

  const hasPermission = useCallback(
    (resource: string, action: string): boolean => {
      return state.user?.permissions.some((permission) => permission.resource === resource && permission.action === action) || false;
    },
    [state.user]
  );

  const hasAnyPermission = useCallback(
    (permissions: Array<{ resource: string; action: string }>): boolean => {
      return permissions.some(({ resource, action }) => hasPermission(resource, action));
    },
    [hasPermission]
  );

  const hasAllPermissions = useCallback(
    (permissions: Array<{ resource: string; action: string }>): boolean => {
      return permissions.every(({ resource, action }) => hasPermission(resource, action));
    },
    [hasPermission]
  );

  // Utility methods
  const clearError = useCallback(() => {
    dispatch({ type: "SET_ERROR", payload: null });
  }, []);

  const checkAuthStatus = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const tokens = loadTokens();
      const user = loadUser();

      if (tokens && user) {
        // Verify token is still valid
        const response = await apiClient.get(mergedConfig.endpoints.profile);
        const currentUser = response.data;

        saveUser(currentUser);
        dispatch({ type: "SET_TOKENS", payload: tokens });
      } else {
        dispatch({ type: "CLEAR_AUTH" });
      }
    } catch (error) {
      dispatch({ type: "CLEAR_AUTH" });
      clearTokens();
      clearUser();
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, [apiClient, mergedConfig.endpoints.profile, loadTokens, loadUser, saveUser, clearTokens, clearUser]);

  // Initialize auth state on mount
  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  // Auto-refresh token
  useEffect(() => {
    if (!mergedConfig.autoRefresh || !state.tokens?.accessToken) return;

    const checkTokenExpiry = () => {
      const tokens = loadTokens();
      if (tokens?.expiresAt) {
        const now = new Date();
        const expiryTime = new Date(tokens.expiresAt);
        const timeUntilExpiry = expiryTime.getTime() - now.getTime();
        const refreshThresholdMs = mergedConfig.refreshThreshold * 60 * 1000;

        if (timeUntilExpiry <= refreshThresholdMs) {
          refreshToken().catch(() => {
            // Token refresh failed, user will be logged out
          });
        }
      }
    };

    const interval = setInterval(checkTokenExpiry, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [state.tokens, mergedConfig.autoRefresh, mergedConfig.refreshThreshold, loadTokens, refreshToken]);

  // Notify auth state changes
  useEffect(() => {
    mergedConfig.onAuthStateChange(state);
  }, [state, mergedConfig.onAuthStateChange]);

  const contextValue: AuthContextValue = {
    ...state,
    login,
    register,
    logout,
    refreshToken,
    updateUser,
    changePassword,
    hasRole,
    hasAnyRole,
    hasAllRoles,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    clearError,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Hook to use auth context
export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthContext };
