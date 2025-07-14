import React, { createContext, useContext, useReducer, useEffect, useCallback, ReactNode } from "react";
import { setCookieJSON } from "../utils/cookieManager";
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
    // setCookieJSON("token", {
    //   token_type: "Bearer",
    //   access_token:
    //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjg1MTE0MWY2ODc2ZGY0ZTk3N2YzZDQ3OWQ3Y2JkNjlhOWFlMWRlNjI2NmI0NWM4ZDM3NzkwMzBlNmQ5NzU1ZTZmMjhhODRiNGFmOTIzYzgiLCJpYXQiOjE3NTI0ODcxNzMuOTcyMDU3LCJuYmYiOjE3NTI0ODcxNzMuOTcyMDYsImV4cCI6MTc1NTA3OTE3My45NDA5MTUsInN1YiI6IjAxOTdmOTdlLWY4ZjAtNzE0Mi04MzhlLTQ2OGExZTczNWQ2ZCIsInNjb3BlcyI6W10sInBheWxvYWQiOnsiYWNjb3VudElkIjoiMDE5N2Y5ODAtNTdiMC03MzQ1LTk1NjYtNGY4YzBmMWQ1MTQ4Iiwic2hvcnRDb2RlIjoiRG9JOW1rZFVuVUUrQW91K29aekdxMlJ0ZERST0wwbFplU3N6ZDFSeVZsUTJURk16YzNGek4xUldVVkphU1ZOT2VtUnZTamRwTDFVd1JGVTkifX0.ooczmBYP8AAqxAbkhjTtte5_6JkEptvtVtHdZ6ww36Dm4rULeqL-RZa7_dCL6HLBQKn2NMm0AKlKQlWzCNEl6u3IG81ZJIe1P3hBcZUpnRb7RyOcEMuVKDl56ZJ6ipthAJ9BQ9L5a4MC3RFnb1oH8GrIMHxBemDYS3Fj47aFZNOlToT4xddeBtdwE6nLTgYphFg3ueR1noIJ56431PEYo09yl8bparUA4ptll_moi4HDRQf0CTYwFZXsJubcXa5tT-e9L8G_WW26JuyaN-RbXi9OJtVbA33vvED-4ddM5-JQr_mo_Ph5Mzywm-u1PFpTgKXvG8h_3z_Ko7gaetJ4WKqBCaLhna7Z_DabUr7WQGKprpWd7Bm_tQoVxu2CdBfJoLR7jCbq7pMYV0M7ZtvpFApxYXsciDhJ57aD0VPfVy194uatrUsMc7oo7tHtcTYehxh8QjD4-xsanG8-5t4oMcCFuk_KY2-ONKiQJ-5REf5E7ktORs4qUDW8_7NBDasWzerGIL_WYZpnLPFIRrotX5jwa_vHg077N0D6hGZm0IJ7TneihRF87BLdTqW4oSxbtyT14iOsK8GQLo9FkQTPbxFWoxpVPKtsPGAPXm0WSHlCgxBCBqJrdc1K2V2IzFmQf5dgfddqX5cRHV3FfbJioXqagBK53Lc2ElW3CCobT-c",
    //   expires_at: "2025-08-13T09:59:33.000000Z",
    // });
    // return;
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });
    ApiInstance.CORE.get<User>(apiEndpoints.auth.profile + "0197f97e-f8f0-7142-838e-468a1e735d6d")
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
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthContext };
