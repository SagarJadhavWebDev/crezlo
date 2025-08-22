"use client";
import React, { createContext, useContext, useReducer, useEffect, useCallback, ReactNode, useLayoutEffect } from "react";
import { setCookie, setCookieJSON } from "../utils/cookieManager";
import { User, AuthToken, AuthState, AuthContextValue, AuthProviderConfig, AuthAction } from "../types/auth.type";
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
  redirectOnUnauthorized: envConstants.APP_URL.ACCOUNT + `/login`,
  isAccountDomain: false,
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
    setCookie("auth", token?.access_token);
    dispatch({ type: "SET_TOKENS", payload: token });
  }, []);

  const logoutUser = useCallback((callback?: () => void) => {
    logoutAuthUser(() => {
      dispatch({ type: "CLEAR_AUTH" });
      callback?.();
    });
  }, []);
  
  // API request interceptor to add auth token
  useLayoutEffect(() => {
    const token = getAuthToken();
    if (!token?.access_token) {
       dispatch({ type: "SET_TOKENS", payload: token });
    }
    refreshUser();
  }, []);

  // Authentication methods
  const refreshUser = useCallback(async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });
    ApiInstance.CORE.get<{ seller: User }>(apiEndpoints.auth.profile)
      .then((res) => {
        const user = res?.data?.seller;
        setUser(user);
      })
      .catch((err) => {
        dispatch({ type: "SET_ERROR", payload: err.message || "Login failed" });
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      });
  }, []);

  // Set User
  const setUser = useCallback((user: User) => {
    dispatch({ type: "SET_USER", payload: user });
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
    setUser,
    updateToken,
    logout: logoutUser,
    refreshUser,
    config: mergedConfig,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Hook to use auth context
export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  // if (context === undefined) {
  //   throw new Error("useAuth must be used within an AuthProvider");
  // }
  return context;
};

export { AuthContext };
