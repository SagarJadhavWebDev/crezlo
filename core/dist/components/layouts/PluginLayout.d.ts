import { ReactNode } from "react";
import { IPagination } from "../../types";
interface PluginLayoutProps<T> {
    title: string;
    buttonLabel: string;
    buttonClick: () => void;
    loading: boolean;
    data: T[];
    pagination?: IPagination;
    children: (item: T) => ReactNode;
    handlePageChange?: (page: number) => void;
    layoutClasses?: string;
}
export declare function PluginLayout<T>({ title, buttonClick, buttonLabel, loading, data, pagination, children, handlePageChange, layoutClasses, }: PluginLayoutProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
