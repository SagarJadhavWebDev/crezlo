import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { Theme, ThemeContextValue } from '../types/theme';
import { defaultLightTheme, defaultDarkTheme, createCustomTheme } from './defaultTheme';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Partial<Theme>;
  enableSystemTheme?: boolean;
  storageKey?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme,
  enableSystemTheme = true,
  storageKey = 'react-theme-components-theme',
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Try to load theme from localStorage
    if (typeof window !== 'undefined' && storageKey) {
      try {
        const savedTheme = localStorage.getItem(storageKey);
        if (savedTheme) {
          const parsedTheme = JSON.parse(savedTheme);
          return createCustomTheme(parsedTheme);
        }
      } catch (error) {
        console.warn('Failed to parse saved theme:', error);
      }
    }

    // Use system theme if enabled
    if (enableSystemTheme && typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = prefersDark ? defaultDarkTheme : defaultLightTheme;
      return createCustomTheme({ ...systemTheme, ...initialTheme });
    }

    // Use initial theme or default light theme
    return createCustomTheme({ ...defaultLightTheme, ...initialTheme });
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && storageKey) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(theme));
      } catch (error) {
        console.warn('Failed to save theme to localStorage:', error);
      }
    }
  }, [theme, storageKey]);

  // Listen for system theme changes
  useEffect(() => {
    if (!enableSystemTheme || typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setThemeState(prevTheme => {
        const newMode = e.matches ? 'dark' : 'light';
        if (prevTheme.mode !== newMode) {
          return createCustomTheme({ ...prevTheme, mode: newMode });
        }
        return prevTheme;
      });
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableSystemTheme]);

  const setTheme = useCallback((newTheme: Partial<Theme>) => {
    setThemeState(prevTheme => createCustomTheme({ ...prevTheme, ...newTheme }));
  }, []);

  const toggleMode = useCallback(() => {
    setThemeState(prevTheme => {
      const newMode = prevTheme.mode === 'light' ? 'dark' : 'light';
      const baseTheme = newMode === 'dark' ? defaultDarkTheme : defaultLightTheme;
      return createCustomTheme({ ...prevTheme, ...baseTheme, mode: newMode });
    });
  }, []);

  const resetTheme = useCallback(() => {
    const baseTheme = theme.mode === 'dark' ? defaultDarkTheme : defaultLightTheme;
    setThemeState(createCustomTheme({ ...baseTheme, ...initialTheme }));
  }, [theme.mode, initialTheme]);

  const contextValue: ThemeContextValue = {
    theme,
    setTheme,
    toggleMode,
    resetTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeContext };

