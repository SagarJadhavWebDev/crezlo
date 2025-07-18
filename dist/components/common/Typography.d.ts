interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "gradient" | "underline";
    align?: "left" | "center" | "right";
}
export declare function H1({ children, className, variant, align, ...props }: HeadingProps): import("react/jsx-runtime").JSX.Element;
export declare function H2({ children, className, variant, align, ...props }: HeadingProps): import("react/jsx-runtime").JSX.Element;
export declare function H3({ children, className, variant, align, ...props }: HeadingProps): import("react/jsx-runtime").JSX.Element;
export declare function H4({ children, className, variant, align, ...props }: HeadingProps): import("react/jsx-runtime").JSX.Element;
export declare function H5({ children, className, variant, align, ...props }: HeadingProps): import("react/jsx-runtime").JSX.Element;
export declare function H6({ children, className, variant, align, ...props }: HeadingProps): import("react/jsx-runtime").JSX.Element;
export declare function P({ children, className, variant, align, ...props }: HeadingProps): import("react/jsx-runtime").JSX.Element;
interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    className?: string;
    size?: "xs" | "sm" | "base" | "lg" | "xl";
    weight?: "light" | "normal" | "medium" | "semibold" | "bold";
    color?: "default" | "muted" | "primary" | "success" | "warning" | "error";
    align?: "left" | "center" | "right";
    leading?: "tight" | "snug" | "normal" | "relaxed" | "loose";
}
export declare function Text({ children, className, size, weight, color, align, leading, ...props }: TextProps): import("react/jsx-runtime").JSX.Element;
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "primary" | "subtle" | "underline";
    size?: "xs" | "sm" | "base" | "lg";
}
export declare function Link({ children, className, variant, size, ...props }: LinkProps): import("react/jsx-runtime").JSX.Element;
export declare function Label({ children, className, required, ...props }: {
    children: React.ReactNode;
    className?: string;
    required?: boolean;
} & React.LabelHTMLAttributes<HTMLLabelElement>): import("react/jsx-runtime").JSX.Element;
export declare function Caption({ children, className, ...props }: {
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
export declare function Code({ children, className, ...props }: {
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLElement>): import("react/jsx-runtime").JSX.Element;
export declare function NumberDisplay({ value, currency, className, size, }: {
    value: number | string;
    currency?: string;
    className?: string;
    size?: "sm" | "base" | "lg";
}): import("react/jsx-runtime").JSX.Element;
export declare function TextPair({ label, value, className, labelProps, valueProps, }: {
    label: string;
    value: string | React.ReactNode;
    className?: string;
    labelProps?: React.HTMLAttributes<HTMLSpanElement>;
    valueProps?: React.HTMLAttributes<HTMLSpanElement>;
}): import("react/jsx-runtime").JSX.Element;
export {};
