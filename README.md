# React Theme Components

A comprehensive React component library built with TypeScript, Tailwind CSS, and complete theme support for creating consistent, reusable UI components across different projects.

## Features

- 🎨 **Complete Theme System** - Customizable themes with light/dark mode support
- 🔧 **TypeScript Support** - Full type safety and IntelliSense
- 🎯 **Tailwind CSS Integration** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first responsive components
- 🎭 **Multiple Variants** - Primary, secondary, accent, success, warning, error, info
- 📏 **Size Options** - xs, sm, md, lg, xl sizing for all components
- 🎪 **Animation Support** - Smooth transitions and animations
- 🔄 **Context Providers** - Easy theme management across your app
- 🪝 **Custom Hooks** - Utility hooks for theme and responsive design
- 📦 **Tree Shakable** - Import only what you need

## Installation

```bash
npm install react-theme-components
# or
yarn add react-theme-components
# or
pnpm add react-theme-components
```

### Install from GitHub

```bash
npm install git+https://github.com/yourusername/react-theme-components.git
# or
yarn add git+https://github.com/yourusername/react-theme-components.git
```

## Quick Start

### 1. Wrap your app with ThemeProvider

```tsx
import React from 'react';
import { ThemeProvider } from 'react-theme-components';
import 'react-theme-components/dist/index.css'; // Import styles

function App() {
  return (
    <ThemeProvider>
      <YourAppContent />
    </ThemeProvider>
  );
}
```

### 2. Use components in your app

```tsx
import React from 'react';
import { Button, Card, CardHeader, CardTitle, CardContent, Input, Badge } from 'react-theme-components';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to React Theme Components</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input 
          label="Email" 
          placeholder="Enter your email" 
          type="email" 
        />
        <div className="flex gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
        </div>
        <div className="flex gap-2">
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from 'react-theme-components';

<Button variant="primary" size="md" onClick={() => console.log('Clicked!')}>
  Click me
</Button>

<Button variant="secondary" size="lg" loading>
  Loading...
</Button>

<Button variant="accent" size="sm" disabled>
  Disabled
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info'
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `loading`: boolean
- `disabled`: boolean
- `fullWidth`: boolean
- `asChild`: boolean

### Input

A flexible input component with label, helper text, and error support.

```tsx
import { Input } from 'react-theme-components';

<Input
  label="Email Address"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  error={errors.email}
  leftIcon={<EmailIcon />}
  rightIcon={<CheckIcon />}
/>
```

**Props:**
- `label`: string
- `helperText`: string
- `error`: string
- `leftIcon`: ReactNode
- `rightIcon`: ReactNode
- `fullWidth`: boolean
- All standard HTML input props

### Card

A container component with header, content, and footer sections.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'react-theme-components';

<Card shadow="medium">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Props:**
- `shadow-sm`: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'soft' | 'medium' | 'hard'
- `padding`: boolean

### Badge

A small status indicator component.

```tsx
import { Badge } from 'react-theme-components';

<Badge variant="success">Active</Badge>
<Badge variant="warning" dot>Warning</Badge>
<Badge variant="error" outline>Error</Badge>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info'
- `dot`: boolean
- `outline-solid`: boolean

### Alert

A component for displaying important messages.

```tsx
import { Alert, AlertTitle, AlertDescription } from 'react-theme-components';

<Alert variant="success" closable onClose={() => setShowAlert(false)}>
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info'
- `title`: string
- `icon`: ReactNode
- `closable`: boolean
- `onClose`: () => void

### Modal

A dialog component for overlays and modals.

```tsx
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter } from 'react-theme-components';

<Modal 
  open={isOpen} 
  onClose={() => setIsOpen(false)}
  size="lg"
  backdrop="blur"
  animation="scale"
>
  <ModalHeader>
    <ModalTitle>Modal Title</ModalTitle>
  </ModalHeader>
  <ModalContent>
    <p>Modal content goes here</p>
  </ModalContent>
  <ModalFooter>
    <Button variant="secondary" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
    <Button variant="primary">
      Confirm
    </Button>
  </ModalFooter>
