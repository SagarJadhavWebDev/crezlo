import { AuthHookOptions } from '../types/auth';
export declare const useAuthGuard: (options?: AuthHookOptions) => {
    isAuthorized: boolean;
    isLoading: boolean;
    user: import("../types/auth").User;
};
export declare const useRequireAuth: (redirectTo?: string) => {
    isAuthorized: boolean;
    isLoading: boolean;
    user: import("../types/auth").User;
};
export declare const useRequireRoles: (roles: string[], redirectTo?: string) => {
    isAuthorized: boolean;
    isLoading: boolean;
    user: import("../types/auth").User;
};
export declare const useRequirePermissions: (permissions: Array<{
    resource: string;
    action: string;
}>, redirectTo?: string) => {
    isAuthorized: boolean;
    isLoading: boolean;
    user: import("../types/auth").User;
};
export declare const useOptionalAuth: () => {
    isAuthorized: boolean;
    isLoading: boolean;
    user: import("../types/auth").User;
};
