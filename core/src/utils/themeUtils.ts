import { Theme, ComponentSize, ComponentVariant } from '../types/theme';

export const getColorValue = (theme: Theme, variant: ComponentVariant, shade: '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' = '500'): string => {
  switch (variant) {
    case 'primary':
      return theme.colors.primary[shade];
    case 'secondary':
      return theme.colors.secondary[shade];
    case 'accent':
      return theme.colors.accent[shade];
    case 'success':
      return theme.colors.success;
    case 'warning':
      return theme.colors.warning;
    case 'error':
      return theme.colors.error;
    case 'info':
      return theme.colors.info;
    default:
      return theme.colors.primary[shade];
  }
};

export const getSizeValue = (theme: Theme, size: ComponentSize): string => {
  const sizeMap = {
    xs: theme.spacing.xs,
    sm: theme.spacing.sm,
    md: theme.spacing.md,
    lg: theme.spacing.lg,
    xl: theme.spacing.xl,
  };
  return sizeMap[size];
};

export const getFontSizeValue = (theme: Theme, size: ComponentSize): string => {
  const fontSizeMap = {
    xs: theme.typography.fontSize.xs,
    sm: theme.typography.fontSize.sm,
    md: theme.typography.fontSize.base,
    lg: theme.typography.fontSize.lg,
    xl: theme.typography.fontSize.xl,
  };
  return fontSizeMap[size];
};

export const generateComponentClasses = (
  baseClasses: string,
  variant: ComponentVariant = 'primary',
  size: ComponentSize = 'md',
  disabled: boolean = false,
  loading: boolean = false,
  customClasses?: string
): string => {
  const classes = [baseClasses];

  // Add variant classes
  classes.push(`variant-${variant}`);
  
  // Add size classes
  classes.push(`size-${size}`);

  // Add state classes
  if (disabled) classes.push('disabled');
  if (loading) classes.push('loading');

  // Add custom classes
  if (customClasses) classes.push(customClasses);

  return classes.join(' ');
};

export const createCSSVariables = (theme: Theme): Record<string, string> => {
  const cssVars: Record<string, string> = {};

  // Colors
  Object.entries(theme.colors.primary).forEach(([key, value]) => {
    cssVars[`--color-primary-${key}`] = value;
  });
  Object.entries(theme.colors.secondary).forEach(([key, value]) => {
    cssVars[`--color-secondary-${key}`] = value;
  });
  Object.entries(theme.colors.accent).forEach(([key, value]) => {
    cssVars[`--color-accent-${key}`] = value;
  });

  // Single colors
  cssVars['--color-success'] = theme.colors.success;
  cssVars['--color-warning'] = theme.colors.warning;
  cssVars['--color-error'] = theme.colors.error;
  cssVars['--color-info'] = theme.colors.info;
  cssVars['--color-background'] = theme.colors.background;
  cssVars['--color-foreground'] = theme.colors.foreground;
  cssVars['--color-muted'] = theme.colors.muted;
  cssVars['--color-border'] = theme.colors.border;

  // Spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    cssVars[`--spacing-${key}`] = value;
  });

  // Typography
  Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
    cssVars[`--font-size-${key}`] = value;
  });

  // Border radius
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    cssVars[`--border-radius-${key}`] = value;
  });

  // Shadows
  Object.entries(theme.shadow).forEach(([key, value]) => {
    cssVars[`--shadow-${key}`] = value;
  });

  return cssVars;
};

export const applyThemeToElement = (element: HTMLElement, theme: Theme): void => {
  const cssVars = createCSSVariables(theme);
  Object.entries(cssVars).forEach(([property, value]) => {
    element.style.setProperty(property, value);
  });
};

export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const rgbToHex = (r: number, g: number, b: number): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

export const lighten = (color: string, amount: number): string => {
  const rgb = hexToRgb(color);
  if (!rgb) return color;

  const { r, g, b } = rgb;
  const newR = Math.min(255, Math.floor(r + (255 - r) * amount));
  const newG = Math.min(255, Math.floor(g + (255 - g) * amount));
  const newB = Math.min(255, Math.floor(b + (255 - b) * amount));

  return rgbToHex(newR, newG, newB);
};

export const darken = (color: string, amount: number): string => {
  const rgb = hexToRgb(color);
  if (!rgb) return color;

  const { r, g, b } = rgb;
  const newR = Math.max(0, Math.floor(r * (1 - amount)));
  const newG = Math.max(0, Math.floor(g * (1 - amount)));
  const newB = Math.max(0, Math.floor(b * (1 - amount)));

  return rgbToHex(newR, newG, newB);
};

