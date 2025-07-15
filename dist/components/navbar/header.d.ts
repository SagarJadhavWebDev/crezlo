import { ReactNode } from "react";
interface HeaderProps {
    variant?: "default" | "v2" | "v3";
    items?: ReactNode[] | ReactNode;
    onSubscriptionClick?: () => void;
}
export declare function Header({ variant, items, onSubscriptionClick }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
