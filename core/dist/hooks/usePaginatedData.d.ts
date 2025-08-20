import useSWRInfinite from "swr/infinite";
import { TableState } from "../components";
import { IApiResponse, IPaginatedData } from "../types";
export declare function usePaginatedData<T>(url: string | null, params: TableState): {
    data: T[];
    isLoading: boolean;
    isError: boolean;
    mutate: import("swr").KeyedMutator<IApiResponse<IPaginatedData<"data", T>>>;
    error: any;
    pagination: {
        current_page: any;
        per_page: any;
        total_items: any;
        total_pages: any;
    };
};
export declare function addPrefix(obj: Record<string, any>, prefix?: string): Record<string, any>;
export declare function usePaginatedDataInfinite<T>(url: string | null, params: Partial<TableState>): {
    data: T[];
    isLoading: boolean;
    isError: boolean;
    mutate: any;
    error: unknown;
    pagination: {
        current_page: number;
        per_page: number;
        total_items: number;
        total_pages: number;
    } | null;
    setCurrentPage: (size: number) => void;
    size: number;
};
export declare function usePaginatedDataInfinite<T, P extends string>(url: string | null, params: Partial<TableState>, prefix: P): {
    [K in keyof ReturnType<typeof baseReturn> as `${P}${Capitalize<string & K>}`]: ReturnType<typeof baseReturn>[K];
};
declare function baseReturn<T>(response: ReturnType<typeof useSWRInfinite<IApiResponse<IPaginatedData<"data", T>>>>): {
    data: T[];
    isLoading: boolean;
    isError: boolean;
    mutate: import("swr/infinite").SWRInfiniteKeyedMutator<IApiResponse<IPaginatedData<"data", T>>[]>;
    error: any;
    pagination: {
        current_page: number;
        per_page: number;
        total_items: number;
        total_pages: number;
    };
    setCurrentPage: (size: number | ((_size: number) => number)) => Promise<IApiResponse<IPaginatedData<"data", T>>[]>;
    size: number;
};
export {};
