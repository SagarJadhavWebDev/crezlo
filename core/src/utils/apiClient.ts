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

export type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestConfig {
  method?: RequestMethod;
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, string | number | boolean>;
  timeout?: number;
  withCredentials?: boolean;
}

type InterceptorType = {
  request: Array<(config: RequestConfig) => RequestConfig | Promise<RequestConfig>>;
  response: Array<(response: ApiResponse) => ApiResponse | Promise<ApiResponse>>;
  error: Array<(error: ApiError) => ApiError | Promise<ApiError>>;
};

const GlobalInterceptors: InterceptorType = {
  request: [],
  response: [],
  error: [],
};

export class ApiClient {
  private static instances: Map<string, ApiClient> = new Map();

  private config: ApiClientConfig;
  private localInterceptors: InterceptorType;

  private constructor(config: ApiClientConfig) {
    this.config = config;
    this.localInterceptors = {
      request: [],
      response: [],
      error: [],
    };
  }

  // Singleton per unique key (e.g., baseURL or custom ID)
  static getInstance(config: ApiClientConfig): ApiClient | undefined {
    const key = config.baseURL;
    console.log("ApiClient getInstance", key);
    if (!key) return undefined;
    
    if (!ApiClient.instances.has(key)) {
      ApiClient.instances.set(key, new ApiClient(config));
    }
    return ApiClient.instances.get(key)!;
  }

  static addGlobalRequestInterceptor(interceptor: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>) {
    GlobalInterceptors.request.push(interceptor);
  }

  static addGlobalResponseInterceptor(interceptor: (response: ApiResponse) => ApiResponse | Promise<ApiResponse>) {
    GlobalInterceptors.response.push(interceptor);
  }

  static addGlobalErrorInterceptor(interceptor: (error: ApiError) => ApiError | Promise<ApiError>) {
    GlobalInterceptors.error.push(interceptor);
  }

  // Local (instance-level) interceptors
  addRequestInterceptor(interceptor: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>) {
    this.localInterceptors.request.push(interceptor);
  }

  addResponseInterceptor(interceptor: (response: ApiResponse) => ApiResponse | Promise<ApiResponse>) {
    this.localInterceptors.response.push(interceptor);
  }

  addErrorInterceptor(interceptor: (error: ApiError) => ApiError | Promise<ApiError>) {
    this.localInterceptors.error.push(interceptor);
  }

  private async applyInterceptors<T>(type: keyof InterceptorType, input: T): Promise<T> {
    const all = [...GlobalInterceptors[type], ...this.localInterceptors[type]];
    let result = input;

    for (const fn of all) {
      result = (await fn(result as any)) as unknown as T;
    }

    return result;
  }

  // Build URL with query parameters
  private buildURL(endpoint: string, params?: Record<string, string | number | boolean>): string {
    const url = new URL(endpoint, this.config.baseURL);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    return url.toString();
  }

  // Main request method
  async request<T = any>(endpoint: string, config: RequestConfig = {}): Promise<ApiResponse<T>> {
    try {
      // Apply request interceptors
      const modifiedConfig = await this.applyInterceptors("request", config);

      // Build URL
      const url = this.buildURL(endpoint, modifiedConfig.params);

      // Prepare headers
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...this.config.headers,
        ...modifiedConfig.headers,
      };

      // Prepare fetch options
      const fetchOptions: RequestInit = {
        method: modifiedConfig.method || "GET",
        headers,
        credentials: modifiedConfig.withCredentials ?? this.config.withCredentials ? "include" : "same-origin",
      };

      // Add body for non-GET requests
      if (modifiedConfig.body && modifiedConfig.method !== "GET") {
        fetchOptions.body = typeof modifiedConfig.body === "string" ? modifiedConfig.body : JSON.stringify(modifiedConfig.body);
      }

      // Set up timeout
      const timeout = modifiedConfig.timeout || this.config.timeout || 10000;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      fetchOptions.signal = controller.signal;

      // Make the request
      const response = await fetch(url, fetchOptions);
      clearTimeout(timeoutId);

      // Parse response
      let data: T;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = (await response.text()) as unknown as T;
      }

      // Create response object
      // const apiResponse: ApiResponse<T> = {
      //   data,
      //   status: response.status,
      //   statusText: response.statusText,
      //   headers: Object.fromEntries(response.headers.entries()),
      // };
      const apiResponse: ApiResponse<T> = data as ApiResponse<T>;

      // Check if response is successful
      if (!response.ok || response.status < 200 || response.status >= 300) {
        // const error: ApiError = {
        //   message: `Request failed with status ${response.status}`,
        //   status: response.status,
        //   statusText: response.statusText,
        //   data,
        // };
        const error: ApiError = data as ApiError;

        throw await this.applyInterceptors("error", error);
      }

      // Apply response interceptors
      return await this.applyInterceptors("response", apiResponse);
    } catch (error) {
      if (error instanceof Error) {
        const apiError: ApiError = {
          message: error.message,
        };

        throw await this.applyInterceptors("error", apiError);
      }

      throw error;
    }
  }

  // Convenience methods
  async get<T = any>(endpoint: string, config?: Omit<RequestConfig, "method">): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: "GET" });
  }

  async post<T = any>(endpoint: string, data?: any, config?: Omit<RequestConfig, "method" | "body">): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: "POST", body: data });
  }

  async put<T = any>(endpoint: string, data?: any, config?: Omit<RequestConfig, "method" | "body">): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: "PUT", body: data });
  }

  async patch<T = any>(endpoint: string, data?: any, config?: Omit<RequestConfig, "method" | "body">): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: "PATCH", body: data });
  }

  async delete<T = any>(endpoint: string, config?: Omit<RequestConfig, "method">): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: "DELETE" });
  }
}

// Create a default API client instance
export const createApiClient = (config: ApiClientConfig): ApiClient => {
  return ApiClient.getInstance(config);
};

// Utility function for quick API calls without creating a client
export const apiCall = async <T = any>(url: string, config: RequestConfig & { baseURL?: string } = {}): Promise<ApiResponse<T>> => {
  const { baseURL = "", ...requestConfig } = config;
  const client = ApiClient.getInstance({ baseURL });
  return client.request<T>(url, requestConfig);
};
