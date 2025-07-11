import { useState, useEffect } from 'react';

const GlobalInterceptors = {
    request: [],
    response: [],
    error: [],
};
class ApiClient {
    static instances = new Map();
    config;
    localInterceptors;
    constructor(config) {
        this.config = config;
        this.localInterceptors = {
            request: [],
            response: [],
            error: [],
        };
    }
    // Singleton per unique key (e.g., baseURL or custom ID)
    static getInstance(config) {
        const key = config.baseURL;
        if (!key)
            throw new Error("ApiClient config must have an 'id' or 'baseURL' to use as key");
        if (!ApiClient.instances.has(key)) {
            ApiClient.instances.set(key, new ApiClient(config));
        }
        return ApiClient.instances.get(key);
    }
    static addGlobalRequestInterceptor(interceptor) {
        GlobalInterceptors.request.push(interceptor);
    }
    static addGlobalResponseInterceptor(interceptor) {
        GlobalInterceptors.response.push(interceptor);
    }
    static addGlobalErrorInterceptor(interceptor) {
        GlobalInterceptors.error.push(interceptor);
    }
    // Local (instance-level) interceptors
    addRequestInterceptor(interceptor) {
        this.localInterceptors.request.push(interceptor);
    }
    addResponseInterceptor(interceptor) {
        this.localInterceptors.response.push(interceptor);
    }
    addErrorInterceptor(interceptor) {
        this.localInterceptors.error.push(interceptor);
    }
    async applyInterceptors(type, input) {
        const all = [...GlobalInterceptors[type], ...this.localInterceptors[type]];
        let result = input;
        for (const fn of all) {
            result = (await fn(result));
        }
        return result;
    }
    // Build URL with query parameters
    buildURL(endpoint, params) {
        const url = new URL(endpoint, this.config.baseURL);
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.append(key, String(value));
            });
        }
        return url.toString();
    }
    // Main request method
    async request(endpoint, config = {}) {
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
            const fetchOptions = {
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
            let data;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                data = await response.json();
            }
            else {
                data = (await response.text());
            }
            // Create response object
            const apiResponse = {
                data,
                status: response.status,
                statusText: response.statusText,
                headers: Object.fromEntries(response.headers.entries()),
            };
            // Check if response is successful
            if (!response.ok) {
                const error = {
                    message: `Request failed with status ${response.status}`,
                    status: response.status,
                    statusText: response.statusText,
                    data,
                };
                throw await this.applyInterceptors("error", error);
            }
            // Apply response interceptors
            return await this.applyInterceptors("response", apiResponse);
        }
        catch (error) {
            if (error instanceof Error) {
                const apiError = {
                    message: error.message,
                };
                throw await this.applyInterceptors("error", apiError);
            }
            throw error;
        }
    }
    // Convenience methods
    async get(endpoint, config) {
        return this.request(endpoint, { ...config, method: "GET" });
    }
    async post(endpoint, data, config) {
        return this.request(endpoint, { ...config, method: "POST", body: data });
    }
    async put(endpoint, data, config) {
        return this.request(endpoint, { ...config, method: "PUT", body: data });
    }
    async patch(endpoint, data, config) {
        return this.request(endpoint, { ...config, method: "PATCH", body: data });
    }
    async delete(endpoint, config) {
        return this.request(endpoint, { ...config, method: "DELETE" });
    }
}
// Create a default API client instance
const createApiClient = (config) => {
    return ApiClient.getInstance(config);
};
// Utility function for quick API calls without creating a client
const apiCall = async (url, config = {}) => {
    const { baseURL = "", ...requestConfig } = config;
    const client = ApiClient.getInstance({ baseURL });
    return client.request(url, requestConfig);
};

