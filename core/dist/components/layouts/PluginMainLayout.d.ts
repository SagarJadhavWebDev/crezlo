import { ReactNode } from "react";
interface PluginMainLayoutProps {
    title: string;
    buttonLabel?: string;
    buttonClick?: () => void;
    loading: boolean;
    children: ReactNode;
    secondaryButtoon?: ReactNode;
}
export declare function PluginMainLayout({ title, buttonClick, buttonLabel, loading, children, secondaryButtoon }: PluginMainLayoutProps): import("react/jsx-runtime").JSX.Element;
export {};
