import { paramsToQueryParams } from "../utils";
import { useCallback, useMemo } from "react";
import useSWR, { SWRConfiguration } from "swr";
import useSWRInfinite, { SWRInfiniteConfiguration } from "swr/infinite";
import { TableState } from "../components";
import { IApiResponse, IPaginatedData } from "../types";

function buildEndpoint(url: string | null, params?: Record<string, any>): string | null {
  if (!url) return null;
  const hasLeadingSlash = url.startsWith("/");

  // Use dummy base so URL works with relative paths
  const dummyBase = "http://dummy";
  const parsedUrl = new URL(url, dummyBase);

  // Preserve existing query params
  const searchParams = new URLSearchParams(parsedUrl.search);

  // Convert extra params into query params
  const newParams = paramsToQueryParams({
    ...(params ?? {}),
    ...(params?.filters ?? {}),
    ...(params?.customParams ?? {}),
    // @ts-ignore
    page: params?.current_page,
  });

  // Merge (override if key exists)
  for (const [key, value] of newParams.entries()) {
    if (value != null) searchParams.set(key, value);
  }

  // Return only pathname + query (relative URL)
  const query = searchParams.toString();
  const pathname = hasLeadingSlash ? parsedUrl.pathname : parsedUrl.pathname.slice(1);
  return `${pathname}${query ? `?${query}` : ""}`;
}

export function usePaginatedData<T, K extends string = "data">(
  url: string | null,
  params: TableState,
  fetcher?: (key: string) => Promise<IApiResponse<IPaginatedData<K, T>>>,
  config?: SWRConfiguration<IApiResponse<IPaginatedData<K, T>>>,
  dataKey?: K
) {
  const endpoint = buildEndpoint(url, params);

  const { data: response, error, isLoading, mutate } = useSWR<IApiResponse<IPaginatedData<K, T>>>(endpoint, fetcher, config);
  const payload = response?.data;
  // @ts-ignore
  const items = (payload?.[dataKey ?? "data"] as T[]) ?? [];

  return {
    data: items ?? ([] as T[]),
    isLoading,
    isError: !!error,
    mutate,
    error,
    pagination: {
      // @ts-ignore
      current_page: payload?.pagination?.current_page ?? payload?.meta?.current_page ?? 0,
      // @ts-ignore
      per_page: payload?.pagination?.per_page ?? payload?.meta?.per_page ?? 0,
      // @ts-ignore
      total_items: payload?.pagination?.total_items ?? payload?.meta?.total ?? 0,
      // @ts-ignore
      total_pages: payload?.pagination?.total_pages ?? payload?.meta?.last_page ?? 0,
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
// Overloads
export function usePaginatedDataInfinite<T, K extends string = "data">(
  url: string | null,
  params: Partial<TableState>,
  config?: SWRInfiniteConfiguration,
  dataKey?: K
): ReturnType<typeof baseReturn<T, K>>;

export function usePaginatedDataInfinite<T, P extends string, L extends string = "data">(
  url: string | null,
  params: Partial<TableState>,
  prefix: P,
  config?: SWRInfiniteConfiguration,
  dataKey?: L
): { [K in keyof ReturnType<typeof baseReturn<T, L>> as `${P}${Capitalize<string & K>}`]: ReturnType<typeof baseReturn<T, L>>[K] };

// Base return
// @ts-ignore
function baseReturn<T, K extends string = "data">(response: ReturnType<typeof useSWRInfinite<IApiResponse<IPaginatedData<K, T>>>>, dataKey?: K) {
  const { data: responseData, error, isLoading, mutate, size, setSize } = response;

  const { data, pagination } = useMemo(() => {
    if (responseData) {
      const flatData = [...responseData.flatMap((res) => res?.data)];
      const lastFlatData = flatData[flatData.length - 1];
      return {
        // @ts-ignore
        data: flatData.flatMap((d) => d?.[dataKey ?? "data"]) ?? [],
        pagination: {
          current_page: lastFlatData?.pagination?.current_page ?? lastFlatData?.meta?.current_page ?? 0,
          per_page: lastFlatData?.pagination?.per_page ?? lastFlatData?.meta?.per_page ?? 0,
          total_items: lastFlatData?.pagination?.total_items ?? lastFlatData?.meta?.total ?? 0,
          total_pages: lastFlatData?.pagination?.total_pages ?? lastFlatData?.meta?.last_page ?? 0,
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
export function usePaginatedDataInfinite<T, P extends string = never, K extends string = "data">(
  url: string | null,
  params: Partial<TableState>,
  prefixOrConfig?: P | SWRInfiniteConfiguration,
  maybeConfig?: SWRInfiniteConfiguration,
  dataKey?: K
) {
  const prefix = typeof prefixOrConfig === "string" ? prefixOrConfig : undefined;
  const config = (typeof prefixOrConfig === "object" ? prefixOrConfig : maybeConfig) ?? {};

  const getKey = useCallback(
    (pageIndex: number, previousPageData: any) => {
      if (!url) return null;
      if (previousPageData && !previousPageData?.data?.data?.length) return null;

      return buildEndpoint(url, { ...params, current_page: pageIndex + 1 });
    },
    [url, params]
  );

  const swr = useSWRInfinite<IApiResponse<IPaginatedData<K, T>>>(getKey, config);

  const returnValue = baseReturn<T, K>(swr, dataKey);

  return prefix ? addPrefix(returnValue, prefix) : returnValue;
}
