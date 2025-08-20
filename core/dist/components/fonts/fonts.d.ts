export interface GoogleFont {
    family: string;
    variants: string[];
    subsets: string[];
    version: string;
    lastModified: string;
    files: Record<string, string>;
    category: string;
    kind: string;
}
export declare function fetchGoogleFonts(): GoogleFont[];
export declare function buildFontCssUrl(family: string, weights?: string[]): string;
export declare function loadGoogleFont(family: string, weights?: string[]): Promise<void>;
export declare function injectGoogleFontsFromPage(): void;
export interface FontPickerProps {
    onFontSelect?: (font: GoogleFont) => void;
    value?: string;
}
export declare const FONT_CATEGORIES: readonly ["serif", "sans-serif", "display", "handwriting", "monospace"];
export type FontCategory = (typeof FONT_CATEGORIES)[number];
export declare const FONT_WEIGHTS: readonly ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
export type FontWeight = (typeof FONT_WEIGHTS)[number];
