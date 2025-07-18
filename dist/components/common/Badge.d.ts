import { ReactNode } from "react";
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    size?: "sm" | "md" | "lg";
    color?: "violet" | "sky" | "green" | "yellow" | "red" | "blue" | "gray" | "dark";
    className?: string;
    icon?: ReactNode;
}
export declare const Badge: ({ children, size, color, className, icon, ...props }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
