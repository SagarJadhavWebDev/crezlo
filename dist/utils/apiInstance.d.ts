import { envConstants } from "../constants";
import { ApiClient } from "./apiClient";
type BaseUrlType = keyof typeof envConstants.BASE_API_URL;
declare const createApiMethods: (client: ApiClient) => {
    client: ApiClient;
    get: <T = any>(endpoint: string, config?: Omit<import("./apiClient").RequestConfig, "method">) => Promise<import("./apiClient").ApiResponse<T>>;
    post: <T = any>(endpoint: string, data?: any, config?: Omit<import("./apiClient").RequestConfig, "method" | "body">) => Promise<import("./apiClient").ApiResponse<T>>;
    put: <T = any>(endpoint: string, data?: any, config?: Omit<import("./apiClient").RequestConfig, "method" | "body">) => Promise<import("./apiClient").ApiResponse<T>>;
    patch: <T = any>(endpoint: string, data?: any, config?: Omit<import("./apiClient").RequestConfig, "method" | "body">) => Promise<import("./apiClient").ApiResponse<T>>;
    del: <T = any>(endpoint: string, config?: Omit<import("./apiClient").RequestConfig, "method">) => Promise<import("./apiClient").ApiResponse<T>>;
};
declare const extendedClient: {
    addGlobalRequestInterceptor: typeof ApiClient.addGlobalRequestInterceptor;
    addGlobalResponseInterceptor: typeof ApiClient.addGlobalResponseInterceptor;
    addGlobalErrorInterceptor: typeof ApiClient.addGlobalErrorInterceptor;
    getInstance: typeof ApiClient.getInstance;
};
type ApiServiceMap = Record<BaseUrlType, ReturnType<typeof createApiMethods>>;
declare const ApiInstance: ApiServiceMap & {
    client: typeof extendedClient;
};
export { ApiInstance };
