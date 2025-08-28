import { ReactNode } from "react";
interface PluginMainLayoutProps {
    title: string;
    buttonLabel?: string;
    buttonClick?: () => void;
    loading: boolean;
    children: ReactNode;
    secondaryButtoon?: ReactNode;
    onBackClick?: () => void;
}
export declare function PluginMainLayout({ title, buttonClick, buttonLabel, loading, children, secondaryButtoon, onBackClick }: PluginMainLayoutProps): import("react/jsx-runtime").JSX.Element;
export {};
