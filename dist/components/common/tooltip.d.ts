interface TooltipProps {
    children: React.ReactNode;
    className?: string;
    bg?: 'dark' | 'light' | null;
    size?: 'sm' | 'md' | 'lg' | 'none';
    position?: 'top' | 'bottom' | 'left' | 'right';
}
export declare function Tooltip({ children, className, bg, size, position, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
export {};
