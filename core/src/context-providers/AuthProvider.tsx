"use client";
import React, { createContext, useContext, useReducer, useEffect, useCallback, ReactNode } from "react";
import { cookieManager, setCookie, setCookieJSON } from "../utils/cookieManager";
import { User, AuthToken, AuthState, AuthContextValue, AuthProviderConfig, AuthAction } from "../types/auth.type";
import { getAuthToken, logoutAuthUser } from "../utils/auth.utils";
import { ApiInstance } from "../utils";
import { envConstants } from "../constants";
import { apiEndpoints } from "../constants/api-endpoints.constants";
import getSubDomain from "../utils/getSubDomain";

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
    const token = getAuthToken();
    console.log("AuthProvider getToken", window.location.href, token);
    if (!token?.access_token) {
      const domain = getSubDomain();
      let redirectUrl = ``;
      if (domain !== envConstants.APP_NAME.ACCOUNT) {
        redirectUrl = `?redirect_url=${window.location.href}`;
      }
      window.location.href = envConstants.APP_URL.ACCOUNT + `/login` + redirectUrl;
    }
    return token;
  }, []);

  // API request interceptor to add auth token
  useEffect(() => {
    ApiInstance.client.addGlobalRequestInterceptor(async (config) => {
      const token = getToken();
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
    // setCookieJSON(
    //   "token",
    //   {
    //     token_type: "Bearer",
    //     access_token:
    //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWIzZTI5MTM1OThjMWYwNzRhYTg5MTUyNTMxYWI5NjM2MzE5OWQ4YzUzNjdmZWUzYmJhODJhNWZhNjlhZTZiYjZhNWEyMGQyNTg3YTI0YmMiLCJpYXQiOjE3NTI1NjQwMTcuNzkyODk1LCJuYmYiOjE3NTI1NjQwMTcuNzkyODk4LCJleHAiOjE3NTUxNTYwMTcuNzYyNjI3LCJzdWIiOiIwMTk4MDhmMi03N2RmLTcwMTMtYTgwMC03YWFiNmM1YzNmMjIiLCJzY29wZXMiOltdLCJwYXlsb2FkIjp7ImFjY291bnRJZCI6IjAxOTgwOGYyLWUyYWUtNzFmNi04MzNiLThkMGIyZjgyOWYyNSIsInNob3J0Q29kZSI6ImZDNk1EVGxnbE16dWFFSndpdTd0KzA1RE1raHJaWFJRUW5oUlprbzFTV3cxUnk5SVQwdEJkRlpTYTJOdU5EZENibHBWZVVjeWJWSlROekE5In19.LzbFBLbd69l7NFf7MLweLU2pXsUJQ7YHN-M6kd2K27SdfwpArIuzX97L5VpAsMkBIdk9scmIZhytldP2joOnR_17-gvCTnzfNXTF1uZ7Otrix0DW-Dlx2yCiSKqiZYff7-V5XaiAcEhAji7gbBmrI0kxicVPvt_h00Rt277eVMVGzirhYNQ3zDyzqkwi-NwUDrXLDbVP4Uujsm3DSQxrziLEhW_l9TmNdbFmIzkwgNcxXFPyuG9Pd5WGQAEp_xEhwnbGdVB1hoZ2jexDTwSDlMvAKHibJY_goGzmA9i42UyaJMD5QuJHruR-Mk1pQrxPyxYOJZ8MBAOv4cxYmi0T_WAGBNmXnc9fpawYkXRzMIveUT1bRB7gq3HxoTz0sGbNgcRvmvW6gtKEvPQMJRkc2T5HyIINuTk5Ocv93ueQvDmHkqXhC8chLGsG00HnxlzwlYDorv_vApMtBI6OXyG5PuUj6P-_YHHZTImv7A4yrj-SRRMV4b3Pqrwwor1S7Y-kBK0zIFuifkw0xnxgziiUtOuSw419U_WOR4WMZWKXQ7tqjADq2fySlOvsFGbRy2YanaKwdzEYgN8baBB9jwWTZZI3AFYQSCEPyQUOxEouTOgaRXxriHP2pokDgnG2I_cM9OBpZWN1TcndsWFaK0ofwvSSwDCzDKBYZz7aTQ9U5G0",
    //     expires_at: "2025-08-13T09:59:33.000000Z",
    //   },
    //   { expires: new Date("2025-08-13T09:59:33.000000Z") }
    // );
    // return;
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });
    ApiInstance.CORE.get<User>(apiEndpoints.auth.profile)
      .then((res) => {
        // @ts-ignore
        const user = res?.user;
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
  // if (context === undefined) {
  //   throw new Error("useAuth must be used within an AuthProvider");
  // }
  return context;
};

export { AuthContext };