</Modal>
```

**Props:**
- `open`: boolean
- `onClose`: () => void
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `backdrop`: 'blur-sm' | 'dark' | 'light'
- `animation`: 'fade' | 'scale' | 'slide-up' | 'slide-down'
- `closeOnBackdrop`: boolean
- `closeOnEscape`: boolean
- `showCloseButton`: boolean

### Spinner

A loading spinner component.

```tsx
import { Spinner } from 'react-theme-components';

<Spinner variant="primary" size="md" />
<Spinner variant="accent" size="lg" speed="fast" />
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info'
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `speed`: 'slow' | 'normal' | 'fast'
- `thickness`: 'thin' | 'normal' | 'thick'

### Toggle

A switch/toggle component for boolean inputs.

```tsx
import { Toggle } from 'react-theme-components';

<Toggle
  label="Enable notifications"
  description="Receive email notifications"
  checked={isEnabled}
  onCheckedChange={setIsEnabled}
/>
```

**Props:**
- `label`: string
- `description`: string
- `checked`: boolean
- `onCheckedChange`: (checked: boolean) => void
- All standard HTML input props (except size)

## Theme System

### ThemeProvider

The ThemeProvider component manages theme state and provides it to all child components.

```tsx
import { ThemeProvider } from 'react-theme-components';

<ThemeProvider
  initialTheme={{ mode: 'dark' }}
  enableSystemTheme={true}
  storageKey="my-app-theme"
>
  <App />
</ThemeProvider>
```

**Props:**
- `initialTheme`: Partial theme object
- `enableSystemTheme`: boolean - Auto-detect system theme preference
- `storageKey`: string - LocalStorage key for theme persistence

### Custom Themes

Create custom themes by extending the default theme:

```tsx
import { createCustomTheme, ThemeProvider } from 'react-theme-components';

const customTheme = createCustomTheme({
  colors: {
    primary: {
      500: '#ff6b6b',
      600: '#ff5252',
      // ... other shades
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    // ... other sizes
  },
});

<ThemeProvider initialTheme={customTheme}>
  <App />
</ThemeProvider>
```

## Hooks

### useTheme

Access and modify the current theme:

```tsx
import { useTheme } from 'react-theme-components';

function MyComponent() {
  const { theme, setTheme, toggleMode, resetTheme } = useTheme();
  
  return (
    <div>
      <p>Current mode: {theme.mode}</p>
      <button onClick={toggleMode}>Toggle Theme</button>
      <button onClick={resetTheme}>Reset Theme</button>
    </div>
  );
}
```

### useThemeMode

Simplified theme mode management:

```tsx
import { useThemeMode } from 'react-theme-components';

function ThemeToggle() {
  const { mode, isDark, toggleMode, setLightMode, setDarkMode } = useThemeMode();
  
  return (
    <button onClick={toggleMode}>
      {isDark ? '🌙' : '☀️'} {mode} mode
    </button>
  );
}
```

### useThemeColors

Access theme colors:

```tsx
import { useThemeColors } from 'react-theme-components';

function MyComponent() {
  const { primary, getColor } = useThemeColors();
  
  return (
    <div style={{ backgroundColor: getColor('primary', '100') }}>
      <p style={{ color: primary[600] }}>Themed content</p>
    </div>
  );
}
```

### useResponsive

Responsive design utilities:

```tsx
import { useResponsive } from 'react-theme-components';

function ResponsiveComponent() {
  const { isMobile, isTablet, isDesktop, breakpoint } = useResponsive();
  
  return (
    <div>
      <p>Current breakpoint: {breakpoint}</p>
      {isMobile && <MobileLayout />}
      {isTablet && <TabletLayout />}
      {isDesktop && <DesktopLayout />}
    </div>
  );
}
```

## Styling

### CSS Variables

The theme system generates CSS variables that you can use in your custom styles:

```css
.my-custom-component {
  background-color: var(--color-primary-500);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-soft);
}
```

### Tailwind Integration

All components are built with Tailwind CSS and support Tailwind classes:

