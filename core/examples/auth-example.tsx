import React, { useState } from 'react';
import {
  // Providers
  ThemeProvider,
  AuthProvider,
  
  // Components
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Alert,
  AlertTitle,
  AlertDescription,
  Badge,
  ProtectedRoute,
  RequireAuth,
  RequireRole,
  
  // Hooks
  useAuth,
  useThemeMode,
  useAuthGuard,
  
  // Utilities
  createApiClient,
  setCookie,
  getCookie,
} from 'react-theme-components';

// Import the CSS styles
import 'react-theme-components/dist/index.css';

// Auth configuration
const authConfig = {
  apiBaseURL: 'https://jsonplaceholder.typicode.com', // Mock API for demo
  endpoints: {
    login: '/users/1', // Mock endpoint
    register: '/users',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    profile: '/users/1',
  },
  tokenStorage: {
    storageType: 'localStorage' as const,
    accessTokenKey: 'demo_access_token',
    refreshTokenKey: 'demo_refresh_token',
  },
  autoRefresh: true,
  refreshThreshold: 5,
  onAuthStateChange: (state) => {
    console.log('Auth state changed:', state);
  },
};

// Mock user data for demo
const mockUser = {
  id: 1,
  email: 'demo@example.com',
  name: 'Demo User',
  roles: [
    {
      id: 1,
      name: 'admin',
      description: 'Administrator',
      permissions: [
        { id: 1, name: 'users:read', resource: 'users', action: 'read' },
        { id: 2, name: 'users:write', resource: 'users', action: 'write' },
        { id: 3, name: 'users:delete', resource: 'users', action: 'delete' },
      ],
    },
  ],
  permissions: [
    { id: 1, name: 'users:read', resource: 'users', action: 'read' },
    { id: 2, name: 'users:write', resource: 'users', action: 'write' },
    { id: 3, name: 'users:delete', resource: 'users', action: 'delete' },
  ],
};

// Login Form Component
function LoginForm() {
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');
  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Mock login - in real app this would call your API
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      // Mock successful login
      const mockTokens = {
        accessToken: 'mock_access_token_' + Date.now(),
        refreshToken: 'mock_refresh_token_' + Date.now(),
        expiresIn: 3600,
      };
      
      // Store mock data
      localStorage.setItem('demo_access_token', mockTokens.accessToken);
      localStorage.setItem('demo_refresh_token', mockTokens.refreshToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      // Trigger auth state update
      window.location.reload();
      
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Login to Demo</CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="error" className="mb-4">
            <AlertTitle>Login Failed</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <Button
            type="submit"
            variant="primary"
            fullWidth
            loading={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>Demo Credentials:</strong><br />
            Email: demo@example.com<br />
            Password: password
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

// User Profile Component
function UserProfile() {
  const { user, logout, hasRole, hasPermission } = useAuth();

  if (!user) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Roles:</h4>
          <div className="flex gap-2">
            {user.roles.map(role => (
              <Badge key={role.id} variant="primary">
                {role.name}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Permissions:</h4>
          <div className="grid grid-cols-2 gap-2">
            {user.permissions.map(permission => (
              <Badge key={permission.id} variant="secondary" size="sm">
                {permission.name}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <h4 className="font-medium mb-2">Access Checks:</h4>
          <div className="space-y-2 text-sm">
            <p>
              Has Admin Role: {' '}
              <Badge variant={hasRole('admin') ? 'success' : 'error'}>
                {hasRole('admin') ? 'Yes' : 'No'}
              </Badge>
            </p>
            <p>
              Can Read Users: {' '}
              <Badge variant={hasPermission('users', 'read') ? 'success' : 'error'}>
                {hasPermission('users', 'read') ? 'Yes' : 'No'}
              </Badge>
            </p>
            <p>
              Can Delete Users: {' '}
              <Badge variant={hasPermission('users', 'delete') ? 'success' : 'error'}>
                {hasPermission('users', 'delete') ? 'Yes' : 'No'}
              </Badge>
            </p>
          </div>
        </div>
        
        <Button variant="error" onClick={logout} fullWidth>
          Logout
        </Button>
      </CardContent>
    </Card>
  );
}

// Admin Panel Component
function AdminPanel() {
  const { hasPermission } = useAuth();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Admin Panel</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert variant="info">
          <AlertTitle>Admin Access</AlertTitle>
          <AlertDescription>
            You have admin access! This content is only visible to administrators.
          </AlertDescription>
        </Alert>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button 
            variant="primary" 
            disabled={!hasPermission('users', 'read')}
          >
            View Users
          </Button>
          
          <Button 
            variant="secondary" 
            disabled={!hasPermission('users', 'write')}
          >
            Create User
          </Button>
          
          <Button 
            variant="warning" 
            disabled={!hasPermission('users', 'write')}
          >
            Edit User
          </Button>
          
          <Button 
            variant="error" 
            disabled={!hasPermission('users', 'delete')}
          >
            Delete User
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Cookie Demo Component
function CookieDemo() {
  const [cookieValue, setCookieValue] = useState('');
  const [storedValue, setStoredValue] = useState('');

  const handleSetCookie = () => {
    setCookie('demo_cookie', cookieValue, { expires: 1 }); // 1 day
    alert('Cookie set successfully!');
  };

  const handleGetCookie = () => {
    const value = getCookie('demo_cookie');
    setStoredValue(value || 'No cookie found');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Management Demo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          label="Cookie Value"
          value={cookieValue}
          onChange={(e) => setCookieValue(e.target.value)}
          placeholder="Enter a value to store"
        />
        
        <div className="flex gap-2">
          <Button onClick={handleSetCookie} variant="primary">
            Set Cookie
          </Button>
          <Button onClick={handleGetCookie} variant="secondary">
            Get Cookie
          </Button>
        </div>
        
        {storedValue && (
          <Alert variant="info">
            <AlertTitle>Stored Value</AlertTitle>
            <AlertDescription>{storedValue}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}

// Main App Component
function AuthDemo() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const { mode, toggleMode } = useThemeMode();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p>Loading authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button onClick={toggleMode} variant="secondary" size="sm">
          {mode === 'dark' ? '☀️' : '🌙'} {mode}
        </Button>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Authentication Demo</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive authentication system with role-based access control
          </p>
        </div>

        {!isAuthenticated ? (
          <div className="space-y-8">
            <LoginForm />
            <CookieDemo />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Welcome Message */}
            <Alert variant="success">
              <AlertTitle>Welcome back, {user?.name}!</AlertTitle>
              <AlertDescription>
                You are successfully authenticated with {user?.roles.length} role(s) and {user?.permissions.length} permission(s).
              </AlertDescription>
            </Alert>

            {/* User Profile */}
            <UserProfile />

            {/* Protected Content */}
            <RequireRole roles={['admin']}>
              <AdminPanel />
            </RequireRole>

            {/* Cookie Demo */}
            <CookieDemo />

            {/* API Demo */}
            <Card>
              <CardHeader>
                <CardTitle>API Client Demo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The API client automatically includes authentication tokens in requests.
                </p>
                <Button 
                  variant="primary"
                  onClick={() => {
                    // Demo API call
                    console.log('Making authenticated API call...');
                    alert('Check console for API call details');
                  }}
                >
                  Make API Call
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

// Root App with Providers
function App() {
  return (
    <AuthProvider config={authConfig}>
      <ThemeProvider>
        <AuthDemo />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

