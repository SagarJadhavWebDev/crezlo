"use client";

import React, { createContext, useReducer, useContext, useCallback, useMemo, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

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

export interface TableState {
  current_page: number;
  per_page: number;
  sort_by?: string;
  sort_dir?: SortDirection;
  filters?: Record<string, FilterValue>;
  customParams?: Record<string, string>;
  
}

type TableAction = { type: "SET_STATE"; payload: Partial<TableState> } | { type: "RESET_FILTERS" };

function tableReducer(state: TableState, action: TableAction): TableState {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.payload };
    case "RESET_FILTERS":
      return { ...state, filters: {} };
    default:
      return state;
  }
}

function parseUrlParams(searchParams: URLSearchParams, customKeys: string[] = []): TableState {
  const defaultState: TableState = {
    current_page: 1,
    per_page: 10,
    sort_by: undefined,
    sort_dir: undefined,
    filters: {},
    customParams: {},
  };

  let filters: Record<string, FilterValue> = {};
  try {
    filters = JSON.parse(searchParams.get("filters") || "{}");
  } catch {
    console.error("Invalid filters JSON");
  }

  const customParams: Record<string, string> = {};
  for (const key of customKeys) {
    const val = searchParams.get(key);
    if (val !== null) customParams[key] = val;
  }

  return {
    current_page: parseInt(searchParams.get("page") ?? "") || defaultState.current_page,
    per_page: parseInt(searchParams.get("per_page") ?? "") || defaultState.per_page,
    sort_by: searchParams.get("sort_by") || undefined,
    sort_dir: (searchParams.get("sort_dir") as SortDirection) || undefined,
    filters,
    customParams,
  };
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

const TableContext = createContext<TableContextType | undefined>(undefined);

export function useTable() {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTable must be used within a TableProvider");
  }
  return context;
}

export function TableProvider({ children, customKeys = [] }: { children: React.ReactNode; customKeys?: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialState = useMemo(() => parseUrlParams(searchParams, customKeys), [searchParams, customKeys]);

  const [state, dispatch] = useReducer(tableReducer, initialState);
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(new Set());

  const updateState = useCallback(
    (patch: Partial<TableState>) => {
      const next = { ...state, ...patch };
  
      // Start with existing query params
      const params = new URLSearchParams(window.location.search);
  
      params.set("page", next.current_page.toString());
      params.set("per_page", next.per_page.toString());
  
      if (next.sort_by) {
        params.set("sort_by", next.sort_by);
        if (next.sort_dir) {
          params.set("sort_dir", next.sort_dir);
        }
      } else {
        params.delete("sort_by");
        params.delete("sort_dir");
      }
  
      if (Object.keys(next.filters || {}).length > 0) {
        params.set("filters", JSON.stringify(next.filters));
      } else {
        params.delete("filters");
      }
  
      if (next.customParams) {
        for (const [key, value] of Object.entries(next.customParams)) {
          params.set(key, value);
        }
      }
  
      router.replace(`${pathname}?${params.toString()}`);
      dispatch({ type: "SET_STATE", payload: patch });
    },
    [router, pathname, state]
  );
  

  const resetFilters = useCallback(() => {
    dispatch({ type: "RESET_FILTERS" });
    const params = new URLSearchParams(searchParams.toString());
    params.delete("filters");
    router.replace(`${pathname}?${params.toString()}`);
  }, [router, pathname, searchParams]);

  const toggleSelect = (id: string | number) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectAll = (ids: (string | number)[]) => {
    setSelectedIds(new Set(ids));
  };

  const deselectAll = () => {
    setSelectedIds(new Set());
  };

  const isSelected = (id: string | number) => selectedIds.has(id);

  const value = useMemo(
    () => ({
      state,
      updateState,
      resetFilters,
      selectedIds,
      toggleSelect,
      selectAll,
      deselectAll,
      isSelected,
    }),
    [state, selectedIds]
  );

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
}
