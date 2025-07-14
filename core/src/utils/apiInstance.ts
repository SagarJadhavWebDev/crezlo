import { envConstants } from "../constants";
import { AuthToken } from "../types";
import { ApiClient } from "./apiClient";
import { getCookieJSON } from "./cookieManager";

type BaseUrlType = keyof typeof envConstants.BASE_API_URL;

const baseUrls: Record<BaseUrlType, string> = envConstants.BASE_API_URL;

const apiClient = ApiClient.getInstance({
  baseURL: baseUrls.CORE,
});

// REQUEST INTERCEPTOR
ApiClient.addGlobalRequestInterceptor(async (config) => {
  const token = getCookieJSON<AuthToken | null>("token");
  if (token?.access_token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token.access_token}`,
    };
  }
  return config;
});

// RESPONSE INTERCEPTOR
ApiClient.addGlobalErrorInterceptor(async (error) => {
  //   if (error.status === 401 && mergedConfig.autoRefresh) {
  //     try {
  //       await refreshToken();
  //       // Retry the original request would need to be implemented here
  //     } catch (refreshError) {
  //       await logout();
  //     }
  //   }
  console.log("Response received:", error);
  return error;
});

ApiClient.addGlobalResponseInterceptor(async (response) => {
  // Handle specific response status codes or data transformations here
  console.log("Response received:", response.data);
  if (response.status === 401) {
    // Handle unauthorized access, e.g., redirect to login
    console.error("Unauthorized access - redirecting to login");
    // You can implement a redirect or logout logic here
  }
  return response.data;
});

const createApiMethods = (client: ApiClient) => ({
  client,
  get: client.get,
  post: client.post,
  put: client.put,
  patch: client.patch,
  del: client.delete,
});

const createClient = (baseURL: string): ApiClient => {
  return ApiClient.getInstance({ baseURL });
};

const extendedClient = {
  addGlobalRequestInterceptor: ApiClient.addGlobalRequestInterceptor,
  addGlobalResponseInterceptor: ApiClient.addGlobalResponseInterceptor,
  addGlobalErrorInterceptor: ApiClient.addGlobalErrorInterceptor,
  getInstance: ApiClient.getInstance,
};

type ApiServiceMap = Record<BaseUrlType, ReturnType<typeof createApiMethods>>;

// @ts-ignore
const ApiInstance: ApiServiceMap & {
  client: typeof extendedClient;
} = {
  client: extendedClient,
  ...Object.fromEntries(Object.entries(baseUrls).map(([name, url]) => [name, createClient(url)])),
};

export { ApiInstance };
