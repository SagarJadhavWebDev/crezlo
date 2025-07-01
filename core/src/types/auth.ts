export interface User {
  id: string | number;
  email: string;
  name?: string;
  avatar?: string;
  roles: Role[];
  permissions: Permission[];
  metadata?: Record<string, any>;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface Role {
  id: string | number;
  name: string;
  description?: string;
  permissions: Permission[];
  level?: number; // For hierarchical roles
}

export interface Permission {
  id: string | number;
  name: string;
  resource: string;
  action: string;
  description?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
  tokenType?: string;
  expiresIn?: number;
  expiresAt?: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  password: string;
  name?: string;
  confirmPassword?: string;
  [key: string]: any;
}

export interface AuthState {
  user: User | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextValue extends AuthState {
  // Authentication methods
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
  
  // User management
  updateUser: (userData: Partial<User>) => Promise<void>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
  
  // Role and permission checks
  hasRole: (roleName: string) => boolean;
  hasAnyRole: (roleNames: string[]) => boolean;
  hasAllRoles: (roleNames: string[]) => boolean;
  hasPermission: (resource: string, action: string) => boolean;
  hasAnyPermission: (permissions: Array<{ resource: string; action: string }>) => boolean;
  hasAllPermissions: (permissions: Array<{ resource: string; action: string }>) => boolean;
  
  // Utility methods
  clearError: () => void;
  checkAuthStatus: () => Promise<void>;
}

export interface AuthProviderConfig {
  apiBaseURL: string;
  endpoints?: {
    login?: string;
    register?: string;
    logout?: string;
    refresh?: string;
    profile?: string;
    updateProfile?: string;
    changePassword?: string;
  };
  tokenStorage?: {
    accessTokenKey?: string;
    refreshTokenKey?: string;
    userKey?: string;
    storageType?: 'localStorage' | 'sessionStorage' | 'cookie';
    cookieOptions?: {
      secure?: boolean;
      sameSite?: 'strict' | 'lax' | 'none';
      domain?: string;
      path?: string;
    };
  };
  autoRefresh?: boolean;
  refreshThreshold?: number; // Minutes before expiry to refresh
  redirectOnUnauthorized?: string;
  onAuthStateChange?: (state: AuthState) => void;
}

export type AuthAction = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_TOKENS'; payload: AuthTokens | null }
  | { type: 'SET_AUTHENTICATED'; payload: boolean }
  | { type: 'CLEAR_AUTH' }
  | { type: 'UPDATE_USER'; payload: Partial<User> };

export interface AuthHookOptions {
  requireAuth?: boolean;
  requiredRoles?: string[];
  requiredPermissions?: Array<{ resource: string; action: string }>;
  redirectTo?: string;
}

