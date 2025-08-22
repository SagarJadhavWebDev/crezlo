import { SWRConfiguration } from "swr";
import useSWRInfinite, { SWRInfiniteConfiguration } from "swr/infinite";
import { TableState } from "../components";
import { IApiResponse, IPaginatedData } from "../types";
export declare function usePaginatedData<T, K extends string = "data">(url: string | null, params: TableState, fetcher?: (key: string) => Promise<IApiResponse<IPaginatedData<K, T>>>, config?: SWRConfiguration<IApiResponse<IPaginatedData<K, T>>>, dataKey?: K): {
    data: T[];
    isLoading: boolean;
    isError: boolean;
    mutate: import("swr").KeyedMutator<IApiResponse<IPaginatedData<K, T>>>;
    error: any;
    pagination: {
        current_page: number;
        per_page: number;
        total_items: number;
        total_pages: number;
    };
};
export declare function addPrefix(obj: Record<string, any>, prefix?: string): Record<string, any>;
export declare function usePaginatedDataInfinite<T, K extends string = "data">(url: string | null, params: Partial<TableState>, config?: SWRInfiniteConfiguration, dataKey?: K): ReturnType<typeof baseReturn<T, K>>;
export declare function usePaginatedDataInfinite<T, P extends string, L extends string = "data">(url: string | null, params: Partial<TableState>, prefix: P, config?: SWRInfiniteConfiguration, dataKey?: L): {
    [K in keyof ReturnType<typeof baseReturn<T, L>> as `${P}${Capitalize<string & K>}`]: ReturnType<typeof baseReturn<T, L>>[K];
};
declare function baseReturn<T, K extends string = "data">(response: ReturnType<typeof useSWRInfinite<IApiResponse<IPaginatedData<K, T>>>>, dataKey?: K): {
    data: any[];
    isLoading: boolean;
    isError: boolean;
    mutate: import("swr/infinite").SWRInfiniteKeyedMutator<IApiResponse<IPaginatedData<K, T>>[]>;
    error: any;
    pagination: {
        current_page: number;
        per_page: number;
        total_items: number;
        total_pages: number;
    };
    setCurrentPage: (size: number | ((_size: number) => number)) => Promise<IApiResponse<IPaginatedData<K, T>>[]>;
    size: number;
};
export {};
