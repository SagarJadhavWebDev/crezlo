import React, { ReactNode } from 'react';
import { useAuthGuard } from '../../hooks/useAuthGuard';
import { AuthHookOptions } from '../../types/auth';
import { Spinner } from '../Spinner';
import { Alert, AlertTitle, AlertDescription } from '../Alert';

export interface ProtectedRouteProps extends AuthHookOptions {
  children: ReactNode;
  fallback?: ReactNode;
  loadingComponent?: ReactNode;
  unauthorizedComponent?: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  fallback,
  loadingComponent,
  unauthorizedComponent,
  ...guardOptions
}) => {
  const { isAuthorized, isLoading } = useAuthGuard(guardOptions);

  // Show loading state
  if (isLoading) {
    return (
      <>
        {loadingComponent || (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center space-y-4">
              <Spinner size="lg" variant="primary" />
              <p className="text-muted-foreground">Checking authentication...</p>
            </div>
          </div>
        )}
      </>
    );
  }

  // Show unauthorized state
  if (!isAuthorized) {
    return (
      <>
        {unauthorizedComponent || fallback || (
          <div className="flex items-center justify-center min-h-screen p-4">
            <Alert variant="error" className="max-w-md">
              <AlertTitle>Access Denied</AlertTitle>
              <AlertDescription>
                You don't have permission to access this page. Please contact your administrator if you believe this is an error.
              </AlertDescription>
            </Alert>
          </div>
        )}
      </>
    );
  }

  // Render protected content
  return <>{children}</>;
};

// Convenience components for common use cases
export interface RequireAuthProps {
  children: ReactNode;
  fallback?: ReactNode;
  redirectTo?: string;
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children, fallback, redirectTo }) => {
  return (
    <ProtectedRoute requireAuth={true} redirectTo={redirectTo} fallback={fallback}>
      {children}
    </ProtectedRoute>
  );
};

export interface RequireRoleProps {
  children: ReactNode;
  roles: string[];
  fallback?: ReactNode;
  redirectTo?: string;
}

export const RequireRole: React.FC<RequireRoleProps> = ({ children, roles, fallback, redirectTo }) => {
  return (
    <ProtectedRoute 
      requireAuth={true} 
      requiredRoles={roles} 
      redirectTo={redirectTo} 
      fallback={fallback}
    >
      {children}
    </ProtectedRoute>
  );
};

export interface RequirePermissionProps {
  children: ReactNode;
  permissions: Array<{ resource: string; action: string }>;
  fallback?: ReactNode;
  redirectTo?: string;
}

export const RequirePermission: React.FC<RequirePermissionProps> = ({ 
  children, 
  permissions, 
  fallback, 
  redirectTo 
}) => {
  return (
    <ProtectedRoute 
      requireAuth={true} 
      requiredPermissions={permissions} 
      redirectTo={redirectTo} 
      fallback={fallback}
    >
      {children}
    </ProtectedRoute>
  );
};

