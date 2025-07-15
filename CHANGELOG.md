# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-06-30

### Added

#### 🔐 Authentication System
- **AuthContext** - Comprehensive authentication context with role management
- **AuthProvider** - Provider component for authentication state management
- **useAuth** - Hook for accessing authentication state and methods
- **Role-Based Access Control** - Support for roles and permissions
- **Protected Routes** - Components for route protection based on auth state
- **Authentication Guards** - Hooks for component-level access control
- **Token Management** - Automatic token refresh and storage
- **Multiple Storage Options** - localStorage, sessionStorage, and cookie support

#### 🌐 API Client
- **ApiClient Class** - Full-featured HTTP client with interceptors
- **Request/Response Interceptors** - Middleware for request/response processing
- **Error Handling** - Comprehensive error handling and retry logic
- **Automatic Token Injection** - Auth tokens automatically added to requests
- **TypeScript Support** - Full type safety for API calls
- **Timeout Management** - Configurable request timeouts
- **Query Parameters** - Easy query parameter handling

#### 🍪 Cookie Management
- **CookieManager Class** - Comprehensive cookie management utility
- **Multiple Cookie Options** - Support for all cookie attributes
- **JSON Cookie Support** - Automatic JSON serialization/deserialization
- **Cookie Utilities** - Helper functions for common operations
- **SSR Support** - Server-side rendering compatibility
- **Cookie Size Monitoring** - Track cookie storage usage
- **Prefix Support** - Namespace cookies with prefixes

#### 🛡️ Security Features
- **Secure Token Storage** - Multiple storage strategies with security options
- **CSRF Protection** - Built-in CSRF token handling
- **Automatic Token Refresh** - Background token renewal
- **Session Management** - Complete session lifecycle management
- **Permission Checking** - Granular permission validation
- **Role Hierarchy** - Support for hierarchical role systems

#### 🧩 New Components
- **ProtectedRoute** - Route protection with auth requirements
- **RequireAuth** - Simple authentication requirement wrapper
- **RequireRole** - Role-based component protection
- **RequirePermission** - Permission-based component protection

#### 🎣 New Hooks
- **useAuthGuard** - Authentication and authorization guard
- **useRequireAuth** - Simple auth requirement hook
- **useRequireRoles** - Role requirement hook
- **useRequirePermissions** - Permission requirement hook

#### 📚 Enhanced Documentation
- **Authentication Guide** - Complete authentication setup guide
- **API Client Documentation** - Detailed API client usage examples
- **Cookie Management Guide** - Cookie utility documentation
- **Security Best Practices** - Security implementation guidelines
- **Role Management Examples** - RBAC implementation patterns

#### 🔧 Configuration Options
- **Flexible Auth Config** - Comprehensive authentication configuration
- **Environment-Specific Settings** - Development/production configurations
- **Custom Endpoints** - Configurable API endpoints
- **Storage Strategies** - Multiple token storage options
- **Auto-Refresh Settings** - Configurable token refresh behavior

### Enhanced

#### 🎨 Theme System
- **Enhanced Theme Integration** - Better integration with auth state
- **Dynamic Theme Loading** - Theme changes based on user preferences
- **User Preference Storage** - Theme preferences in user profile

#### 🧪 Testing
- **Authentication Testing** - Mock authentication for testing
- **API Client Testing** - Mock API responses and error scenarios
- **Cookie Testing** - Cookie management testing utilities

### Technical Improvements

#### 📦 Build System
- **Enhanced TypeScript** - Improved type definitions for auth features
- **Better Tree Shaking** - Optimized bundle size with new features
- **Source Maps** - Enhanced debugging support

#### 🔄 State Management
- **Auth State Persistence** - Persistent authentication state
- **State Synchronization** - Cross-tab authentication sync
- **Memory Management** - Optimized memory usage for auth state

## [1.0.0] - 2025-06-30

### Added

#### Core Features
- Complete theme system with light/dark mode support
- TypeScript support with full type definitions
- Tailwind CSS integration with custom component styles
- Responsive design utilities and hooks
- CSS variable generation for theme integration
- LocalStorage theme persistence
- System theme detection

#### Components
- **Button** - Versatile button with variants, sizes, loading states
- **Input** - Flexible input with labels, icons, validation
- **Card** - Container with header, content, footer sections
- **Badge** - Status indicators with variants and styles
- **Alert** - Message display with closable and icon support
- **Modal** - Dialog overlay with backdrop and animations
- **Spinner** - Loading indicators with customizable speed/size
- **Toggle** - Switch component for boolean inputs

#### Theme System
- **ThemeProvider** - Context provider for theme management
- **Default Themes** - Pre-built light and dark themes
- **Custom Theme Creation** - Utility for creating custom themes
- **Color System** - Comprehensive color palette with shades
- **Typography System** - Font families, sizes, weights
- **Spacing System** - Consistent spacing scale
- **Shadow System** - Multiple shadow variants

#### Hooks
- **useTheme** - Access and modify theme state
- **useThemeMode** - Simplified theme mode management
- **useThemeColors** - Access theme color values
- **useThemeSpacing** - Access spacing values
- **useThemeTypography** - Access typography settings
- **useResponsive** - Responsive breakpoint detection
- **useLocalStorage** - LocalStorage state management
- **useDebounce** - Value debouncing utility
- **useToggle** - Boolean state management

#### Utilities
- **Theme Utils** - Color, size, and class generation utilities
- **CSS Variables** - Dynamic CSS variable creation
- **Color Manipulation** - Lighten, darken, hex/rgb conversion
- **Component Class Generation** - Consistent class name generation

#### Documentation
- Comprehensive README with usage examples
- TypeScript type definitions
- Component API documentation
- Theme customization guide
- Hook usage examples
- Responsive design patterns

#### Examples
- Simple usage example
- Comprehensive component showcase
- Theme customization examples
- Form integration patterns

### Technical Details
- Built with Rollup for optimal bundling
- ES modules and CommonJS support
- Tree-shakable exports
- Source maps included
- Peer dependencies for React 16.8+
- PostCSS and Autoprefixer integration

