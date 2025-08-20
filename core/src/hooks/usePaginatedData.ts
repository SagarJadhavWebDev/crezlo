import { paramsToQueryParams } from "../utils";
import { useCallback, useMemo } from "react";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { TableState } from "../components";
import { IApiResponse, IPaginatedData } from "../types";

export function usePaginatedData<T>(url: string | null, params: TableState) {
  const endpoint = url
    ? `${url}?${paramsToQueryParams({
        ...(params ?? {}),
        ...(params?.filters ?? {}),
        ...(params?.customParams ?? {}),
        // @ts-ignore
        page: params?.current_page,
      }).toString()}`
    : null;
  const { data: response, error, isLoading, mutate } = useSWR<IApiResponse<IPaginatedData<"data", T>>>(endpoint);
  const data = response?.data?.data;
  return {
    data: data ?? ([] as T[]),
    isLoading,
    isError: !!error,
    mutate,
    error,
    pagination: {
      // @ts-ignore
      current_page: data?.current_page ?? 0,
      // @ts-ignore
      per_page: data?.per_page ?? 0,
      // @ts-ignore
      total_items: data?.total ?? 0,
      // @ts-ignore
      total_pages: data?.last_page ?? 0,
    },
  };
}

export function addPrefix(obj: Record<string, any>, prefix?: string) {
  if (!prefix) {
    return obj;
  }

  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [`${prefix}${key.charAt(0).toUpperCase()}${key.slice(1)}`, value]));
}

// Hook overloads
export function usePaginatedDataInfinite<T>(
  url: string | null,
  params: Partial<TableState>
): {
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

export function usePaginatedDataInfinite<T, P extends string>(
  url: string | null,
  params: Partial<TableState>,
  prefix: P
): { [K in keyof ReturnType<typeof baseReturn> as `${P}${Capitalize<string & K>}`]: ReturnType<typeof baseReturn>[K] };

// Base return value builder (keeps type consistent)
// @ts-ignore
function baseReturn<T>(response: ReturnType<typeof useSWRInfinite<IApiResponse<IPaginatedData<"data", T>>>>) {
  const { data: responseData, error, isLoading, mutate, size, setSize } = response;

  const { data, pagination } = useMemo(() => {
    console.log("baseReturn", responseData, error, isLoading);
    if (responseData) {
      const flatData = [...responseData?.flatMap((res) => res?.data)];
      const lastFlatData = flatData[flatData.length - 1];
      return {
        data: flatData?.flatMap((d) => d?.data) ?? [],
        pagination: {
          current_page: lastFlatData?.meta.current_page ?? 0,
          per_page: lastFlatData?.meta.per_page ?? 0,
          total_items: lastFlatData?.meta.total ?? 0,
          total_pages: lastFlatData?.meta.last_page ?? 0,
        },
      };
    }
    return { data: [], pagination: null };
  }, [responseData]);

  return {
    data: data ?? ([] as T[]),
    isLoading,
    isError: !!error,
    mutate,
    error,
    pagination,
    setCurrentPage: setSize,
    size,
  };
}

// Implementation
export function usePaginatedDataInfinite<T>(url: string | null, params: Partial<TableState>, prefix?: string) {
  const getKey = useCallback(
    (pageIndex, previousPageData) => {
      if (!url) return null;
      if (previousPageData && !previousPageData?.data?.data?.length) return null;
      // @ts-ignore
      return `${url}?${paramsToQueryParams({
        ...(params ?? {}),
        ...(params?.filters ?? {}),
        ...(params?.customParams ?? {}),
        page: pageIndex + 1,
      }).toString()}`;
    },
    [url, params]
  );

  const swr = useSWRInfinite<IApiResponse<IPaginatedData<"data", T>>>(getKey, {
    keepPreviousData: true,
  });

  const returnValue = baseReturn<T>(swr);

  return prefix ? addPrefix(returnValue, prefix) : returnValue;
}
