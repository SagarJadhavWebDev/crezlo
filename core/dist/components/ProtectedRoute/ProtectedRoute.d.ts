import React, { ReactNode } from 'react';
import { AuthHookOptions } from '../../types/auth';
export interface ProtectedRouteProps extends AuthHookOptions {
    children: ReactNode;
    fallback?: ReactNode;
    loadingComponent?: ReactNode;
    unauthorizedComponent?: ReactNode;
}
export declare const ProtectedRoute: React.FC<ProtectedRouteProps>;
export interface RequireAuthProps {
    children: ReactNode;
    fallback?: ReactNode;
    redirectTo?: string;
}
export declare const RequireAuth: React.FC<RequireAuthProps>;
export interface RequireRoleProps {
    children: ReactNode;
    roles: string[];
    fallback?: ReactNode;
    redirectTo?: string;
}
export declare const RequireRole: React.FC<RequireRoleProps>;
export interface RequirePermissionProps {
    children: ReactNode;
    permissions: Array<{
        resource: string;
        action: string;
    }>;
    fallback?: ReactNode;
    redirectTo?: string;
}
export declare const RequirePermission: React.FC<RequirePermissionProps>;
