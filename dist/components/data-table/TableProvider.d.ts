import React from "react";
type SortDirection = "asc" | "desc";
type FilterCondition = "equals" | "contains" | "gte" | "lte";
interface FilterValue {
    value: any;
    condition: FilterCondition;
}
export interface ITableQueryParams {
    page?: number;
    per_page?: number;
    sort_by?: string;
    sort_dir?: SortDirection;
    [key: string]: any;
}
interface TableState {
    current_page: number;
    per_page: number;
    sort_by?: string;
    sort_dir?: SortDirection;
    filters: Record<string, FilterValue>;
    customParams?: Record<string, string>;
}
interface TableContextType {
    state: TableState;
    updateState: (patch: Partial<TableState>) => void;
    resetFilters: () => void;
    selectedIds: Set<string | number>;
    toggleSelect: (id: string | number) => void;
    selectAll: (ids: (string | number)[]) => void;
    deselectAll: () => void;
    isSelected: (id: string | number) => boolean;
}
export declare function useTable(): TableContextType;
export declare function TableProvider({ children, customKeys }: {
    children: React.ReactNode;
    customKeys?: string[];
}): import("react/jsx-runtime").JSX.Element;
export {};
