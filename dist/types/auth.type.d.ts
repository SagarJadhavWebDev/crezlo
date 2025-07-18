export interface User {
    id: string | number;
    email: string;
    name?: string;
    avatar?: string;
    metadata?: Record<string, any>;
    createdAt?: string | Date;
    updatedAt?: string | Date;
}
export interface AuthToken {
    access_token: string;
    refresh_token?: string;
    token_type?: string;
    expires_at?: string;
}
export interface AuthState {
    user: User | null;
    token: AuthToken | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}
export interface AuthContextValue extends AuthState {
    logout: (callback?: () => void) => void;
    getToken: () => AuthToken | null;
    updateToken: (token: AuthToken) => void;
    refreshUser: () => void;
}
export interface AuthProviderConfig {
    tokenStorage?: {
        cookieOptions?: {
            secure?: boolean;
            sameSite?: "strict" | "lax" | "none";
            domain?: string;
            path?: string;
        };
    };
    redirectOnUnauthorized?: string;
    isAccountDomain?: boolean;
    onAuthStateChange?: (state: AuthState) => void;
}
export type AuthAction = {
    type: "SET_LOADING";
    payload: boolean;
} | {
    type: "SET_ERROR";
    payload: string | null;
} | {
    type: "SET_USER";
    payload: User | null;
} | {
    type: "SET_TOKENS";
    payload: AuthToken | null;
} | {
    type: "SET_AUTHENTICATED";
    payload: boolean;
} | {
    type: "CLEAR_AUTH";
} | {
    type: "UPDATE_USER";
    payload: Partial<User>;
};
