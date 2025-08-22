import { ReactNode } from "react";
import { IPaginatedData } from "../../types";
export interface ColumnDef<T> {
    id: string;
    header: string | ReactNode;
    sortable?: boolean;
    [key: string]: any;
}
export type FilterCondition = "contains" | "equals" | "startsWith" | "endsWith" | "greaterThan" | "lessThan";
interface DataTableProps<K extends string, T> {
    title: string;
    columns: ColumnDef<T>[];
    data: IPaginatedData<K, T>;
    resourceKey: K;
    renderRow: (row: T) => ReactNode;
    isError?: boolean;
    isLoading?: boolean;
    renderTopRightActions?: ReactNode;
    renderSearch?: boolean;
    onCreate?: () => void;
    renderGroupingFilter?: ReactNode;
    onBackClick?: () => void;
    backLabel?: string;
    createButtonLabel?: string;
    hideHeadingBar?: boolean;
}
export declare function DataTable<K extends string, T extends {
    id: string | number;
}>({ title, columns, data, renderRow, resourceKey, isLoading, isError, renderTopRightActions, renderSearch, onCreate, renderGroupingFilter, onBackClick, backLabel, createButtonLabel, hideHeadingBar, }: DataTableProps<K, T>): import("react/jsx-runtime").JSX.Element;
export {};
