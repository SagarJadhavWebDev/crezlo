import { ComponentSize, ComponentVariant } from '../types/theme';
export declare const useThemeMode: () => {
    mode: "light" | "dark";
    isDark: boolean;
    isLight: boolean;
    toggleMode: () => void;
    setLightMode: () => void;
    setDarkMode: () => void;
};
export declare const useThemeColors: () => {
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
    getColor: (variant: ComponentVariant, shade?: "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900") => string;
};
export declare const useThemeSpacing: () => {
    getSize: (size: ComponentSize) => string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
};
export declare const useThemeTypography: () => {
    getFontSize: (size: ComponentSize) => string;
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
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
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
};
export declare const useCSSVariables: () => Record<string, string>;
export declare const useMediaQuery: (query: string) => boolean;
export declare const useResponsive: () => {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isLarge: boolean;
    breakpoint: string;
};
export declare const useLocalStorage: <T>(key: string, initialValue: T) => readonly [T, (value: T | ((val: T) => T)) => void, () => void];
export declare const useDebounce: <T>(value: T, delay: number) => T;
export declare const useToggle: (initialValue?: boolean) => readonly [boolean, () => void, () => void, () => void];
export * from './useAuthGuard';