```tsx
<Button className="mt-4 shadow-lg hover:shadow-xl transition-shadow">
  Custom styled button
</Button>
```

### Dark Mode

Dark mode is automatically handled by the theme system:

```tsx
// The theme automatically switches colors based on mode
<div className="bg-background text-foreground">
  This will be white/black in light mode and black/white in dark mode
</div>
```

## TypeScript Support

All components are fully typed with TypeScript:

```tsx
import { ButtonProps, InputProps, Theme } from 'react-theme-components';

// Component props are fully typed
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

// Theme object is typed
const customTheme: Partial<Theme> = {
  colors: {
    primary: {
      500: '#custom-color', // TypeScript will validate this
    },
  },
};
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### v1.0.0

- Initial release
- Complete theme system with light/dark mode
- 8 core components (Button, Input, Card, Badge, Alert, Modal, Spinner, Toggle)
- TypeScript support
- Tailwind CSS integration
- Custom hooks for theme management
- Responsive design utilities
- Full documentation and examples



## 🔐 Authentication & API Features

### AuthContext with Role Management

The package includes a comprehensive authentication system with role-based access control:

```tsx
import { AuthProvider, useAuth } from 'react-theme-components';

// Configure the auth provider
const authConfig = {
  apiBaseURL: 'https://your-api.com',
  endpoints: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    profile: '/auth/profile',
  },
  tokenStorage: {
    storageType: 'localStorage', // or 'sessionStorage' or 'cookie'
    accessTokenKey: 'accessToken',
    refreshTokenKey: 'refreshToken',
  },
  autoRefresh: true,
  refreshThreshold: 5, // minutes before expiry
};

function App() {
  return (
    <AuthProvider config={authConfig}>
      <ThemeProvider>
        <YourApp />
      </ThemeProvider>
    </AuthProvider>
  );
}

