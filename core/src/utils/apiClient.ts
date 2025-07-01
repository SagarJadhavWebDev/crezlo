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

export class ApiClient {
  private config: ApiClientConfig;
  private interceptors: {
    request: Array<(config: RequestConfig) => RequestConfig | Promise<RequestConfig>>;
    response: Array<(response: ApiResponse) => ApiResponse | Promise<ApiResponse>>;
    error: Array<(error: ApiError) => ApiError | Promise<ApiError>>;
  };

  constructor(config: ApiClientConfig) {
    this.config = config;
    this.interceptors = {
      request: [],
      response: [],
      error: [],
    };
  }

  // Add request interceptor
  addRequestInterceptor(interceptor: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>) {
    this.interceptors.request.push(interceptor);
  }

  // Add response interceptor
  addResponseInterceptor(interceptor: (response: ApiResponse) => ApiResponse | Promise<ApiResponse>) {
    this.interceptors.response.push(interceptor);
  }

  // Add error interceptor
  addErrorInterceptor(interceptor: (error: ApiError) => ApiError | Promise<ApiError>) {
    this.interceptors.error.push(interceptor);
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

  // Apply request interceptors
  private async applyRequestInterceptors(config: RequestConfig): Promise<RequestConfig> {
    let modifiedConfig = { ...config };
    
    for (const interceptor of this.interceptors.request) {
      modifiedConfig = await interceptor(modifiedConfig);
    }
    
    return modifiedConfig;
  }

  // Apply response interceptors
  private async applyResponseInterceptors(response: ApiResponse): Promise<ApiResponse> {
    let modifiedResponse = { ...response };
    
    for (const interceptor of this.interceptors.response) {
      modifiedResponse = await interceptor(modifiedResponse);
    }
    
    return modifiedResponse;
  }

  // Apply error interceptors
  private async applyErrorInterceptors(error: ApiError): Promise<ApiError> {
    let modifiedError = { ...error };
    
    for (const interceptor of this.interceptors.error) {
      modifiedError = await interceptor(modifiedError);
    }
    
    return modifiedError;
  }

  // Main request method
  async request<T = any>(endpoint: string, config: RequestConfig = {}): Promise<ApiResponse<T>> {
    try {
      // Apply request interceptors
      const modifiedConfig = await this.applyRequestInterceptors(config);
      
      // Build URL
      const url = this.buildURL(endpoint, modifiedConfig.params);
      
      // Prepare headers
      const headers = {
        'Content-Type': 'application/json',
        ...this.config.headers,
        ...modifiedConfig.headers,
      };

      // Prepare fetch options
      const fetchOptions: RequestInit = {
        method: modifiedConfig.method || 'GET',
        headers,
        credentials: (modifiedConfig.withCredentials ?? this.config.withCredentials) ? 'include' : 'same-origin',
      };

      // Add body for non-GET requests
      if (modifiedConfig.body && modifiedConfig.method !== 'GET') {
        fetchOptions.body = typeof modifiedConfig.body === 'string' 
          ? modifiedConfig.body 
          : JSON.stringify(modifiedConfig.body);
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
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text() as unknown as T;
      }

      // Create response object
      const apiResponse: ApiResponse<T> = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
      };

      // Check if response is successful
      if (!response.ok) {
        const error: ApiError = {
          message: `Request failed with status ${response.status}`,
          status: response.status,
          statusText: response.statusText,
          data,
        };
        
        const modifiedError = await this.applyErrorInterceptors(error);
        throw modifiedError;
      }

      // Apply response interceptors
      return await this.applyResponseInterceptors(apiResponse);
      
    } catch (error) {
      if (error instanceof Error) {
        const apiError: ApiError = {
          message: error.message,
        };
        
        const modifiedError = await this.applyErrorInterceptors(apiError);
        throw modifiedError;
      }
      
      throw error;
    }
  }

  // Convenience methods
  async get<T = any>(endpoint: string, config?: Omit<RequestConfig, 'method'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }

  async post<T = any>(endpoint: string, data?: any, config?: Omit<RequestConfig, 'method' | 'body'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'POST', body: data });
  }

  async put<T = any>(endpoint: string, data?: any, config?: Omit<RequestConfig, 'method' | 'body'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PUT', body: data });
  }

  async patch<T = any>(endpoint: string, data?: any, config?: Omit<RequestConfig, 'method' | 'body'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PATCH', body: data });
  }

  async delete<T = any>(endpoint: string, config?: Omit<RequestConfig, 'method'>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }
}

// Create a default API client instance
export const createApiClient = (config: ApiClientConfig): ApiClient => {
  return new ApiClient(config);
};

// Utility function for quick API calls without creating a client
export const apiCall = async <T = any>(
  url: string, 
  config: RequestConfig & { baseURL?: string } = {}
): Promise<ApiResponse<T>> => {
  const { baseURL = '', ...requestConfig } = config;
  const client = new ApiClient({ baseURL });
  return client.request<T>(url, requestConfig);
};

