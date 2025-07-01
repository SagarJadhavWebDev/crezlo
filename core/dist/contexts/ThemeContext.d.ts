import React, { ReactNode } from 'react';
import { Theme, ThemeContextValue } from '../types/theme';
declare const ThemeContext: React.Context<ThemeContextValue>;
export interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Partial<Theme>;
    enableSystemTheme?: boolean;
    storageKey?: string;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => ThemeContextValue;
export { ThemeContext };
