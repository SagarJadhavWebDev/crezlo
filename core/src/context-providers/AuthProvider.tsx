import React, { createContext, useContext, useReducer, useEffect, useCallback, ReactNode } from "react";
import { setCookieJSON } from "../utils/cookieManager";
import { User, AuthToken, AuthState, AuthContextValue, AuthProviderConfig, AuthAction } from "../types/auth";
import { getAuthToken, logoutAuthUser } from "../utils/auth.utils";
import { ApiInstance } from "../utils";
import { envConstants } from "../constants";
import { apiEndpoints } from "../constants/api-endpoints.constants";

// Default configuration
const defaultConfig: Required<AuthProviderConfig> = {
  tokenStorage: {
    cookieOptions: {
      secure: true,
      sameSite: "lax",
      path: "/",
    },
  },
  redirectOnUnauthorized: "/login",
  onAuthStateChange: () => {},
};

// Initial state
const initialState: AuthState = {
  user: null,
  token: {
    access_token: null,
    expires_at: null,
    token_type: null,
  },
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
      return { ...state, token: action.payload };

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
  config?: AuthProviderConfig;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children, config }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const mergedConfig = { ...defaultConfig, ...(config ?? {}) };

  // Token management
  const updateToken = useCallback((token: AuthToken) => {
    setCookieJSON("token", token);
    dispatch({ type: "SET_TOKENS", payload: token });
  }, []);

  const logoutUser = useCallback((callback?: () => void) => {
    logoutAuthUser(() => {
      dispatch({ type: "CLEAR_AUTH" });
      callback?.();
    });
  }, []);

  const getToken = useCallback(() => {
    return getAuthToken();
  }, []);

  // API request interceptor to add auth token
  useEffect(() => {
    ApiInstance.client.addGlobalRequestInterceptor(async (config) => {
      const token = getAuthToken();
      if (token?.access_token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token?.access_token}`,
        };
      }
      return config;
    });

    // Response interceptor to handle token refresh
    ApiInstance.client.addGlobalErrorInterceptor(async (error) => {
      if (error.status === 401) {
        try {
          logoutUser(() => {
            // Redirect to login page or handle unauthorized access
          });
        } catch (refreshError) {
          console.error("Token refresh failed:", refreshError);
          dispatch({ type: "SET_ERROR", payload: "Session expired. Please log in again." });
        }
      }
      return error;
    });

    refreshUser();
  }, []);

  // Authentication methods
  const refreshUser = useCallback(async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });
    ApiInstance.CORE.get(apiEndpoints.auth.profile)
      .then((res) => {
        const user: User = res.data;
        dispatch({ type: "SET_USER", payload: user });
      })
      .catch((err) => {
        dispatch({ type: "SET_ERROR", payload: err.message || "Login failed" });
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  }, []);

  // Utility methods
  const clearError = useCallback(() => {
    dispatch({ type: "SET_ERROR", payload: null });
  }, []);

  // Notify auth state changes
  useEffect(() => {
    mergedConfig.onAuthStateChange(state);
  }, [state, mergedConfig.onAuthStateChange]);

  const contextValue: AuthContextValue = {
    ...state,
    getToken,
    updateToken,
    logout: logoutUser,
    refreshUser,
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
