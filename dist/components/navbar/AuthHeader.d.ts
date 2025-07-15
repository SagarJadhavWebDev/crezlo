import { ReactNode } from "react";
interface AuthHeaderProps {
    variant?: "default" | "v2" | "v3";
    items?: ReactNode[] | ReactNode;
    onSubscriptionClick?: () => void;
}
export declare function AuthHeader({ variant, items, onSubscriptionClick }: AuthHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
