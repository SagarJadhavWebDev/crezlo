import { useEffect, useState, useCallback, useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Theme, ComponentSize, ComponentVariant } from '../types/theme';
import { createCSSVariables, getColorValue, getSizeValue, getFontSizeValue } from '../utils/themeUtils';

export const useThemeMode = () => {
  const { theme, toggleMode, setTheme } = useTheme();

  const setLightMode = useCallback(() => {
    if (theme.mode !== 'light') {
      setTheme({ mode: 'light' });
    }
  }, [theme.mode, setTheme]);

  const setDarkMode = useCallback(() => {
    if (theme.mode !== 'dark') {
      setTheme({ mode: 'dark' });
    }
  }, [theme.mode, setTheme]);

  return {
    mode: theme.mode,
    isDark: theme.mode === 'dark',
    isLight: theme.mode === 'light',
    toggleMode,
    setLightMode,
    setDarkMode,
  };
};

export const useThemeColors = () => {
  const { theme } = useTheme();

  return useMemo(() => ({
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    accent: theme.colors.accent,
    success: theme.colors.success,
    warning: theme.colors.warning,
    error: theme.colors.error,
    info: theme.colors.info,
    background: theme.colors.background,
    foreground: theme.colors.foreground,
    muted: theme.colors.muted,
    border: theme.colors.border,
    getColor: (variant: ComponentVariant, shade: '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' = '500') =>
      getColorValue(theme, variant, shade),
  }), [theme.colors]);
};

export const useThemeSpacing = () => {
  const { theme } = useTheme();

  return useMemo(() => ({
    ...theme.spacing,
    getSize: (size: ComponentSize) => getSizeValue(theme, size),
  }), [theme.spacing]);
};

export const useThemeTypography = () => {
  const { theme } = useTheme();

  return useMemo(() => ({
    ...theme.typography,
    getFontSize: (size: ComponentSize) => getFontSizeValue(theme, size),
  }), [theme.typography]);
};

export const useCSSVariables = () => {
  const { theme } = useTheme();

  return useMemo(() => createCSSVariables(theme), [theme]);
};

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
};

export const useResponsive = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const isLarge = useMediaQuery('(min-width: 1440px)');

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLarge,
    breakpoint: isMobile ? 'mobile' : isTablet ? 'tablet' : isDesktop ? 'desktop' : 'large',
  };
};

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue] as const;
};

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue(prev => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, toggle, setTrue, setFalse] as const;
};


// Export auth hooks
export * from './useAuthGuard';

