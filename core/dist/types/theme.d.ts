export interface ThemeColors {
    primary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    secondary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    accent: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    success: string;
    warning: string;
    error: string;
    info: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
}
export interface ThemeSpacing {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
}
export interface ThemeTypography {
    fontFamily: {
        sans: string[];
        serif: string[];
        mono: string[];
    };
    fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    fontWeight: {
        light: number;
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
    };
    lineHeight: {
        tight: number;
        snug: number;
        normal: number;
        relaxed: number;
        loose: number;
    };
}
export interface ThemeBorderRadius {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    full: string;
}
export interface ThemeShadow {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    soft: string;
    medium: string;
    hard: string;
}
export interface Theme {
    colors: ThemeColors;
    spacing: ThemeSpacing;
    typography: ThemeTypography;
    borderRadius: ThemeBorderRadius;
    shadow: ThemeShadow;
    mode: 'light' | 'dark';
}
export interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Partial<Theme>) => void;
    toggleMode: () => void;
    resetTheme: () => void;
}
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ComponentVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
export type ComponentState = 'default' | 'hover' | 'active' | 'disabled' | 'loading';
export interface BaseComponentProps {
    className?: string;
    size?: ComponentSize;
    variant?: ComponentVariant;
    disabled?: boolean;
    loading?: boolean;
}