// Use authentication in components
function LoginForm() {
  const { login, isLoading, error } = useAuth();
  
  const handleLogin = async (credentials) => {
    try {
      await login(credentials);
      // User is now authenticated
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  return (
    <form onSubmit={handleLogin}>
      {/* Login form */}
    </form>
  );
}
```

### Role-Based Access Control

```tsx
import { useAuth, RequireRole, RequirePermission } from 'react-theme-components';

function AdminPanel() {
  const { hasRole, hasPermission } = useAuth();
  
  if (!hasRole('admin')) {
    return <div>Access denied</div>;
  }
  
  return (
    <div>
      {hasPermission('users', 'create') && (
        <button>Create User</button>
      )}
      
      {hasPermission('users', 'delete') && (
        <button>Delete User</button>
      )}
    </div>
  );
}

// Or use component guards
function ProtectedContent() {
  return (
    <RequireRole roles={['admin', 'moderator']}>
      <AdminPanel />
    </RequireRole>
  );
}

function PermissionBasedContent() {
  return (
    <RequirePermission 
      permissions={[{ resource: 'users', action: 'read' }]}
    >
      <UserList />
    </RequirePermission>
  );
}
```

### Protected Routes

```tsx
import { ProtectedRoute, RequireAuth } from 'react-theme-components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/public" element={<PublicPage />} />
        
        {/* Require authentication */}
        <Route path="/dashboard" element={
          <RequireAuth redirectTo="/login">
            <Dashboard />
          </RequireAuth>
        } />
        
        {/* Require specific roles */}
        <Route path="/admin" element={
          <ProtectedRoute 
            requiredRoles={['admin']} 
            redirectTo="/unauthorized"
          >
            <AdminPanel />
          </ProtectedRoute>
        } />
        
        {/* Require specific permissions */}
        <Route path="/users" element={
          <ProtectedRoute 
            requiredPermissions={[{ resource: 'users', action: 'read' }]}
            redirectTo="/unauthorized"
          >
            <UserManagement />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}
```

### API Client

Built-in API client with interceptors and automatic token management:

```tsx
import { createApiClient, apiCall } from 'react-theme-components';

// Create a configured API client
const apiClient = createApiClient({
  baseURL: 'https://your-api.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor
apiClient.addRequestInterceptor(async (config) => {
  // Add auth token, modify headers, etc.
  return config;
});

// Add response interceptor
apiClient.addResponseInterceptor(async (response) => {
  // Handle response data
  return response;
});

// Add error interceptor
apiClient.addErrorInterceptor(async (error) => {
  // Handle errors, refresh tokens, etc.
  return error;
});

// Use the client
async function fetchUsers() {
  try {
    const response = await apiClient.get('/users');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
}

// Quick API calls without creating a client
async function quickCall() {
  const response = await apiCall('/api/data', {
    method: 'POST',
    body: { name: 'John' },
    baseURL: 'https://api.example.com',
  });
  return response.data;
}
```

### Cookie Management

Comprehensive cookie management utilities:

```tsx
import { 
  cookieManager, 
  setCookie, 
  getCookie, 
  setCookieJSON, 
  getCookieJSON,
  createCookieManager 
} from 'react-theme-components';

// Basic cookie operations
setCookie('username', 'john_doe', { expires: 7 }); // Expires in 7 days
const username = getCookie('username');

// JSON cookies
setCookieJSON('user_preferences', { theme: 'dark', language: 'en' });
const preferences = getCookieJSON('user_preferences');

// Advanced cookie options
setCookie('secure_token', 'abc123', {
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  secure: true,
  sameSite: 'strict',
  path: '/admin',
});

// Create custom cookie manager
const authCookies = createCookieManager({
  prefix: 'auth_',
  defaultSecure: true,
  defaultSameSite: 'lax',
});

authCookies.set('token', 'xyz789');
const token = authCookies.get('token'); // Gets 'auth_token'

// Utility methods
console.log('Cookies enabled:', cookieManager.isEnabled());
console.log('All cookies:', cookieManager.getAll());
console.log('Cookie size:', cookieManager.getSize('username'));
console.log('Total size:', cookieManager.getTotalSize());
```

### Authentication Hooks

```tsx
import { 
  useAuth, 
  useAuthGuard, 
  useRequireAuth, 
  useRequireRoles 
} from 'react-theme-components';

// Basic auth hook
function UserProfile() {
  const { user, logout, updateUser } = useAuth();
  
  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

// Auth guard hook
function AdminComponent() {
  const { isAuthorized, isLoading } = useAuthGuard({
    requiredRoles: ['admin'],
    redirectTo: '/unauthorized',
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (!isAuthorized) return <div>Access denied</div>;
  
  return <div>Admin content</div>;
}

// Convenience hooks
function Dashboard() {
  const { isAuthorized } = useRequireAuth('/login');
  const { isAuthorized: isAdmin } = useRequireRoles(['admin']);
  
  return (
    <div>
      <h1>Dashboard</h1>
      {isAdmin && <AdminPanel />}
    </div>
  );
}
```

## 🔧 Advanced Configuration

### Custom Theme with Authentication

```tsx
import { 
  ThemeProvider, 
  AuthProvider, 
  createTheme 
} from 'react-theme-components';

const customTheme = createTheme({
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      900: '#1e3a8a',
    },
    // ... other colors
  },
});

const authConfig = {
  apiBaseURL: process.env.REACT_APP_API_URL,
  tokenStorage: {
    storageType: 'cookie',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    },
  },
  onAuthStateChange: (state) => {
    // Track authentication events
    console.log('Auth state changed:', state);
  },
};

function App() {
  return (
    <AuthProvider config={authConfig}>
      <ThemeProvider theme={customTheme}>
        <Router>
          <Routes>
            {/* Your routes */}
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
```

### Environment-Specific Configuration

```tsx
// config/auth.ts
export const authConfig = {
  apiBaseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
  endpoints: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    refresh: '/api/auth/refresh',
    profile: '/api/auth/me',
  },
  tokenStorage: {
    storageType: process.env.NODE_ENV === 'production' ? 'cookie' : 'localStorage',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      domain: process.env.REACT_APP_COOKIE_DOMAIN,
    },
  },
  autoRefresh: true,
  refreshThreshold: 5,
};
```

