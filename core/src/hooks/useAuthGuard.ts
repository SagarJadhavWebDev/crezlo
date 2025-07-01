import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { AuthHookOptions } from '../types/auth';

export const useAuthGuard = (options: AuthHookOptions = {}) => {
  const {
    requireAuth = true,
    requiredRoles = [],
    requiredPermissions = [],
    redirectTo,
  } = options;

  const auth = useAuth();

  useEffect(() => {
    // Skip checks if still loading
    if (auth.isLoading) return;

    // Check authentication requirement
    if (requireAuth && !auth.isAuthenticated) {
      if (redirectTo) {
        window.location.href = redirectTo;
      } else {
        console.warn('useAuthGuard: User is not authenticated');
      }
      return;
    }

    // Check role requirements
    if (requiredRoles.length > 0 && !auth.hasAllRoles(requiredRoles)) {
      console.warn('useAuthGuard: User does not have required roles:', requiredRoles);
      if (redirectTo) {
        window.location.href = redirectTo;
      }
      return;
    }

    // Check permission requirements
    if (requiredPermissions.length > 0 && !auth.hasAllPermissions(requiredPermissions)) {
      console.warn('useAuthGuard: User does not have required permissions:', requiredPermissions);
      if (redirectTo) {
        window.location.href = redirectTo;
      }
      return;
    }
  }, [
    auth.isLoading,
    auth.isAuthenticated,
    requireAuth,
    requiredRoles,
    requiredPermissions,
    redirectTo,
    auth.hasAllRoles,
    auth.hasAllPermissions,
  ]);

  return {
    isAuthorized: auth.isAuthenticated && 
                  (requiredRoles.length === 0 || auth.hasAllRoles(requiredRoles)) &&
                  (requiredPermissions.length === 0 || auth.hasAllPermissions(requiredPermissions)),
    isLoading: auth.isLoading,
    user: auth.user,
  };
};

export const useRequireAuth = (redirectTo?: string) => {
  return useAuthGuard({ requireAuth: true, redirectTo });
};

export const useRequireRoles = (roles: string[], redirectTo?: string) => {
  return useAuthGuard({ requireAuth: true, requiredRoles: roles, redirectTo });
};

export const useRequirePermissions = (
  permissions: Array<{ resource: string; action: string }>,
  redirectTo?: string
) => {
  return useAuthGuard({ requireAuth: true, requiredPermissions: permissions, redirectTo });
};

export const useOptionalAuth = () => {
  return useAuthGuard({ requireAuth: false });
};