class CookieManager {
    config;
    constructor(config = {}) {
        this.config = {
            defaultPath: '/',
            defaultSecure: typeof window !== 'undefined' ? window.location.protocol === 'https:' : false,
            defaultSameSite: 'lax',
            ...config,
        };
    }
    // Set a cookie
    set(name, value, options = {}) {
        if (typeof document === 'undefined') {
            console.warn('CookieManager: document is not available (SSR environment)');
            return false;
        }
        try {
            const cookieName = this.config.prefix ? `${this.config.prefix}${name}` : name;
            let cookieString = `${encodeURIComponent(cookieName)}=${encodeURIComponent(value)}`;
            // Handle expires
            if (options.expires) {
                if (typeof options.expires === 'number') {
                    // Convert days to date
                    const date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                    cookieString += `; expires=${date.toUTCString()}`;
                }
                else {
                    cookieString += `; expires=${options.expires.toUTCString()}`;
                }
            }
            // Handle maxAge
            if (options.maxAge !== undefined) {
                cookieString += `; max-age=${options.maxAge}`;
            }
            // Handle path
            const path = options.path ?? this.config.defaultPath;
            if (path) {
                cookieString += `; path=${path}`;
            }
            // Handle domain
            const domain = options.domain ?? this.config.defaultDomain;
            if (domain) {
                cookieString += `; domain=${domain}`;
            }
            // Handle secure
            const secure = options.secure ?? this.config.defaultSecure;
            if (secure) {
                cookieString += '; secure';
            }
            // Handle httpOnly (note: this can't be set via JavaScript)
            if (options.httpOnly) {
                console.warn('CookieManager: httpOnly flag cannot be set via JavaScript');
            }
            // Handle sameSite
            const sameSite = options.sameSite ?? this.config.defaultSameSite;
            if (sameSite) {
                cookieString += `; samesite=${sameSite}`;
            }
            document.cookie = cookieString;
            return true;
        }
        catch (error) {
            console.error('CookieManager: Error setting cookie', error);
            return false;
        }
    }
    // Get a cookie value
    get(name) {
        if (typeof document === 'undefined') {
            return null;
        }
        try {
            const cookieName = this.config.prefix ? `${this.config.prefix}${name}` : name;
            const encodedName = encodeURIComponent(cookieName);
            const cookies = document.cookie.split(';');
            for (let cookie of cookies) {
                cookie = cookie.trim();
                if (cookie.startsWith(`${encodedName}=`)) {
                    return decodeURIComponent(cookie.substring(encodedName.length + 1));
                }
            }
            return null;
        }
        catch (error) {
            console.error('CookieManager: Error getting cookie', error);
            return null;
        }
    }
    // Get a cookie value and parse as JSON
    getJSON(name) {
        const value = this.get(name);
        if (value === null)
            return null;
        try {
            return JSON.parse(value);
        }
        catch (error) {
            console.error('CookieManager: Error parsing JSON cookie', error);
            return null;
        }
    }
    // Set a cookie with JSON value
    setJSON(name, value, options = {}) {
        try {
            const jsonString = JSON.stringify(value);
            return this.set(name, jsonString, options);
        }
        catch (error) {
            console.error('CookieManager: Error stringifying JSON cookie', error);
            return false;
        }
    }
    // Remove a cookie
    remove(name, options = {}) {
        return this.set(name, '', {
            ...options,
            expires: new Date(0), // Set to past date
            maxAge: 0,
        });
    }
    // Check if a cookie exists
    has(name) {
        return this.get(name) !== null;
    }
    // Get all cookies as an object
    getAll() {
        if (typeof document === 'undefined') {
            return {};
        }
        try {
            const cookies = {};
            const cookieStrings = document.cookie.split(';');
            for (let cookie of cookieStrings) {
                cookie = cookie.trim();
                const [encodedName, ...valueParts] = cookie.split('=');
                if (encodedName && valueParts.length > 0) {
                    const name = decodeURIComponent(encodedName);
                    const value = decodeURIComponent(valueParts.join('='));
                    // Remove prefix if it exists
                    const finalName = this.config.prefix && name.startsWith(this.config.prefix)
                        ? name.substring(this.config.prefix.length)
                        : name;
                    cookies[finalName] = value;
                }
            }
            return cookies;
        }
        catch (error) {
            console.error('CookieManager: Error getting all cookies', error);
            return {};
        }
    }
    // Clear all cookies (only those with the same prefix if configured)
    clear(options = {}) {
        const allCookies = this.getAll();
        Object.keys(allCookies).forEach(name => {
            this.remove(name, options);
        });
    }
    // Get cookie size in bytes
    getSize(name) {
        const value = this.get(name);
        if (value === null)
            return 0;
        return new Blob([value]).size;
    }
    // Get total cookies size
    getTotalSize() {
        if (typeof document === 'undefined')
            return 0;
        return new Blob([document.cookie]).size;
    }
    // Check if cookies are enabled
    isEnabled() {
        if (typeof document === 'undefined')
            return false;
        try {
            const testCookie = '__cookie_test__';
            this.set(testCookie, 'test');
            const isEnabled = this.has(testCookie);
            this.remove(testCookie);
            return isEnabled;
        }
        catch {
            return false;
        }
    }
}
// Default cookie manager instance
const cookieManager = new CookieManager();
// Utility functions for quick access
const setCookie = (name, value, options) => {
    return cookieManager.set(name, value, options);
};
const getCookie = (name) => {
    return cookieManager.get(name);
};
const getCookieJSON = (name) => {
    return cookieManager.getJSON(name);
};
const setCookieJSON = (name, value, options) => {
    return cookieManager.setJSON(name, value, options);
};
const removeCookie = (name, options) => {
    return cookieManager.remove(name, options);
};
const hasCookie = (name) => {
    return cookieManager.has(name);
};
const getAllCookies = () => {
    return cookieManager.getAll();
};
const clearAllCookies = (options) => {
    return cookieManager.clear(options);
};
const isCookiesEnabled = () => {
    return cookieManager.isEnabled();
};
// Create a custom cookie manager with specific configuration
const createCookieManager = (config) => {
    return new CookieManager(config);
};

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : undefined);
    useEffect(() => {
        if (typeof window === 'undefined')
            return;
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Set initial width
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures effect is only run on mount and unmount
    return windowWidth;
};

const envConstants = {
    BASE_API_URL: {
        CORE: process.env.NEXT_PUBLIC_API_URL_CORE,
        CONTENT: process.env.NEXT_PUBLIC_API_URL_CONTENT,
        CHAT: process.env.NEXT_PUBLIC_API_URL_CHAT,
        GENAGENT: process.env.NEXT_PUBLIC_API_GENAGENT_URL,
        WEBSITE_BUILDER: process.env.NEXT_PUBLIC_WEBSITE_BUILDER_URL,
        CHANNEL_BUILDER: process.env.NEXT_PUBLIC_CHANNEL_BUILDERL_URL,
        FINANCE: process.env.NEXT_PUBLIC_FINANCE_URL,
    },
};

const baseUrls = envConstants.BASE_API_URL;
ApiClient.getInstance({
    baseURL: baseUrls.CORE,
});
// REQUEST INTERCEPTOR
ApiClient.addGlobalRequestInterceptor(async (config) => {
    const token = getCookieJSON("token");
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
    return error;
});
ApiClient.addGlobalResponseInterceptor(async (response) => {
    // Handle specific response status codes or data transformations here
    if (response.status === 401) {
        // Handle unauthorized access, e.g., redirect to login
        console.error("Unauthorized access - redirecting to login");
        // You can implement a redirect or logout logic here
    }
    return response;
});
const createClient = (baseURL) => {
    return ApiClient.getInstance({ baseURL });
};
const extendedClient = {
    addGlobalRequestInterceptor: ApiClient.addGlobalRequestInterceptor,
    addGlobalResponseInterceptor: ApiClient.addGlobalResponseInterceptor,
    addGlobalErrorInterceptor: ApiClient.addGlobalErrorInterceptor,
    getInstance: ApiClient.getInstance,
};
// @ts-ignore
const ApiInstance = {
    client: extendedClient,
    ...Object.fromEntries(Object.entries(baseUrls).map(([name, url]) => [name, createClient(url)])),
};

const getAuthToken = () => {
    const token = getCookieJSON("token");
    if (token?.access_token) {
        return token;
    }
    return null;
};
const logoutAuthUser = (callback) => {
    removeCookie("token");
    callback?.();
};

export { ApiClient, ApiInstance, CookieManager, apiCall, clearAllCookies, cookieManager, createApiClient, createCookieManager, getAllCookies, getAuthToken, getCookie, getCookieJSON, hasCookie, isCookiesEnabled, logoutAuthUser, removeCookie, setCookie, setCookieJSON, useWindowWidth };
//# sourceMappingURL=index.esm.js.map
