import { getIframeDocument } from "../../utils";
import { GoogleFont } from "./google-font.types";
import { googleFonts } from "./google-fonts";


const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY;
const API_URL = "https://www.googleapis.com/webfonts/v1/webfonts";

// Cache for loaded font stylesheets
const loadedFonts = new Set<string>();

export function fetchGoogleFonts(): GoogleFont[] {
  // Check if we have a valid cache
  return googleFonts;
}

// Build Google Fonts CSS API URL
export function buildFontCssUrl(family: string, weights: string[] = ["400"]): string {
  const encodedFamily = encodeURIComponent(family);
  const weightsParam = weights.join(";"); // Use semicolon for Google Fonts API v2
  return `https://fonts.googleapis.com/css2?family=${encodedFamily}:wght@${weightsParam}&display=swap`;
}

// Simple font loading using native browser APIs
// Just use a <link> tag - seems to be the recommended approach
export async function loadGoogleFont(family: string, weights: string[] = ["400", "700"]): Promise<void> {
  if (typeof document === "undefined") return;

  // Check if already loaded
  const href = buildFontCssUrl(family, weights);
  const existing = document.querySelector(`link[href="${href}"]`);
  if (existing) return;

  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;

    link.onload = () => {
      resolve();
    };

    link.onerror = () => {
      reject(new Error(`Failed to load font: ${family}`));
    };

    document.head.appendChild(link);
  });
}

// DETECT ALL FONT FAMILIES AND INJECT FONT URL INTO HEAD, We cannot use loadGoogleFont, as this is also handling italic and other font styles
export function injectGoogleFontsFromPage() {
  const fontVariantsMap = new Map();
  const skipTags = new Set(["SCRIPT", "STYLE", "META", "HEAD", "LINK", "NOSCRIPT"]);

  getIframeDocument()
    ?.querySelectorAll("*")
    .forEach((el) => {
      if (skipTags.has(el.tagName)) return;

      const style = getComputedStyle(el);
      let family = style.fontFamily
        ?.split(",")[0]
        ?.trim()
        .replace(/^["']|["']$/g, "");
      if (!family || ["serif", "sans-serif", "monospace"].includes(family)) return;

      const weight = parseInt(style.fontWeight) || 400;
      const italic = style.fontStyle === "italic" ? 1 : 0;

      const key = family.replace(/ /g, "+");
      const variant = `${italic},${weight}`;

      if (!fontVariantsMap.has(key)) fontVariantsMap.set(key, new Set());
      fontVariantsMap.get(key).add(variant);
    });

  fontVariantsMap.forEach((variants, font) => {
    const variantStr = [...variants].sort().join(";");
    const href = `https://fonts.googleapis.com/css2?family=${font}:ital,wght@${variantStr}&display=swap`;

    // Inject once
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  });
}

export interface FontPickerProps {
  onFontSelect?: (font: GoogleFont) => void;
  value?: string;
}

export const FONT_CATEGORIES = ["serif", "sans-serif", "display", "handwriting", "monospace"] as const;

export type FontCategory = (typeof FONT_CATEGORIES)[number];

export const FONT_WEIGHTS = ["100", "200", "300", "400", "500", "600", "700", "800", "900"] as const;

export type FontWeight = (typeof FONT_WEIGHTS)[number];
