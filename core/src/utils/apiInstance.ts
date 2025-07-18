import { toast } from "sonner";
import { envConstants } from "../constants";
import { ApiClient } from "./apiClient";

type BaseUrlType = keyof typeof envConstants.BASE_API_URL;

const baseUrls: Record<BaseUrlType, string> = envConstants.BASE_API_URL;

// REQUEST INTERCEPTOR Already applied in AuthProvider

// RESPONSE INTERCEPTOR
ApiClient.addGlobalErrorInterceptor(async (error) => {
  console.log("❌ API ERROR:", error);
  if (error?.message) {
    toast.success(error.message);
  }
  return error;
});

ApiClient.addGlobalResponseInterceptor(async (response) => {
  console.log("✅ Response received:", response);
  if (response?.message) {
    toast.success(response.message);
  }
  return response;
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
