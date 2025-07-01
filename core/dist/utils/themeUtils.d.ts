import { Theme, ComponentSize, ComponentVariant } from '../types/theme';
export declare const getColorValue: (theme: Theme, variant: ComponentVariant, shade?: "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900") => string;
export declare const getSizeValue: (theme: Theme, size: ComponentSize) => string;
export declare const getFontSizeValue: (theme: Theme, size: ComponentSize) => string;
export declare const generateComponentClasses: (baseClasses: string, variant?: ComponentVariant, size?: ComponentSize, disabled?: boolean, loading?: boolean, customClasses?: string) => string;
export declare const createCSSVariables: (theme: Theme) => Record<string, string>;
export declare const applyThemeToElement: (element: HTMLElement, theme: Theme) => void;
export declare const hexToRgb: (hex: string) => {
    r: number;
    g: number;
    b: number;
} | null;
export declare const rgbToHex: (r: number, g: number, b: number) => string;
export declare const lighten: (color: string, amount: number) => string;
export declare const darken: (color: string, amount: number) => string;
