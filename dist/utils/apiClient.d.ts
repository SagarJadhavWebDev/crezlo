export interface ApiClientConfig {
    baseURL: string;
    timeout?: number;
    headers?: Record<string, string>;
    withCredentials?: boolean;
}
export interface ApiResponse<T = any> {
    data?: T;
    status_code: number;
    success?: boolean;
    code: string;
    message?: string;
    headers: Record<string, string>;
}
export interface ApiError {
    data?: any;
    status_code: number;
    success?: boolean;
    code: string;
    message?: string;
}
export type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export interface RequestConfig {
    method?: RequestMethod;
    headers?: Record<string, string>;
    body?: any;
    params?: Record<string, string | number | boolean>;
    timeout?: number;
    withCredentials?: boolean;
}
export declare class ApiClient {
    private static instances;
    private config;
    private localInterceptors;
    private constructor();
    static getInstance(config: ApiClientConfig): ApiClient | undefined;
    static addGlobalRequestInterceptor(interceptor: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>): void;
    static addGlobalResponseInterceptor(interceptor: (response: ApiResponse) => ApiResponse | Promise<ApiResponse>): void;
    static addGlobalErrorInterceptor(interceptor: (error: ApiError) => ApiError | Promise<ApiError>): void;
    addRequestInterceptor(interceptor: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>): void;
    addResponseInterceptor(interceptor: (response: ApiResponse) => ApiResponse | Promise<ApiResponse>): void;
    addErrorInterceptor(interceptor: (error: ApiError) => ApiError | Promise<ApiError>): void;
    private applyInterceptors;
    private buildURL;
    request<T = any>(endpoint: string, config?: RequestConfig): Promise<ApiResponse<T>>;
    get<T = any>(endpoint: string, config?: Omit<RequestConfig, "method">): Promise<ApiResponse<T>>;
    post<T = any>(endpoint: string, data?: any, config?: Omit<RequestConfig, "method" | "body">): Promise<ApiResponse<T>>;
    put<T = any>(endpoint: string, data?: any, config?: Omit<RequestConfig, "method" | "body">): Promise<ApiResponse<T>>;
    patch<T = any>(endpoint: string, data?: any, config?: Omit<RequestConfig, "method" | "body">): Promise<ApiResponse<T>>;
    delete<T = any>(endpoint: string, config?: Omit<RequestConfig, "method">): Promise<ApiResponse<T>>;
}
export declare const createApiClient: (config: ApiClientConfig) => ApiClient;
export declare const apiCall: <T = any>(url: string, config?: RequestConfig & {
    baseURL?: string;
}) => Promise<ApiResponse<T>>;
