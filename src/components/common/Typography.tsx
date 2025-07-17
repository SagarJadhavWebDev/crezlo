interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "gradient" | "underline";
  align?: "left" | "center" | "right";
}

const baseHeadingClasses = "font-bold text-gray-800 dark:text-gray-100";

const textVariantClasses = {
  default: "",
  gradient: "bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500",
  underline: "pb-2 border-b-2 border-violet-200 dark:border-violet-800",
};

const textAlignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};
export function H1({ children, className = "", variant = "default", align = "left", ...props }: HeadingProps) {
  return (
    <h1
      className={`text-3xl md:text-4xl lg:text-5xl ${baseHeadingClasses} ${textVariantClasses[variant]} ${textAlignClasses[align]} ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className = "", variant = "default", align = "left", ...props }: HeadingProps) {
  return (
    <h2 className={`text-2xl md:text-3xl ${baseHeadingClasses} ${textVariantClasses[variant]} ${textAlignClasses[align]} ${className}`} {...props}>
      {children}
    </h2>
  );
}

export function H3({ children, className = "", variant = "default", align = "left", ...props }: HeadingProps) {
  return (
    <h3 className={`text-xl md:text-2xl ${baseHeadingClasses} ${textVariantClasses[variant]} ${textAlignClasses[align]} ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function H4({ children, className = "", variant = "default", align = "left", ...props }: HeadingProps) {
  return (
    <h4 className={`text-lg md:text-xl ${baseHeadingClasses} ${textVariantClasses[variant]} ${textAlignClasses[align]} ${className}`} {...props}>
      {children}
    </h4>
  );
}

export function H5({ children, className = "", variant = "default", align = "left", ...props }: HeadingProps) {
  return (
    <h5 className={`text-base md:text-lg  ${baseHeadingClasses} ${textVariantClasses[variant]} ${textAlignClasses[align]}  ${className}`} {...props}>
      {children}
    </h5>
  );
}

export function H6({ children, className = "", variant = "default", align = "left", ...props }: HeadingProps) {
  return (
    <h6
      className={`text-sm md:text-base font-semibold text-gray-900 ${textVariantClasses[variant]} ${textAlignClasses[align]}  ${className}`}
      {...props}
    >
      {children}
    </h6>
  );
}

export function P({ children, className = "", variant = "default", align = "left", ...props }: HeadingProps) {
  return (
    <h6 className={`text-sm text-gray-700 ${textVariantClasses[variant]} ${textAlignClasses[align]}  ${className}`} {...props}>
      {children}
    </h6>
  );
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  color?: "default" | "muted" | "primary" | "success" | "warning" | "error";
  align?: "left" | "center" | "right";
  leading?: "tight" | "snug" | "normal" | "relaxed" | "loose";
}

export function Text({
  children,
  className = "",
  size = "base",
  weight = "normal",
  color = "default",
  align = "left",
  leading = "normal",
  ...props
}: TextProps) {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const colorClasses = {
    default: "text-gray-800 dark:text-gray-100",
    muted: "text-gray-600 dark:text-gray-400",
    primary: "text-violet-600 dark:text-violet-400",
    success: "text-emerald-600 dark:text-emerald-400",
    warning: "text-amber-600 dark:text-amber-400",
    error: "text-rose-600 dark:text-rose-400",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const leadingClasses = {
    tight: "leading-tight",
    snug: "leading-snug",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  };

  return (
    <p
      className={`${sizeClasses[size]} ${weightClasses[weight]} ${colorClasses[color]} ${alignClasses[align]} ${leadingClasses[leading]} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "subtle" | "underline";
  size?: "xs" | "sm" | "base" | "lg";
}

export function Link({ children, className = "", variant = "default", size = "base", ...props }: LinkProps) {
  const baseClasses = "font-medium transition-colors duration-200 cursor-pointer hover:underline";

  const variantClasses = {
    default: "text-violet-500 hover:text-violet-600 dark:hover:text-violet-400",
    primary: "text-white bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-lg",
    subtle: "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200",
    underline: "text-violet-600 hover:text-violet-800 border-b border-violet-300 hover:border-violet-500",
  };

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };

  return (
    <a className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </a>
  );
}

// Label for form elements
export function Label({
  children,
  className = "",
  required = false,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  required?: boolean;
} & React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${className}`} {...props}>
      {children}
      {required && <span className="text-rose-500 ml-1">*</span>}
    </label>
  );
}

// Caption for subtle helper text
export function Caption({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={`text-xs text-gray-500 dark:text-gray-400 ${className}`} {...props}>
      {children}
    </span>
  );
}

// Code block styling
export function Code({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <code className={`font-mono text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded ${className}`} {...props}>
      {children}
    </code>
  );
}

// For displaying prices/numbers with special formatting
export function NumberDisplay({
  value,
  currency = "$",
  className = "",
  size = "base",
}: {
  value: number | string;
  currency?: string;
  className?: string;
  size?: "sm" | "base" | "lg";
}) {
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };

  return (
    <span className={`font-mono ${sizeClasses[size]} ${className}`}>
      {currency}
      {value}
    </span>
  );
}

// For displaying key-value pairs
export function TextPair({
  label,
  value,
  className = "",
  labelProps = {},
  valueProps = {},
}: {
  label: string;
  value: string | React.ReactNode;
  className?: string;
  labelProps?: React.HTMLAttributes<HTMLSpanElement>;
  valueProps?: React.HTMLAttributes<HTMLSpanElement>;
}) {
  return (
    <div className={`flex items-baseline gap-2 ${className}`}>
      <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[120px]" {...labelProps}>
        {label}
      </span>
      <span className="text-gray-800 dark:text-gray-100 font-medium" {...valueProps}>
        {value}
      </span>
    </div>
  );
}
