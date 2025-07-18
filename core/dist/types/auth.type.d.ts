export interface UserAvatar {
    image_path?: string;
    storage: "backblaze";
    mediamanager_used: boolean;
}
export interface User {
    id?: string;
    name?: string;
    dob?: string;
    gender?: string;
    country?: string;
    email_id?: string;
    is_email_verified?: boolean;
    mobile_code?: string;
    mobile?: string;
    is_phone_number_verified?: boolean;
    avatar?: UserAvatar;
    settings_meta?: any;
    stats_meta?: any;
    is_staff?: boolean;
    status?: string;
    created_by?: string;
    updated_by?: string;
    last_login_at?: string;
    created_at?: string;
    updated_at?: string;
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
    setUser: (user: User) => void;
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
