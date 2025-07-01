export interface ApiClientConfig {
    baseURL: string;
    timeout?: number;
    headers?: Record<string, string>;
    withCredentials?: boolean;
}
export interface ApiResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
}
export interface ApiError {
    message: string;
    status?: number;
    statusText?: string;
    data?: any;
}
export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export interface RequestConfig {
    method?: RequestMethod;
    headers?: Record<string, string>;
    body?: any;
    params?: Record<string, string | number | boolean>;
    timeout?: number;
    withCredentials?: boolean;
}
export declare class ApiClient {
    private config;
    private interceptors;
    constructor(config: ApiClientConfig);
    addRequestInterceptor(interceptor: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>): void;
    addResponseInterceptor(interceptor: (response: ApiResponse) => ApiResponse | Promise<ApiResponse>): void;
    addErrorInterceptor(interceptor: (error: ApiError) => ApiError | Promise<ApiError>): void;
    private buildURL;
    private applyRequestInterceptors;
    private applyResponseInterceptors;
    private applyErrorInterceptors;
    request<T = any>(endpoint: string, config?: RequestConfig): Promise<ApiResponse<T>>;
    get<T = any>(endpoint: string, config?: Omit<RequestConfig, 'method'>): Promise<ApiResponse<T>>;
    post<T = any>(endpoint: string, data?: any, config?: Omit<RequestConfig, 'method' | 'body'>): Promise<ApiResponse<T>>;
    put<T = any>(endpoint: string, data?: any, config?: Omit<RequestConfig, 'method' | 'body'>): Promise<ApiResponse<T>>;
    patch<T = any>(endpoint: string, data?: any, config?: Omit<RequestConfig, 'method' | 'body'>): Promise<ApiResponse<T>>;
    delete<T = any>(endpoint: string, config?: Omit<RequestConfig, 'method'>): Promise<ApiResponse<T>>;
}
export declare const createApiClient: (config: ApiClientConfig) => ApiClient;
export declare const apiCall: <T = any>(url: string, config?: RequestConfig & {
    baseURL?: string;
}) => Promise<ApiResponse<T>>;
