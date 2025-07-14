import { jsx } from 'react/jsx-runtime';
import { createContext, useReducer, useCallback, useEffect, useContext, useState } from 'react';

class CookieManager {
    config;
    constructor(config = {}) {
        this.config = {
            defaultPath: "/",
            defaultSecure: typeof window !== "undefined" ? window.location.protocol === "https:" : false,
            defaultSameSite: "lax",
            ...config,
        };
    }
    // Set a cookie
    set(name, value, options = {}) {
        if (typeof document === "undefined") {
            console.warn("CookieManager: document is not available (SSR environment)");
            return false;
        }
        try {
            const cookieName = this.config.prefix ? `${this.config.prefix}${name}` : name;
            let cookieString = `${encodeURIComponent(cookieName)}=${encodeURIComponent(value)}`;
            // Handle expires
            if (options.expires) {
                if (typeof options.expires === "number") {
                    // Convert days to date
                    const date = new Date();
                    date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
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
                cookieString += "; secure";
            }
            // Handle httpOnly (note: this can't be set via JavaScript)
            if (options.httpOnly) {
                console.warn("CookieManager: httpOnly flag cannot be set via JavaScript");
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
            console.error("CookieManager: Error setting cookie", error);
            return false;
        }
    }
    // Get a cookie value
    get(name) {
        if (typeof document === "undefined") {
            return null;
        }
        try {
            const cookieName = this.config.prefix ? `${this.config.prefix}${name}` : name;
            const encodedName = encodeURIComponent(cookieName);
            const cookies = document.cookie.split(";");
            for (let cookie of cookies) {
                cookie = cookie.trim();
                if (cookie.startsWith(`${encodedName}=`)) {
                    return decodeURIComponent(cookie.substring(encodedName.length + 1));
                }
            }
            return null;
        }
        catch (error) {
            console.error("CookieManager: Error getting cookie", error);
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
            console.error("CookieManager: Error parsing JSON cookie", error);
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
            console.error("CookieManager: Error stringifying JSON cookie", error);
            return false;
        }
    }
    // Remove a cookie
    remove(name, options = {}) {
        return this.set(name, "", {
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
        if (typeof document === "undefined") {
            return {};
        }
        try {
            const cookies = {};
            const cookieStrings = document.cookie.split(";");
            for (let cookie of cookieStrings) {
                cookie = cookie.trim();
                const [encodedName, ...valueParts] = cookie.split("=");
                if (encodedName && valueParts.length > 0) {
                    const name = decodeURIComponent(encodedName);
                    const value = decodeURIComponent(valueParts.join("="));
                    // Remove prefix if it exists
                    const finalName = this.config.prefix && name.startsWith(this.config.prefix) ? name.substring(this.config.prefix.length) : name;
                    cookies[finalName] = value;
                }
            }
            return cookies;
        }
        catch (error) {
            console.error("CookieManager: Error getting all cookies", error);
            return {};
        }
    }
    // Clear all cookies (only those with the same prefix if configured)
    clear(options = {}) {
        const allCookies = this.getAll();
        Object.keys(allCookies).forEach((name) => {
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
        if (typeof document === "undefined")
            return 0;
        return new Blob([document.cookie]).size;
    }
    // Check if cookies are enabled
    isEnabled() {
        if (typeof document === "undefined")
            return false;
        try {
            const testCookie = "__cookie_test__";
            this.set(testCookie, "test");
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
const cookieManager = new CookieManager({
    defaultPath: "/",
    defaultDomain: ".crezlo.local",
});
const getCookieJSON = (name) => {
    return cookieManager.getJSON(name);
};
const setCookieJSON = (name, value, options) => {
    return cookieManager.setJSON(name, value, options);
};
const removeCookie = (name, options) => {
    return cookieManager.remove(name, options);
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
            // const apiResponse: ApiResponse<T> = {
            //   data,
            //   status: response.status,
            //   statusText: response.statusText,
            //   headers: Object.fromEntries(response.headers.entries()),
            // };
            const apiResponse = data;
            // Check if response is successful
            if (!response.ok) {
                // const error: ApiError = {
                //   message: `Request failed with status ${response.status}`,
                //   status: response.status,
                //   statusText: response.statusText,
                //   data,
                // };
                const error = data;
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

const apiEndpoints = {
    auth: {
        profile: "user/profile/"},
};

// Default configuration
const defaultConfig = {
    tokenStorage: {
        cookieOptions: {
            secure: true,
            sameSite: "lax",
            path: "/",
        },
    },
    redirectOnUnauthorized: "/login",
    onAuthStateChange: () => { },
};
// Initial state
const initialState = {
    user: null,
    token: {
        access_token: null,
        expires_at: null,
        token_type: null,
    },
    isAuthenticated: false,
    isLoading: true,
    error: null,
};
// Auth reducer
const authReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, isLoading: action.payload };
        case "SET_ERROR":
            return { ...state, error: action.payload, isLoading: false };
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: !!action.payload,
                error: null,
            };
        case "SET_TOKENS":
            return { ...state, token: action.payload };
        case "SET_AUTHENTICATED":
            return { ...state, isAuthenticated: action.payload };
        case "UPDATE_USER":
            return {
                ...state,
                user: state.user ? { ...state.user, ...action.payload } : null,
            };
        case "CLEAR_AUTH":
            return {
                ...initialState,
                isLoading: false,
            };
        default:
            return state;
    }
};
// Create context
const AuthContext = createContext(undefined);
const AuthProvider = ({ children, config }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const mergedConfig = { ...defaultConfig, ...(config ?? {}) };
    // Token management
    const updateToken = useCallback((token) => {
        setCookieJSON("token", token);
        dispatch({ type: "SET_TOKENS", payload: token });
    }, []);
    const logoutUser = useCallback((callback) => {
        logoutAuthUser(() => {
            dispatch({ type: "CLEAR_AUTH" });
            callback?.();
        });
    }, []);
    const getToken = useCallback(() => {
        return getAuthToken();
    }, []);
    // API request interceptor to add auth token
    useEffect(() => {
        ApiInstance.client.addGlobalRequestInterceptor(async (config) => {
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
        ApiInstance.client.addGlobalErrorInterceptor(async (error) => {
            if (error.status === 401) {
                try {
                    logoutUser(() => {
                        // Redirect to login page or handle unauthorized access
                    });
                }
                catch (refreshError) {
                    console.error("Token refresh failed:", refreshError);
                    dispatch({ type: "SET_ERROR", payload: "Session expired. Please log in again." });
                }
            }
            return error;
        });
        refreshUser();
    }, []);
    // Authentication methods
    const refreshUser = useCallback(async () => {
        // setCookieJSON("token", {
        //   token_type: "Bearer",
        //   access_token:
        //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjg1MTE0MWY2ODc2ZGY0ZTk3N2YzZDQ3OWQ3Y2JkNjlhOWFlMWRlNjI2NmI0NWM4ZDM3NzkwMzBlNmQ5NzU1ZTZmMjhhODRiNGFmOTIzYzgiLCJpYXQiOjE3NTI0ODcxNzMuOTcyMDU3LCJuYmYiOjE3NTI0ODcxNzMuOTcyMDYsImV4cCI6MTc1NTA3OTE3My45NDA5MTUsInN1YiI6IjAxOTdmOTdlLWY4ZjAtNzE0Mi04MzhlLTQ2OGExZTczNWQ2ZCIsInNjb3BlcyI6W10sInBheWxvYWQiOnsiYWNjb3VudElkIjoiMDE5N2Y5ODAtNTdiMC03MzQ1LTk1NjYtNGY4YzBmMWQ1MTQ4Iiwic2hvcnRDb2RlIjoiRG9JOW1rZFVuVUUrQW91K29aekdxMlJ0ZERST0wwbFplU3N6ZDFSeVZsUTJURk16YzNGek4xUldVVkphU1ZOT2VtUnZTamRwTDFVd1JGVTkifX0.ooczmBYP8AAqxAbkhjTtte5_6JkEptvtVtHdZ6ww36Dm4rULeqL-RZa7_dCL6HLBQKn2NMm0AKlKQlWzCNEl6u3IG81ZJIe1P3hBcZUpnRb7RyOcEMuVKDl56ZJ6ipthAJ9BQ9L5a4MC3RFnb1oH8GrIMHxBemDYS3Fj47aFZNOlToT4xddeBtdwE6nLTgYphFg3ueR1noIJ56431PEYo09yl8bparUA4ptll_moi4HDRQf0CTYwFZXsJubcXa5tT-e9L8G_WW26JuyaN-RbXi9OJtVbA33vvED-4ddM5-JQr_mo_Ph5Mzywm-u1PFpTgKXvG8h_3z_Ko7gaetJ4WKqBCaLhna7Z_DabUr7WQGKprpWd7Bm_tQoVxu2CdBfJoLR7jCbq7pMYV0M7ZtvpFApxYXsciDhJ57aD0VPfVy194uatrUsMc7oo7tHtcTYehxh8QjD4-xsanG8-5t4oMcCFuk_KY2-ONKiQJ-5REf5E7ktORs4qUDW8_7NBDasWzerGIL_WYZpnLPFIRrotX5jwa_vHg077N0D6hGZm0IJ7TneihRF87BLdTqW4oSxbtyT14iOsK8GQLo9FkQTPbxFWoxpVPKtsPGAPXm0WSHlCgxBCBqJrdc1K2V2IzFmQf5dgfddqX5cRHV3FfbJioXqagBK53Lc2ElW3CCobT-c",
        //   expires_at: "2025-08-13T09:59:33.000000Z",
        // });
        // return;
        dispatch({ type: "SET_LOADING", payload: true });
        dispatch({ type: "SET_ERROR", payload: null });
        ApiInstance.CORE.get(apiEndpoints.auth.profile + "0197f97e-f8f0-7142-838e-468a1e735d6d")
            .then((res) => {
            const user = res?.user;
            dispatch({ type: "SET_USER", payload: user });
        })
            .catch((err) => {
            dispatch({ type: "SET_ERROR", payload: err.message || "Login failed" });
        })
            .finally(() => {
            dispatch({ type: "SET_LOADING", payload: false });
        });
    }, []);
    // Utility methods
    useCallback(() => {
        dispatch({ type: "SET_ERROR", payload: null });
    }, []);
    // Notify auth state changes
    useEffect(() => {
        mergedConfig.onAuthStateChange(state);
    }, [state, mergedConfig.onAuthStateChange]);
    const contextValue = {
        ...state,
        getToken,
        updateToken,
        logout: logoutUser,
        refreshUser,
    };
    return jsx(AuthContext.Provider, { value: contextValue, children: children });
};
// Hook to use auth context
const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

const AppContext = createContext({
    sidebarOpen: true,
    setSidebarOpen: (value) => { },
    sidebarExpanded: true,
    setSidebarExpanded: (value) => { },
});
function AppProvider({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [sidebarExpanded, setSidebarExpanded] = useState(true);
    return (jsx(AppContext.Provider, { value: {
            sidebarOpen,
            setSidebarOpen,
            sidebarExpanded,
            setSidebarExpanded,
        }, children: children }));
}
const useAppProvider = () => useContext(AppContext);

export { AppProvider, AuthContext, AuthProvider, useAppProvider, useAuth };
//# sourceMappingURL=index.esm.js.map
