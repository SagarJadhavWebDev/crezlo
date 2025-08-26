import { toast } from "sonner";
import { envConstants } from "../constants";
import { ApiClient } from "./apiClient";
import { getAuthToken, logoutAuthUser, redirectOnUnauthorized } from "./auth.utils";
import getSubDomain from "./getSubDomain";
import { toggleUpgardeModal } from "./common.utils";
import { ResponseCodeEnum } from "./enums";

type BaseUrlType = keyof typeof envConstants.BASE_API_URL;

const baseUrls: Record<BaseUrlType, string> = envConstants.BASE_API_URL;

// REQUEST INTERCEPTOR Already applied in AuthProvider

// RESPONSE INTERCEPTOR
ApiClient.addGlobalErrorInterceptor(async (error) => {
  if (!envConstants.IS_PRODUCTION) {
    console.log("❌ API ERROR:", error);
  }
  if (error.code === ResponseCodeEnum.PLAN_IN_ACTIVE) {
    toggleUpgardeModal();
  }
  if (error?.message) {
    toast.error(error.message);
  }
  return error;
});

ApiClient.addGlobalResponseInterceptor(async (response) => {
  if (!envConstants.IS_PRODUCTION) {
    console.log("✅ Response received:", response);
  }

  if (response?.message) {
    toast.success(response.message);
  }
  return response;
});

ApiClient.addGlobalRequestInterceptor(async (config) => {
  const token = getAuthToken();
  if (token?.access_token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token?.access_token}`,
    };
  }
  return config;
});

// Response interceptor to handle token refresh
ApiClient.addGlobalErrorInterceptor(async (error) => {
  if (error.status_code === 401) {
    try {
      logoutAuthUser(() => {
        // Redirect to login page or handle unauthorized access
        redirectOnUnauthorized();
      });
    } catch (refreshError) {
      console.error("Token refresh failed:", refreshError);
    }
  }
  return error;
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
