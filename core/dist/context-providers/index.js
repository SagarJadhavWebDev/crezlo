'use strict';

var jsxRuntime = require('react/jsx-runtime');
var require$$0 = require('react');
require('clsx');
require('tailwind-merge');

const APP_HTTP = process.env.NODE_ENV === "production" ? "https://" : "http://";
const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN;
const ACCOUNT = process.env.NEXT_PUBLIC_APP_URL_ACCOUNT || "accounts";
process.env.NEXT_PUBLIC_APP_URL_FINANCE || "finance";
process.env.NEXT_PUBLIC_APP_URL_VR || "virtualtour";
process.env.NEXT_PUBLIC_APP_URL_COMMUNITY || "community";
process.env.NEXT_PUBLIC_APP_URL_WEBSITE || "website";
process.env.NEXT_PUBLIC_APP_URL_GENAGENT || "genagent";
const envConstants = {
    APP_DOMAIN: process.env.NODE_ENV === "production" ? APP_DOMAIN : "crezlo.local",
    APP_NAME: {
        ACCOUNT: ACCOUNT},
    APP_URL: {
        ACCOUNT: `${APP_HTTP}${ACCOUNT}.${APP_DOMAIN}`},
    SUBSCRIPTION_TYPE: process.env.NEXT_PUBLIC_SUBSCRIPTION_TYPE,
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

class CookieManager {
    config;
    constructor(config = {}) {
        this.config = {
            defaultPath: "/",
            defaultSecure: typeof window !== "undefined" ? window.location.protocol === "https:" : false,
            defaultDomain: `.${envConstants.APP_DOMAIN}`,
            ...config,
        };
    }
    // Set a cookie
    set(name, value, options = { expires: 1000 }) {
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
            console.log("Setting cookie:", cookieString);
            document.cookie = cookieString;
            return true;
        }
        catch (error) {
            console.error("CookieManager: Error setting cookie:", error);
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
const cookieManager = new CookieManager();
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
            return undefined;
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
            if (!response.ok || response.status < 200 || response.status >= 300) {
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

const baseUrls = envConstants.BASE_API_URL;
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
    console.log("Error received:", error);
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

var cookies$2 = {};

var requestCookies = {};

var cookies$1 = {};

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  RequestCookies: () => RequestCookies,
  ResponseCookies: () => ResponseCookies,
  parseCookie: () => parseCookie,
  parseSetCookie: () => parseSetCookie,
  stringifyCookie: () => stringifyCookie
});
var cookies = __toCommonJS(src_exports);

// src/serialize.ts
function stringifyCookie(c) {
  var _a;
  const attrs = [
    "path" in c && c.path && `Path=${c.path}`,
    "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
    "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
    "domain" in c && c.domain && `Domain=${c.domain}`,
    "secure" in c && c.secure && "Secure",
    "httpOnly" in c && c.httpOnly && "HttpOnly",
    "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
    "partitioned" in c && c.partitioned && "Partitioned",
    "priority" in c && c.priority && `Priority=${c.priority}`
  ].filter(Boolean);
  const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
  return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
  const map = /* @__PURE__ */ new Map();
  for (const pair of cookie.split(/; */)) {
    if (!pair)
      continue;
    const splitAt = pair.indexOf("=");
    if (splitAt === -1) {
      map.set(pair, "true");
      continue;
    }
    const [key, value] = [pair.slice(0, splitAt), pair.slice(splitAt + 1)];
    try {
      map.set(key, decodeURIComponent(value != null ? value : "true"));
    } catch {
    }
  }
  return map;
}
function parseSetCookie(setCookie) {
  if (!setCookie) {
    return void 0;
  }
  const [[name, value], ...attributes] = parseCookie(setCookie);
  const {
    domain,
    expires,
    httponly,
    maxage,
    path,
    samesite,
    secure,
    partitioned,
    priority
  } = Object.fromEntries(
    attributes.map(([key, value2]) => [
      key.toLowerCase().replace(/-/g, ""),
      value2
    ])
  );
  const cookie = {
    name,
    value: decodeURIComponent(value),
    domain,
    ...expires && { expires: new Date(expires) },
    ...httponly && { httpOnly: true },
    ...typeof maxage === "string" && { maxAge: Number(maxage) },
    path,
    ...samesite && { sameSite: parseSameSite(samesite) },
    ...secure && { secure: true },
    ...priority && { priority: parsePriority(priority) },
    ...partitioned && { partitioned: true }
  };
  return compact(cookie);
}
function compact(t) {
  const newT = {};
  for (const key in t) {
    if (t[key]) {
      newT[key] = t[key];
    }
  }
  return newT;
}
var SAME_SITE = ["strict", "lax", "none"];
function parseSameSite(string) {
  string = string.toLowerCase();
  return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = ["low", "medium", "high"];
function parsePriority(string) {
  string = string.toLowerCase();
  return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
  if (!cookiesString)
    return [];
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

// src/request-cookies.ts
var RequestCookies = class {
  constructor(requestHeaders) {
    /** @internal */
    this._parsed = /* @__PURE__ */ new Map();
    this._headers = requestHeaders;
    const header = requestHeaders.get("cookie");
    if (header) {
      const parsed = parseCookie(header);
      for (const [name, value] of parsed) {
        this._parsed.set(name, { name, value });
      }
    }
  }
  [Symbol.iterator]() {
    return this._parsed[Symbol.iterator]();
  }
  /**
   * The amount of cookies received from the client
   */
  get size() {
    return this._parsed.size;
  }
  get(...args) {
    const name = typeof args[0] === "string" ? args[0] : args[0].name;
    return this._parsed.get(name);
  }
  getAll(...args) {
    var _a;
    const all = Array.from(this._parsed);
    if (!args.length) {
      return all.map(([_, value]) => value);
    }
    const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
    return all.filter(([n]) => n === name).map(([_, value]) => value);
  }
  has(name) {
    return this._parsed.has(name);
  }
  set(...args) {
    const [name, value] = args.length === 1 ? [args[0].name, args[0].value] : args;
    const map = this._parsed;
    map.set(name, { name, value });
    this._headers.set(
      "cookie",
      Array.from(map).map(([_, value2]) => stringifyCookie(value2)).join("; ")
    );
    return this;
  }
  /**
   * Delete the cookies matching the passed name or names in the request.
   */
  delete(names) {
    const map = this._parsed;
    const result = !Array.isArray(names) ? map.delete(names) : names.map((name) => map.delete(name));
    this._headers.set(
      "cookie",
      Array.from(map).map(([_, value]) => stringifyCookie(value)).join("; ")
    );
    return result;
  }
  /**
   * Delete all the cookies in the cookies in the request.
   */
  clear() {
    this.delete(Array.from(this._parsed.keys()));
    return this;
  }
  /**
   * Format the cookies in the request as a string for logging
   */
  [Symbol.for("edge-runtime.inspect.custom")]() {
    return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
  }
  toString() {
    return [...this._parsed.values()].map((v) => `${v.name}=${encodeURIComponent(v.value)}`).join("; ");
  }
};

// src/response-cookies.ts
var ResponseCookies = class {
  constructor(responseHeaders) {
    /** @internal */
    this._parsed = /* @__PURE__ */ new Map();
    var _a, _b, _c;
    this._headers = responseHeaders;
    const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
    const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
    for (const cookieString of cookieStrings) {
      const parsed = parseSetCookie(cookieString);
      if (parsed)
        this._parsed.set(parsed.name, parsed);
    }
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */
  get(...args) {
    const key = typeof args[0] === "string" ? args[0] : args[0].name;
    return this._parsed.get(key);
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */
  getAll(...args) {
    var _a;
    const all = Array.from(this._parsed.values());
    if (!args.length) {
      return all;
    }
    const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
    return all.filter((c) => c.name === key);
  }
  has(name) {
    return this._parsed.has(name);
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */
  set(...args) {
    const [name, value, cookie] = args.length === 1 ? [args[0].name, args[0].value, args[0]] : args;
    const map = this._parsed;
    map.set(name, normalizeCookie({ name, value, ...cookie }));
    replace(map, this._headers);
    return this;
  }
  /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */
  delete(...args) {
    const [name, options] = typeof args[0] === "string" ? [args[0]] : [args[0].name, args[0]];
    return this.set({ ...options, name, value: "", expires: /* @__PURE__ */ new Date(0) });
  }
  [Symbol.for("edge-runtime.inspect.custom")]() {
    return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
  }
  toString() {
    return [...this._parsed.values()].map(stringifyCookie).join("; ");
  }
};
function replace(bag, headers) {
  headers.delete("set-cookie");
  for (const [, value] of bag) {
    const serialized = stringifyCookie(value);
    headers.append("set-cookie", serialized);
  }
}
function normalizeCookie(cookie = { name: "", value: "" }) {
  if (typeof cookie.expires === "number") {
    cookie.expires = new Date(cookie.expires);
  }
  if (cookie.maxAge) {
    cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
  }
  if (cookie.path === null || cookie.path === void 0) {
    cookie.path = "/";
  }
  return cookie;
}

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    RequestCookies: function() {
	        return _cookies.RequestCookies;
	    },
	    ResponseCookies: function() {
	        return _cookies.ResponseCookies;
	    },
	    stringifyCookie: function() {
	        return _cookies.stringifyCookie;
	    }
	});
	const _cookies = cookies;

	
} (cookies$1));

var reflect = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "ReflectAdapter", {
	    enumerable: true,
	    get: function() {
	        return ReflectAdapter;
	    }
	});
	class ReflectAdapter {
	    static get(target, prop, receiver) {
	        const value = Reflect.get(target, prop, receiver);
	        if (typeof value === 'function') {
	            return value.bind(target);
	        }
	        return value;
	    }
	    static set(target, prop, value, receiver) {
	        return Reflect.set(target, prop, value, receiver);
	    }
	    static has(target, prop) {
	        return Reflect.has(target, prop);
	    }
	    static deleteProperty(target, prop) {
	        return Reflect.deleteProperty(target, prop);
	    }
	}

	
} (reflect));

var workAsyncStorage_external = {};

var workAsyncStorageInstance = {};

var asyncLocalStorage = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    bindSnapshot: function() {
	        return bindSnapshot;
	    },
	    createAsyncLocalStorage: function() {
	        return createAsyncLocalStorage;
	    },
	    createSnapshot: function() {
	        return createSnapshot;
	    }
	});
	const sharedAsyncLocalStorageNotAvailableError = Object.defineProperty(new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), "__NEXT_ERROR_CODE", {
	    value: "E504",
	    enumerable: false,
	    configurable: true
	});
	class FakeAsyncLocalStorage {
	    disable() {
	        throw sharedAsyncLocalStorageNotAvailableError;
	    }
	    getStore() {
	        // This fake implementation of AsyncLocalStorage always returns `undefined`.
	        return undefined;
	    }
	    run() {
	        throw sharedAsyncLocalStorageNotAvailableError;
	    }
	    exit() {
	        throw sharedAsyncLocalStorageNotAvailableError;
	    }
	    enterWith() {
	        throw sharedAsyncLocalStorageNotAvailableError;
	    }
	    static bind(fn) {
	        return fn;
	    }
	}
	const maybeGlobalAsyncLocalStorage = typeof globalThis !== 'undefined' && globalThis.AsyncLocalStorage;
	function createAsyncLocalStorage() {
	    if (maybeGlobalAsyncLocalStorage) {
	        return new maybeGlobalAsyncLocalStorage();
	    }
	    return new FakeAsyncLocalStorage();
	}
	function bindSnapshot(fn) {
	    if (maybeGlobalAsyncLocalStorage) {
	        return maybeGlobalAsyncLocalStorage.bind(fn);
	    }
	    return FakeAsyncLocalStorage.bind(fn);
	}
	function createSnapshot() {
	    if (maybeGlobalAsyncLocalStorage) {
	        return maybeGlobalAsyncLocalStorage.snapshot();
	    }
	    return function(fn, ...args) {
	        return fn(...args);
	    };
	}

	
} (asyncLocalStorage));

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "workAsyncStorageInstance", {
	    enumerable: true,
	    get: function() {
	        return workAsyncStorageInstance;
	    }
	});
	const _asynclocalstorage = asyncLocalStorage;
	const workAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();

	
} (workAsyncStorageInstance));

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "workAsyncStorage", {
	    enumerable: true,
	    get: function() {
	        return _workasyncstorageinstance.workAsyncStorageInstance;
	    }
	});
	const _workasyncstorageinstance = workAsyncStorageInstance;

	
} (workAsyncStorage_external));

var workUnitAsyncStorage_external = {};

var workUnitAsyncStorageInstance = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "workUnitAsyncStorageInstance", {
	    enumerable: true,
	    get: function() {
	        return workUnitAsyncStorageInstance;
	    }
	});
	const _asynclocalstorage = asyncLocalStorage;
	const workUnitAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();

	
} (workUnitAsyncStorageInstance));

var appRouterHeaders = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    ACTION_HEADER: function() {
	        return ACTION_HEADER;
	    },
	    FLIGHT_HEADERS: function() {
	        return FLIGHT_HEADERS;
	    },
	    NEXT_DID_POSTPONE_HEADER: function() {
	        return NEXT_DID_POSTPONE_HEADER;
	    },
	    NEXT_HMR_REFRESH_HASH_COOKIE: function() {
	        return NEXT_HMR_REFRESH_HASH_COOKIE;
	    },
	    NEXT_HMR_REFRESH_HEADER: function() {
	        return NEXT_HMR_REFRESH_HEADER;
	    },
	    NEXT_IS_PRERENDER_HEADER: function() {
	        return NEXT_IS_PRERENDER_HEADER;
	    },
	    NEXT_REWRITTEN_PATH_HEADER: function() {
	        return NEXT_REWRITTEN_PATH_HEADER;
	    },
	    NEXT_REWRITTEN_QUERY_HEADER: function() {
	        return NEXT_REWRITTEN_QUERY_HEADER;
	    },
	    NEXT_ROUTER_PREFETCH_HEADER: function() {
	        return NEXT_ROUTER_PREFETCH_HEADER;
	    },
	    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
	        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
	    },
	    NEXT_ROUTER_STALE_TIME_HEADER: function() {
	        return NEXT_ROUTER_STALE_TIME_HEADER;
	    },
	    NEXT_ROUTER_STATE_TREE_HEADER: function() {
	        return NEXT_ROUTER_STATE_TREE_HEADER;
	    },
	    NEXT_RSC_UNION_QUERY: function() {
	        return NEXT_RSC_UNION_QUERY;
	    },
	    NEXT_URL: function() {
	        return NEXT_URL;
	    },
	    RSC_CONTENT_TYPE_HEADER: function() {
	        return RSC_CONTENT_TYPE_HEADER;
	    },
	    RSC_HEADER: function() {
	        return RSC_HEADER;
	    }
	});
	const RSC_HEADER = 'RSC';
	const ACTION_HEADER = 'Next-Action';
	const NEXT_ROUTER_STATE_TREE_HEADER = 'Next-Router-State-Tree';
	const NEXT_ROUTER_PREFETCH_HEADER = 'Next-Router-Prefetch';
	const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'Next-Router-Segment-Prefetch';
	const NEXT_HMR_REFRESH_HEADER = 'Next-HMR-Refresh';
	const NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
	const NEXT_URL = 'Next-Url';
	const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
	const FLIGHT_HEADERS = [
	    RSC_HEADER,
	    NEXT_ROUTER_STATE_TREE_HEADER,
	    NEXT_ROUTER_PREFETCH_HEADER,
	    NEXT_HMR_REFRESH_HEADER,
	    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
	];
	const NEXT_RSC_UNION_QUERY = '_rsc';
	const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
	const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
	const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
	const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
	const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (appRouterHeaders, appRouterHeaders.exports));

var appRouterHeadersExports = appRouterHeaders.exports;

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    getDraftModeProviderForCacheScope: function() {
	        return getDraftModeProviderForCacheScope;
	    },
	    getExpectedRequestStore: function() {
	        return getExpectedRequestStore;
	    },
	    getHmrRefreshHash: function() {
	        return getHmrRefreshHash;
	    },
	    getPrerenderResumeDataCache: function() {
	        return getPrerenderResumeDataCache;
	    },
	    getRenderResumeDataCache: function() {
	        return getRenderResumeDataCache;
	    },
	    throwForMissingRequestStore: function() {
	        return throwForMissingRequestStore;
	    },
	    workUnitAsyncStorage: function() {
	        return _workunitasyncstorageinstance.workUnitAsyncStorageInstance;
	    }
	});
	const _workunitasyncstorageinstance = workUnitAsyncStorageInstance;
	const _approuterheaders = appRouterHeadersExports;
	function getExpectedRequestStore(callingExpression) {
	    const workUnitStore = _workunitasyncstorageinstance.workUnitAsyncStorageInstance.getStore();
	    if (!workUnitStore) {
	        throwForMissingRequestStore(callingExpression);
	    }
	    switch(workUnitStore.type){
	        case 'request':
	            return workUnitStore;
	        case 'prerender':
	        case 'prerender-ppr':
	        case 'prerender-legacy':
	            // This should not happen because we should have checked it already.
	            throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside a prerender. This is a bug in Next.js.`), "__NEXT_ERROR_CODE", {
	                value: "E401",
	                enumerable: false,
	                configurable: true
	            });
	        case 'cache':
	            throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
	                value: "E37",
	                enumerable: false,
	                configurable: true
	            });
	        case 'unstable-cache':
	            throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
	                value: "E69",
	                enumerable: false,
	                configurable: true
	            });
	        default:
	            const _exhaustiveCheck = workUnitStore;
	            return _exhaustiveCheck;
	    }
	}
	function throwForMissingRequestStore(callingExpression) {
	    throw Object.defineProperty(new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
	        value: "E251",
	        enumerable: false,
	        configurable: true
	    });
	}
	function getPrerenderResumeDataCache(workUnitStore) {
	    if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-ppr') {
	        return workUnitStore.prerenderResumeDataCache;
	    }
	    return null;
	}
	function getRenderResumeDataCache(workUnitStore) {
	    if (workUnitStore.type !== 'prerender-legacy' && workUnitStore.type !== 'cache' && workUnitStore.type !== 'unstable-cache') {
	        if (workUnitStore.type === 'request') {
	            return workUnitStore.renderResumeDataCache;
	        }
	        // We return the mutable resume data cache here as an immutable version of
	        // the cache as it can also be used for reading.
	        return workUnitStore.prerenderResumeDataCache;
	    }
	    return null;
	}
	function getHmrRefreshHash(workStore, workUnitStore) {
	    var _workUnitStore_cookies_get;
	    if (!workStore.dev) {
	        return undefined;
	    }
	    return workUnitStore.type === 'cache' || workUnitStore.type === 'prerender' ? workUnitStore.hmrRefreshHash : workUnitStore.type === 'request' ? (_workUnitStore_cookies_get = workUnitStore.cookies.get(_approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE)) == null ? void 0 : _workUnitStore_cookies_get.value : undefined;
	}
	function getDraftModeProviderForCacheScope(workStore, workUnitStore) {
	    if (workStore.isDraftMode) {
	        switch(workUnitStore.type){
	            case 'cache':
	            case 'unstable-cache':
	            case 'request':
	                return workUnitStore.draftMode;
	            default:
	                return undefined;
	        }
	    }
	    return undefined;
	}

	
} (workUnitAsyncStorage_external));

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    MutableRequestCookiesAdapter: function() {
	        return MutableRequestCookiesAdapter;
	    },
	    ReadonlyRequestCookiesError: function() {
	        return ReadonlyRequestCookiesError;
	    },
	    RequestCookiesAdapter: function() {
	        return RequestCookiesAdapter;
	    },
	    appendMutableCookies: function() {
	        return appendMutableCookies;
	    },
	    areCookiesMutableInCurrentPhase: function() {
	        return areCookiesMutableInCurrentPhase;
	    },
	    getModifiedCookieValues: function() {
	        return getModifiedCookieValues;
	    },
	    responseCookiesToRequestCookies: function() {
	        return responseCookiesToRequestCookies;
	    },
	    wrapWithMutableAccessCheck: function() {
	        return wrapWithMutableAccessCheck;
	    }
	});
	const _cookies = cookies$1;
	const _reflect = reflect;
	const _workasyncstorageexternal = workAsyncStorage_external;
	const _workunitasyncstorageexternal = workUnitAsyncStorage_external;
	class ReadonlyRequestCookiesError extends Error {
	    constructor(){
	        super('Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options');
	    }
	    static callable() {
	        throw new ReadonlyRequestCookiesError();
	    }
	}
	class RequestCookiesAdapter {
	    static seal(cookies) {
	        return new Proxy(cookies, {
	            get (target, prop, receiver) {
	                switch(prop){
	                    case 'clear':
	                    case 'delete':
	                    case 'set':
	                        return ReadonlyRequestCookiesError.callable;
	                    default:
	                        return _reflect.ReflectAdapter.get(target, prop, receiver);
	                }
	            }
	        });
	    }
	}
	const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for('next.mutated.cookies');
	function getModifiedCookieValues(cookies) {
	    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
	    if (!modified || !Array.isArray(modified) || modified.length === 0) {
	        return [];
	    }
	    return modified;
	}
	function appendMutableCookies(headers, mutableCookies) {
	    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
	    if (modifiedCookieValues.length === 0) {
	        return false;
	    }
	    // Return a new response that extends the response with
	    // the modified cookies as fallbacks. `res` cookies
	    // will still take precedence.
	    const resCookies = new _cookies.ResponseCookies(headers);
	    const returnedCookies = resCookies.getAll();
	    // Set the modified cookies as fallbacks.
	    for (const cookie of modifiedCookieValues){
	        resCookies.set(cookie);
	    }
	    // Set the original cookies as the final values.
	    for (const cookie of returnedCookies){
	        resCookies.set(cookie);
	    }
	    return true;
	}
	class MutableRequestCookiesAdapter {
	    static wrap(cookies, onUpdateCookies) {
	        const responseCookies = new _cookies.ResponseCookies(new Headers());
	        for (const cookie of cookies.getAll()){
	            responseCookies.set(cookie);
	        }
	        let modifiedValues = [];
	        const modifiedCookies = new Set();
	        const updateResponseCookies = ()=>{
	            // TODO-APP: change method of getting workStore
	            const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
	            if (workStore) {
	                workStore.pathWasRevalidated = true;
	            }
	            const allCookies = responseCookies.getAll();
	            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
	            if (onUpdateCookies) {
	                const serializedCookies = [];
	                for (const cookie of modifiedValues){
	                    const tempCookies = new _cookies.ResponseCookies(new Headers());
	                    tempCookies.set(cookie);
	                    serializedCookies.push(tempCookies.toString());
	                }
	                onUpdateCookies(serializedCookies);
	            }
	        };
	        const wrappedCookies = new Proxy(responseCookies, {
	            get (target, prop, receiver) {
	                switch(prop){
	                    // A special symbol to get the modified cookie values
	                    case SYMBOL_MODIFY_COOKIE_VALUES:
	                        return modifiedValues;
	                    // TODO: Throw error if trying to set a cookie after the response
	                    // headers have been set.
	                    case 'delete':
	                        return function(...args) {
	                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
	                            try {
	                                target.delete(...args);
	                                return wrappedCookies;
	                            } finally{
	                                updateResponseCookies();
	                            }
	                        };
	                    case 'set':
	                        return function(...args) {
	                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
	                            try {
	                                target.set(...args);
	                                return wrappedCookies;
	                            } finally{
	                                updateResponseCookies();
	                            }
	                        };
	                    default:
	                        return _reflect.ReflectAdapter.get(target, prop, receiver);
	                }
	            }
	        });
	        return wrappedCookies;
	    }
	}
	function wrapWithMutableAccessCheck(responseCookies) {
	    const wrappedCookies = new Proxy(responseCookies, {
	        get (target, prop, receiver) {
	            switch(prop){
	                case 'delete':
	                    return function(...args) {
	                        ensureCookiesAreStillMutable('cookies().delete');
	                        target.delete(...args);
	                        return wrappedCookies;
	                    };
	                case 'set':
	                    return function(...args) {
	                        ensureCookiesAreStillMutable('cookies().set');
	                        target.set(...args);
	                        return wrappedCookies;
	                    };
	                default:
	                    return _reflect.ReflectAdapter.get(target, prop, receiver);
	            }
	        }
	    });
	    return wrappedCookies;
	}
	function areCookiesMutableInCurrentPhase(requestStore) {
	    return requestStore.phase === 'action';
	}
	/** Ensure that cookies() starts throwing on mutation
	 * if we changed phases and can no longer mutate.
	 *
	 * This can happen when going:
	 *   'render' -> 'after'
	 *   'action' -> 'render'
	 * */ function ensureCookiesAreStillMutable(callingExpression) {
	    const requestStore = (0, _workunitasyncstorageexternal.getExpectedRequestStore)(callingExpression);
	    if (!areCookiesMutableInCurrentPhase(requestStore)) {
	        // TODO: maybe we can give a more precise error message based on callingExpression?
	        throw new ReadonlyRequestCookiesError();
	    }
	}
	function responseCookiesToRequestCookies(responseCookies) {
	    const requestCookies = new _cookies.RequestCookies(new Headers());
	    for (const cookie of responseCookies.getAll()){
	        requestCookies.set(cookie);
	    }
	    return requestCookies;
	}

	
} (requestCookies));

var dynamicRendering = {};

var hooksServerContext = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    DynamicServerError: function() {
	        return DynamicServerError;
	    },
	    isDynamicServerError: function() {
	        return isDynamicServerError;
	    }
	});
	const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
	class DynamicServerError extends Error {
	    constructor(description){
	        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
	    }
	}
	function isDynamicServerError(err) {
	    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
	        return false;
	    }
	    return err.digest === DYNAMIC_ERROR_CODE;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (hooksServerContext, hooksServerContext.exports));

var hooksServerContextExports = hooksServerContext.exports;

var staticGenerationBailout = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    StaticGenBailoutError: function() {
	        return StaticGenBailoutError;
	    },
	    isStaticGenBailoutError: function() {
	        return isStaticGenBailoutError;
	    }
	});
	const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
	class StaticGenBailoutError extends Error {
	    constructor(...args){
	        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
	    }
	}
	function isStaticGenBailoutError(error) {
	    if (typeof error !== 'object' || error === null || !('code' in error)) {
	        return false;
	    }
	    return error.code === NEXT_STATIC_GEN_BAILOUT;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (staticGenerationBailout, staticGenerationBailout.exports));

var staticGenerationBailoutExports = staticGenerationBailout.exports;

var dynamicRenderingUtils = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    isHangingPromiseRejectionError: function() {
	        return isHangingPromiseRejectionError;
	    },
	    makeHangingPromise: function() {
	        return makeHangingPromise;
	    }
	});
	function isHangingPromiseRejectionError(err) {
	    if (typeof err !== 'object' || err === null || !('digest' in err)) {
	        return false;
	    }
	    return err.digest === HANGING_PROMISE_REJECTION;
	}
	const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
	class HangingPromiseRejectionError extends Error {
	    constructor(expression){
	        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`), this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
	    }
	}
	const abortListenersBySignal = new WeakMap();
	function makeHangingPromise(signal, expression) {
	    if (signal.aborted) {
	        return Promise.reject(new HangingPromiseRejectionError(expression));
	    } else {
	        const hangingPromise = new Promise((_, reject)=>{
	            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(expression));
	            let currentListeners = abortListenersBySignal.get(signal);
	            if (currentListeners) {
	                currentListeners.push(boundRejection);
	            } else {
	                const listeners = [
	                    boundRejection
	                ];
	                abortListenersBySignal.set(signal, listeners);
	                signal.addEventListener('abort', ()=>{
	                    for(let i = 0; i < listeners.length; i++){
	                        listeners[i]();
	                    }
	                }, {
	                    once: true
	                });
	            }
	        });
	        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
	        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
	        // your own promise out of it you'll need to ensure you handle the error when it rejects.
	        hangingPromise.catch(ignoreReject);
	        return hangingPromise;
	    }
	}
	function ignoreReject() {}

	
} (dynamicRenderingUtils));

var metadataConstants = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    METADATA_BOUNDARY_NAME: function() {
	        return METADATA_BOUNDARY_NAME;
	    },
	    OUTLET_BOUNDARY_NAME: function() {
	        return OUTLET_BOUNDARY_NAME;
	    },
	    VIEWPORT_BOUNDARY_NAME: function() {
	        return VIEWPORT_BOUNDARY_NAME;
	    }
	});
	const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
	const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
	const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';

	
} (metadataConstants));

var scheduler = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    atLeastOneTask: function() {
	        return atLeastOneTask;
	    },
	    scheduleImmediate: function() {
	        return scheduleImmediate;
	    },
	    scheduleOnNextTick: function() {
	        return scheduleOnNextTick;
	    },
	    waitAtLeastOneReactRenderTask: function() {
	        return waitAtLeastOneReactRenderTask;
	    }
	});
	const scheduleOnNextTick = (cb)=>{
	    // We use Promise.resolve().then() here so that the operation is scheduled at
	    // the end of the promise job queue, we then add it to the next process tick
	    // to ensure it's evaluated afterwards.
	    //
	    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
	    //
	    Promise.resolve().then(()=>{
	        if (process.env.NEXT_RUNTIME === 'edge') {
	            setTimeout(cb, 0);
	        } else {
	            process.nextTick(cb);
	        }
	    });
	};
	const scheduleImmediate = (cb)=>{
	    if (process.env.NEXT_RUNTIME === 'edge') {
	        setTimeout(cb, 0);
	    } else {
	        setImmediate(cb);
	    }
	};
	function atLeastOneTask() {
	    return new Promise((resolve)=>scheduleImmediate(resolve));
	}
	function waitAtLeastOneReactRenderTask() {
	    if (process.env.NEXT_RUNTIME === 'edge') {
	        return new Promise((r)=>setTimeout(r, 0));
	    } else {
	        return new Promise((r)=>setImmediate(r));
	    }
	}

	
} (scheduler));

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    Postpone: function() {
	        return Postpone;
	    },
	    abortAndThrowOnSynchronousRequestDataAccess: function() {
	        return abortAndThrowOnSynchronousRequestDataAccess;
	    },
	    abortOnSynchronousPlatformIOAccess: function() {
	        return abortOnSynchronousPlatformIOAccess;
	    },
	    accessedDynamicData: function() {
	        return accessedDynamicData;
	    },
	    annotateDynamicAccess: function() {
	        return annotateDynamicAccess;
	    },
	    consumeDynamicAccess: function() {
	        return consumeDynamicAccess;
	    },
	    createDynamicTrackingState: function() {
	        return createDynamicTrackingState;
	    },
	    createDynamicValidationState: function() {
	        return createDynamicValidationState;
	    },
	    createHangingInputAbortSignal: function() {
	        return createHangingInputAbortSignal;
	    },
	    createPostponedAbortSignal: function() {
	        return createPostponedAbortSignal;
	    },
	    formatDynamicAPIAccesses: function() {
	        return formatDynamicAPIAccesses;
	    },
	    getFirstDynamicReason: function() {
	        return getFirstDynamicReason;
	    },
	    isDynamicPostpone: function() {
	        return isDynamicPostpone;
	    },
	    isPrerenderInterruptedError: function() {
	        return isPrerenderInterruptedError;
	    },
	    markCurrentScopeAsDynamic: function() {
	        return markCurrentScopeAsDynamic;
	    },
	    postponeWithTracking: function() {
	        return postponeWithTracking;
	    },
	    throwIfDisallowedDynamic: function() {
	        return throwIfDisallowedDynamic;
	    },
	    throwToInterruptStaticGeneration: function() {
	        return throwToInterruptStaticGeneration;
	    },
	    trackAllowedDynamicAccess: function() {
	        return trackAllowedDynamicAccess;
	    },
	    trackDynamicDataInDynamicRender: function() {
	        return trackDynamicDataInDynamicRender;
	    },
	    trackFallbackParamAccessed: function() {
	        return trackFallbackParamAccessed;
	    },
	    trackSynchronousPlatformIOAccessInDev: function() {
	        return trackSynchronousPlatformIOAccessInDev;
	    },
	    trackSynchronousRequestDataAccessInDev: function() {
	        return trackSynchronousRequestDataAccessInDev;
	    },
	    useDynamicRouteParams: function() {
	        return useDynamicRouteParams;
	    }
	});
	const _react = /*#__PURE__*/ _interop_require_default(require$$0);
	const _hooksservercontext = hooksServerContextExports;
	const _staticgenerationbailout = staticGenerationBailoutExports;
	const _workunitasyncstorageexternal = workUnitAsyncStorage_external;
	const _workasyncstorageexternal = workAsyncStorage_external;
	const _dynamicrenderingutils = dynamicRenderingUtils;
	const _metadataconstants = metadataConstants;
	const _scheduler = scheduler;
	function _interop_require_default(obj) {
	    return obj && obj.__esModule ? obj : {
	        default: obj
	    };
	}
	const hasPostpone = typeof _react.default.unstable_postpone === 'function';
	function createDynamicTrackingState(isDebugDynamicAccesses) {
	    return {
	        isDebugDynamicAccesses,
	        dynamicAccesses: [],
	        syncDynamicExpression: undefined,
	        syncDynamicErrorWithStack: null
	    };
	}
	function createDynamicValidationState() {
	    return {
	        hasSuspendedDynamic: false,
	        hasDynamicMetadata: false,
	        hasDynamicViewport: false,
	        hasSyncDynamicErrors: false,
	        dynamicErrors: []
	    };
	}
	function getFirstDynamicReason(trackingState) {
	    var _trackingState_dynamicAccesses_;
	    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
	}
	function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
	    if (workUnitStore) {
	        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
	            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
	            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
	            // forbidden inside a cache scope.
	            return;
	        }
	    }
	    // If we're forcing dynamic rendering or we're forcing static rendering, we
	    // don't need to do anything here because the entire page is already dynamic
	    // or it's static and it should not throw or postpone here.
	    if (store.forceDynamic || store.forceStatic) return;
	    if (store.dynamicShouldError) {
	        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
	            value: "E553",
	            enumerable: false,
	            configurable: true
	        });
	    }
	    if (workUnitStore) {
	        if (workUnitStore.type === 'prerender-ppr') {
	            postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
	        } else if (workUnitStore.type === 'prerender-legacy') {
	            workUnitStore.revalidate = 0;
	            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
	            const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
	                value: "E550",
	                enumerable: false,
	                configurable: true
	            });
	            store.dynamicUsageDescription = expression;
	            store.dynamicUsageStack = err.stack;
	            throw err;
	        } else if (process.env.NODE_ENV === 'development' && workUnitStore && workUnitStore.type === 'request') {
	            workUnitStore.usedDynamic = true;
	        }
	    }
	}
	function trackFallbackParamAccessed(store, expression) {
	    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
	    if (!prerenderStore || prerenderStore.type !== 'prerender-ppr') return;
	    postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
	}
	function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
	    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
	    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
	        value: "E558",
	        enumerable: false,
	        configurable: true
	    });
	    prerenderStore.revalidate = 0;
	    store.dynamicUsageDescription = expression;
	    store.dynamicUsageStack = err.stack;
	    throw err;
	}
	function trackDynamicDataInDynamicRender(_store, workUnitStore) {
	    if (workUnitStore) {
	        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
	            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
	            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
	            // forbidden inside a cache scope.
	            return;
	        }
	        if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-legacy') {
	            workUnitStore.revalidate = 0;
	        }
	        if (process.env.NODE_ENV === 'development' && workUnitStore.type === 'request') {
	            workUnitStore.usedDynamic = true;
	        }
	    }
	}
	// Despite it's name we don't actually abort unless we have a controller to call abort on
	// There are times when we let a prerender run long to discover caches where we want the semantics
	// of tracking dynamic access without terminating the prerender early
	function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
	    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
	    const error = createPrerenderInterruptedError(reason);
	    prerenderStore.controller.abort(error);
	    const dynamicTracking = prerenderStore.dynamicTracking;
	    if (dynamicTracking) {
	        dynamicTracking.dynamicAccesses.push({
	            // When we aren't debugging, we don't need to create another error for the
	            // stack trace.
	            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
	            expression
	        });
	    }
	}
	function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
	    const dynamicTracking = prerenderStore.dynamicTracking;
	    if (dynamicTracking) {
	        if (dynamicTracking.syncDynamicErrorWithStack === null) {
	            dynamicTracking.syncDynamicExpression = expression;
	            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
	        }
	    }
	    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
	}
	function trackSynchronousPlatformIOAccessInDev(requestStore) {
	    // We don't actually have a controller to abort but we do the semantic equivalent by
	    // advancing the request store out of prerender mode
	    requestStore.prerenderPhase = false;
	}
	function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
	    const prerenderSignal = prerenderStore.controller.signal;
	    if (prerenderSignal.aborted === false) {
	        // TODO it would be better to move this aborted check into the callsite so we can avoid making
	        // the error object when it isn't relevant to the aborting of the prerender however
	        // since we need the throw semantics regardless of whether we abort it is easier to land
	        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
	        // to ideal implementation
	        const dynamicTracking = prerenderStore.dynamicTracking;
	        if (dynamicTracking) {
	            if (dynamicTracking.syncDynamicErrorWithStack === null) {
	                dynamicTracking.syncDynamicExpression = expression;
	                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
	                if (prerenderStore.validating === true) {
	                    // We always log Request Access in dev at the point of calling the function
	                    // So we mark the dynamic validation as not requiring it to be printed
	                    dynamicTracking.syncDynamicLogged = true;
	                }
	            }
	        }
	        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
	    }
	    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
	}
	const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
	function Postpone({ reason, route }) {
	    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
	    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
	    postponeWithTracking(route, reason, dynamicTracking);
	}
	function postponeWithTracking(route, expression, dynamicTracking) {
	    assertPostpone();
	    if (dynamicTracking) {
	        dynamicTracking.dynamicAccesses.push({
	            // When we aren't debugging, we don't need to create another error for the
	            // stack trace.
	            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
	            expression
	        });
	    }
	    _react.default.unstable_postpone(createPostponeReason(route, expression));
	}
	function createPostponeReason(route, expression) {
	    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
	}
	function isDynamicPostpone(err) {
	    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
	        return isDynamicPostponeReason(err.message);
	    }
	    return false;
	}
	function isDynamicPostponeReason(reason) {
	    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
	}
	if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
	    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
	        value: "E296",
	        enumerable: false,
	        configurable: true
	    });
	}
	const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
	function createPrerenderInterruptedError(message) {
	    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
	        value: "E394",
	        enumerable: false,
	        configurable: true
	    });
	    error.digest = NEXT_PRERENDER_INTERRUPTED;
	    return error;
	}
	function isPrerenderInterruptedError(error) {
	    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
	}
	function accessedDynamicData(dynamicAccesses) {
	    return dynamicAccesses.length > 0;
	}
	function consumeDynamicAccess(serverDynamic, clientDynamic) {
	    // We mutate because we only call this once we are no longer writing
	    // to the dynamicTrackingState and it's more efficient than creating a new
	    // array.
	    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
	    return serverDynamic.dynamicAccesses;
	}
	function formatDynamicAPIAccesses(dynamicAccesses) {
	    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
	        stack = stack.split('\n')// Remove the "Error: " prefix from the first line of the stack trace as
	        // well as the first 4 lines of the stack trace which is the distance
	        // from the user code and the `new Error().stack` call.
	        .slice(4).filter((line)=>{
	            // Exclude Next.js internals from the stack trace.
	            if (line.includes('node_modules/next/')) {
	                return false;
	            }
	            // Exclude anonymous functions from the stack trace.
	            if (line.includes(' (<anonymous>)')) {
	                return false;
	            }
	            // Exclude Node.js internals from the stack trace.
	            if (line.includes(' (node:')) {
	                return false;
	            }
	            return true;
	        }).join('\n');
	        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
	    });
	}
	function assertPostpone() {
	    if (!hasPostpone) {
	        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
	            value: "E224",
	            enumerable: false,
	            configurable: true
	        });
	    }
	}
	function createPostponedAbortSignal(reason) {
	    assertPostpone();
	    const controller = new AbortController();
	    // We get our hands on a postpone instance by calling postpone and catching the throw
	    try {
	        _react.default.unstable_postpone(reason);
	    } catch (x) {
	        controller.abort(x);
	    }
	    return controller.signal;
	}
	function createHangingInputAbortSignal(workUnitStore) {
	    const controller = new AbortController();
	    if (workUnitStore.cacheSignal) {
	        // If we have a cacheSignal it means we're in a prospective render. If the input
	        // we're waiting on is coming from another cache, we do want to wait for it so that
	        // we can resolve this cache entry too.
	        workUnitStore.cacheSignal.inputReady().then(()=>{
	            controller.abort();
	        });
	    } else {
	        // Otherwise we're in the final render and we should already have all our caches
	        // filled. We might still be waiting on some microtasks so we wait one tick before
	        // giving up. When we give up, we still want to render the content of this cache
	        // as deeply as we can so that we can suspend as deeply as possible in the tree
	        // or not at all if we don't end up waiting for the input.
	        (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
	    }
	    return controller.signal;
	}
	function annotateDynamicAccess(expression, prerenderStore) {
	    const dynamicTracking = prerenderStore.dynamicTracking;
	    if (dynamicTracking) {
	        dynamicTracking.dynamicAccesses.push({
	            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
	            expression
	        });
	    }
	}
	function useDynamicRouteParams(expression) {
	    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
	    if (workStore && workStore.isStaticGeneration && workStore.fallbackRouteParams && workStore.fallbackRouteParams.size > 0) {
	        // There are fallback route params, we should track these as dynamic
	        // accesses.
	        const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
	        if (workUnitStore) {
	            // We're prerendering with dynamicIO or PPR or both
	            if (workUnitStore.type === 'prerender') {
	                // We are in a prerender with dynamicIO semantics
	                // We are going to hang here and never resolve. This will cause the currently
	                // rendering component to effectively be a dynamic hole
	                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, expression));
	            } else if (workUnitStore.type === 'prerender-ppr') {
	                // We're prerendering with PPR
	                postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
	            } else if (workUnitStore.type === 'prerender-legacy') {
	                throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
	            }
	        }
	    }
	}
	const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
	const hasMetadataRegex = new RegExp(`\\n\\s+at ${_metadataconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
	const hasViewportRegex = new RegExp(`\\n\\s+at ${_metadataconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
	const hasOutletRegex = new RegExp(`\\n\\s+at ${_metadataconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
	function trackAllowedDynamicAccess(route, componentStack, dynamicValidation, serverDynamic, clientDynamic) {
	    if (hasOutletRegex.test(componentStack)) {
	        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
	        return;
	    } else if (hasMetadataRegex.test(componentStack)) {
	        dynamicValidation.hasDynamicMetadata = true;
	        return;
	    } else if (hasViewportRegex.test(componentStack)) {
	        dynamicValidation.hasDynamicViewport = true;
	        return;
	    } else if (hasSuspenseRegex.test(componentStack)) {
	        dynamicValidation.hasSuspendedDynamic = true;
	        return;
	    } else if (serverDynamic.syncDynamicErrorWithStack || clientDynamic.syncDynamicErrorWithStack) {
	        dynamicValidation.hasSyncDynamicErrors = true;
	        return;
	    } else {
	        const message = `Route "${route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
	        const error = createErrorWithComponentStack(message, componentStack);
	        dynamicValidation.dynamicErrors.push(error);
	        return;
	    }
	}
	function createErrorWithComponentStack(message, componentStack) {
	    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
	        value: "E394",
	        enumerable: false,
	        configurable: true
	    });
	    error.stack = 'Error: ' + message + componentStack;
	    return error;
	}
	function throwIfDisallowedDynamic(route, dynamicValidation, serverDynamic, clientDynamic) {
	    let syncError;
	    let syncExpression;
	    let syncLogged;
	    if (serverDynamic.syncDynamicErrorWithStack) {
	        syncError = serverDynamic.syncDynamicErrorWithStack;
	        syncExpression = serverDynamic.syncDynamicExpression;
	        syncLogged = serverDynamic.syncDynamicLogged === true;
	    } else if (clientDynamic.syncDynamicErrorWithStack) {
	        syncError = clientDynamic.syncDynamicErrorWithStack;
	        syncExpression = clientDynamic.syncDynamicExpression;
	        syncLogged = clientDynamic.syncDynamicLogged === true;
	    } else {
	        syncError = null;
	        syncExpression = undefined;
	        syncLogged = false;
	    }
	    if (dynamicValidation.hasSyncDynamicErrors && syncError) {
	        if (!syncLogged) {
	            // In dev we already log errors about sync dynamic access. But during builds we need to ensure
	            // the offending sync error is logged before we exit the build
	            console.error(syncError);
	        }
	        // The actual error should have been logged when the sync access ocurred
	        throw new _staticgenerationbailout.StaticGenBailoutError();
	    }
	    const dynamicErrors = dynamicValidation.dynamicErrors;
	    if (dynamicErrors.length) {
	        for(let i = 0; i < dynamicErrors.length; i++){
	            console.error(dynamicErrors[i]);
	        }
	        throw new _staticgenerationbailout.StaticGenBailoutError();
	    }
	    if (!dynamicValidation.hasSuspendedDynamic) {
	        if (dynamicValidation.hasDynamicMetadata) {
	            if (syncError) {
	                console.error(syncError);
	                throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateMetadata\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`), "__NEXT_ERROR_CODE", {
	                    value: "E608",
	                    enumerable: false,
	                    configurable: true
	                });
	            }
	            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`), "__NEXT_ERROR_CODE", {
	                value: "E534",
	                enumerable: false,
	                configurable: true
	            });
	        } else if (dynamicValidation.hasDynamicViewport) {
	            if (syncError) {
	                console.error(syncError);
	                throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateViewport\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`), "__NEXT_ERROR_CODE", {
	                    value: "E573",
	                    enumerable: false,
	                    configurable: true
	                });
	            }
	            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`), "__NEXT_ERROR_CODE", {
	                value: "E590",
	                enumerable: false,
	                configurable: true
	            });
	        }
	    }
	}

	
} (dynamicRendering));

var createDedupedByCallsiteServerErrorLogger = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
	    enumerable: true,
	    get: function() {
	        return createDedupedByCallsiteServerErrorLoggerDev;
	    }
	});
	const _react = /*#__PURE__*/ _interop_require_wildcard(require$$0);
	function _getRequireWildcardCache(nodeInterop) {
	    if (typeof WeakMap !== "function") return null;
	    var cacheBabelInterop = new WeakMap();
	    var cacheNodeInterop = new WeakMap();
	    return (_getRequireWildcardCache = function(nodeInterop) {
	        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
	    })(nodeInterop);
	}
	function _interop_require_wildcard(obj, nodeInterop) {
	    if (obj && obj.__esModule) {
	        return obj;
	    }
	    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
	        return {
	            default: obj
	        };
	    }
	    var cache = _getRequireWildcardCache(nodeInterop);
	    if (cache && cache.has(obj)) {
	        return cache.get(obj);
	    }
	    var newObj = {
	        __proto__: null
	    };
	    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
	    for(var key in obj){
	        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
	            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
	            if (desc && (desc.get || desc.set)) {
	                Object.defineProperty(newObj, key, desc);
	            } else {
	                newObj[key] = obj[key];
	            }
	        }
	    }
	    newObj.default = obj;
	    if (cache) {
	        cache.set(obj, newObj);
	    }
	    return newObj;
	}
	const errorRef = {
	    current: null
	};
	// React.cache is currently only available in canary/experimental React channels.
	const cache = typeof _react.cache === 'function' ? _react.cache : (fn)=>fn;
	// When Dynamic IO is enabled, we record these as errors so that they
	// are captured by the dev overlay as it's more critical to fix these
	// when enabled.
	const logErrorOrWarn = process.env.__NEXT_DYNAMIC_IO ? console.error : console.warn;
	// We don't want to dedupe across requests.
	// The developer might've just attempted to fix the warning so we should warn again if it still happens.
	const flushCurrentErrorIfNew = cache(// eslint-disable-next-line @typescript-eslint/no-unused-vars -- cache key
	(key)=>{
	    try {
	        logErrorOrWarn(errorRef.current);
	    } finally{
	        errorRef.current = null;
	    }
	});
	function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
	    return function logDedupedError(...args) {
	        const message = getMessage(...args);
	        if (process.env.NODE_ENV !== 'production') {
	            var _stack;
	            const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
	            if (callStackFrames === undefined || callStackFrames.length < 4) {
	                logErrorOrWarn(message);
	            } else {
	                // Error:
	                //   logDedupedError
	                //   asyncApiBeingAccessedSynchronously
	                //   <userland callsite>
	                // TODO: This breaks if sourcemaps with ignore lists are enabled.
	                const key = callStackFrames[4];
	                errorRef.current = message;
	                flushCurrentErrorIfNew(key);
	            }
	        } else {
	            logErrorOrWarn(message);
	        }
	    };
	}

	
} (createDedupedByCallsiteServerErrorLogger));

var utils = {};

var afterTaskAsyncStorage_external = {};

var afterTaskAsyncStorageInstance = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "afterTaskAsyncStorageInstance", {
	    enumerable: true,
	    get: function() {
	        return afterTaskAsyncStorageInstance;
	    }
	});
	const _asynclocalstorage = asyncLocalStorage;
	const afterTaskAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();

	
} (afterTaskAsyncStorageInstance));

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "afterTaskAsyncStorage", {
	    enumerable: true,
	    get: function() {
	        return _aftertaskasyncstorageinstance.afterTaskAsyncStorageInstance;
	    }
	});
	const _aftertaskasyncstorageinstance = afterTaskAsyncStorageInstance;

	
} (afterTaskAsyncStorage_external));

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    isRequestAPICallableInsideAfter: function() {
	        return isRequestAPICallableInsideAfter;
	    },
	    throwForSearchParamsAccessInUseCache: function() {
	        return throwForSearchParamsAccessInUseCache;
	    },
	    throwWithStaticGenerationBailoutError: function() {
	        return throwWithStaticGenerationBailoutError;
	    },
	    throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
	        return throwWithStaticGenerationBailoutErrorWithDynamicError;
	    }
	});
	const _staticgenerationbailout = staticGenerationBailoutExports;
	const _aftertaskasyncstorageexternal = afterTaskAsyncStorage_external;
	function throwWithStaticGenerationBailoutError(route, expression) {
	    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
	        value: "E576",
	        enumerable: false,
	        configurable: true
	    });
	}
	function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
	    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
	        value: "E543",
	        enumerable: false,
	        configurable: true
	    });
	}
	function throwForSearchParamsAccessInUseCache(workStore) {
	    const error = Object.defineProperty(new Error(`Route ${workStore.route} used "searchParams" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "searchParams" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
	        value: "E634",
	        enumerable: false,
	        configurable: true
	    });
	    workStore.invalidUsageError ??= error;
	    throw error;
	}
	function isRequestAPICallableInsideAfter() {
	    const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
	    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
	}

	
} (utils));

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "cookies", {
	    enumerable: true,
	    get: function() {
	        return cookies;
	    }
	});
	const _requestcookies = requestCookies;
	const _cookies = cookies$1;
	const _workasyncstorageexternal = workAsyncStorage_external;
	const _workunitasyncstorageexternal = workUnitAsyncStorage_external;
	const _dynamicrendering = dynamicRendering;
	const _staticgenerationbailout = staticGenerationBailoutExports;
	const _dynamicrenderingutils = dynamicRenderingUtils;
	const _creatededupedbycallsiteservererrorlogger = createDedupedByCallsiteServerErrorLogger;
	const _scheduler = scheduler;
	const _utils = utils;
	function cookies() {
	    const callingExpression = 'cookies';
	    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
	    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
	    if (workStore) {
	        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
	            throw Object.defineProperty(new Error(// TODO(after): clarify that this only applies to pages?
	            `Route ${workStore.route} used "cookies" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "cookies" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
	                value: "E88",
	                enumerable: false,
	                configurable: true
	            });
	        }
	        if (workStore.forceStatic) {
	            // When using forceStatic we override all other logic and always just return an empty
	            // cookies object without tracking
	            const underlyingCookies = createEmptyCookies();
	            return makeUntrackedExoticCookies(underlyingCookies);
	        }
	        if (workUnitStore) {
	            if (workUnitStore.type === 'cache') {
	                throw Object.defineProperty(new Error(`Route ${workStore.route} used "cookies" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
	                    value: "E398",
	                    enumerable: false,
	                    configurable: true
	                });
	            } else if (workUnitStore.type === 'unstable-cache') {
	                throw Object.defineProperty(new Error(`Route ${workStore.route} used "cookies" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
	                    value: "E157",
	                    enumerable: false,
	                    configurable: true
	                });
	            }
	        }
	        if (workStore.dynamicShouldError) {
	            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
	                value: "E549",
	                enumerable: false,
	                configurable: true
	            });
	        }
	        if (workUnitStore) {
	            if (workUnitStore.type === 'prerender') {
	                // dynamicIO Prerender
	                // We don't track dynamic access here because access will be tracked when you access
	                // one of the properties of the cookies object.
	                return makeDynamicallyTrackedExoticCookies(workStore.route, workUnitStore);
	            } else if (workUnitStore.type === 'prerender-ppr') {
	                // PPR Prerender (no dynamicIO)
	                // We are prerendering with PPR. We need track dynamic access here eagerly
	                // to keep continuity with how cookies has worked in PPR without dynamicIO.
	                (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
	            } else if (workUnitStore.type === 'prerender-legacy') {
	                // Legacy Prerender
	                // We track dynamic access here so we don't need to wrap the cookies in
	                // individual property access tracking.
	                (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
	            }
	        }
	        // We fall through to the dynamic context below but we still track dynamic access
	        // because in dev we can still error for things like using cookies inside a cache context
	        (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workStore, workUnitStore);
	    }
	    // cookies is being called in a dynamic context
	    const requestStore = (0, _workunitasyncstorageexternal.getExpectedRequestStore)(callingExpression);
	    let underlyingCookies;
	    if ((0, _requestcookies.areCookiesMutableInCurrentPhase)(requestStore)) {
	        // We can't conditionally return different types here based on the context.
	        // To avoid confusion, we always return the readonly type here.
	        underlyingCookies = requestStore.userspaceMutableCookies;
	    } else {
	        underlyingCookies = requestStore.cookies;
	    }
	    if (process.env.NODE_ENV === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
	        return makeUntrackedExoticCookiesWithDevWarnings(underlyingCookies, workStore == null ? void 0 : workStore.route);
	    } else {
	        return makeUntrackedExoticCookies(underlyingCookies);
	    }
	}
	function createEmptyCookies() {
	    return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
	}
	const CachedCookies = new WeakMap();
	function makeDynamicallyTrackedExoticCookies(route, prerenderStore) {
	    const cachedPromise = CachedCookies.get(prerenderStore);
	    if (cachedPromise) {
	        return cachedPromise;
	    }
	    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`cookies()`');
	    CachedCookies.set(prerenderStore, promise);
	    Object.defineProperties(promise, {
	        [Symbol.iterator]: {
	            value: function() {
	                const expression = '`cookies()[Symbol.iterator]()`';
	                const error = createCookiesAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        size: {
	            get () {
	                const expression = '`cookies().size`';
	                const error = createCookiesAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        get: {
	            value: function get() {
	                let expression;
	                if (arguments.length === 0) {
	                    expression = '`cookies().get()`';
	                } else {
	                    expression = `\`cookies().get(${describeNameArg(arguments[0])})\``;
	                }
	                const error = createCookiesAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        getAll: {
	            value: function getAll() {
	                let expression;
	                if (arguments.length === 0) {
	                    expression = '`cookies().getAll()`';
	                } else {
	                    expression = `\`cookies().getAll(${describeNameArg(arguments[0])})\``;
	                }
	                const error = createCookiesAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        has: {
	            value: function has() {
	                let expression;
	                if (arguments.length === 0) {
	                    expression = '`cookies().has()`';
	                } else {
	                    expression = `\`cookies().has(${describeNameArg(arguments[0])})\``;
	                }
	                const error = createCookiesAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        set: {
	            value: function set() {
	                let expression;
	                if (arguments.length === 0) {
	                    expression = '`cookies().set()`';
	                } else {
	                    const arg = arguments[0];
	                    if (arg) {
	                        expression = `\`cookies().set(${describeNameArg(arg)}, ...)\``;
	                    } else {
	                        expression = '`cookies().set(...)`';
	                    }
	                }
	                const error = createCookiesAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        delete: {
	            value: function() {
	                let expression;
	                if (arguments.length === 0) {
	                    expression = '`cookies().delete()`';
	                } else if (arguments.length === 1) {
	                    expression = `\`cookies().delete(${describeNameArg(arguments[0])})\``;
	                } else {
	                    expression = `\`cookies().delete(${describeNameArg(arguments[0])}, ...)\``;
	                }
	                const error = createCookiesAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        clear: {
	            value: function clear() {
	                const expression = '`cookies().clear()`';
	                const error = createCookiesAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        toString: {
	            value: function toString() {
	                const expression = '`cookies().toString()`';
	                const error = createCookiesAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        }
	    });
	    return promise;
	}
	function makeUntrackedExoticCookies(underlyingCookies) {
	    const cachedCookies = CachedCookies.get(underlyingCookies);
	    if (cachedCookies) {
	        return cachedCookies;
	    }
	    const promise = Promise.resolve(underlyingCookies);
	    CachedCookies.set(underlyingCookies, promise);
	    Object.defineProperties(promise, {
	        [Symbol.iterator]: {
	            value: underlyingCookies[Symbol.iterator] ? underlyingCookies[Symbol.iterator].bind(underlyingCookies) : // We should remove this and unify our cookies types. We could just let this continue to throw lazily
	            // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
	            // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
	            // has extra properties not available on RequestCookie instances.
	            polyfilledResponseCookiesIterator.bind(underlyingCookies)
	        },
	        size: {
	            get () {
	                return underlyingCookies.size;
	            }
	        },
	        get: {
	            value: underlyingCookies.get.bind(underlyingCookies)
	        },
	        getAll: {
	            value: underlyingCookies.getAll.bind(underlyingCookies)
	        },
	        has: {
	            value: underlyingCookies.has.bind(underlyingCookies)
	        },
	        set: {
	            value: underlyingCookies.set.bind(underlyingCookies)
	        },
	        delete: {
	            value: underlyingCookies.delete.bind(underlyingCookies)
	        },
	        clear: {
	            value: // @ts-expect-error clear is defined in RequestCookies implementation but not in the type
	            typeof underlyingCookies.clear === 'function' ? underlyingCookies.clear.bind(underlyingCookies) : // We should remove this and unify our cookies types. We could just let this continue to throw lazily
	            // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
	            // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
	            // has extra properties not available on RequestCookie instances.
	            polyfilledResponseCookiesClear.bind(underlyingCookies, promise)
	        },
	        toString: {
	            value: underlyingCookies.toString.bind(underlyingCookies)
	        }
	    });
	    return promise;
	}
	function makeUntrackedExoticCookiesWithDevWarnings(underlyingCookies, route) {
	    const cachedCookies = CachedCookies.get(underlyingCookies);
	    if (cachedCookies) {
	        return cachedCookies;
	    }
	    const promise = new Promise((resolve)=>(0, _scheduler.scheduleImmediate)(()=>resolve(underlyingCookies)));
	    CachedCookies.set(underlyingCookies, promise);
	    Object.defineProperties(promise, {
	        [Symbol.iterator]: {
	            value: function() {
	                const expression = '`...cookies()` or similar iteration';
	                syncIODev(route, expression);
	                return underlyingCookies[Symbol.iterator] ? underlyingCookies[Symbol.iterator].apply(underlyingCookies, arguments) : // We should remove this and unify our cookies types. We could just let this continue to throw lazily
	                // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
	                // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
	                // has extra properties not available on RequestCookie instances.
	                polyfilledResponseCookiesIterator.call(underlyingCookies);
	            },
	            writable: false
	        },
	        size: {
	            get () {
	                const expression = '`cookies().size`';
	                syncIODev(route, expression);
	                return underlyingCookies.size;
	            }
	        },
	        get: {
	            value: function get() {
	                let expression;
	                if (arguments.length === 0) {
	                    expression = '`cookies().get()`';
	                } else {
	                    expression = `\`cookies().get(${describeNameArg(arguments[0])})\``;
	                }
	                syncIODev(route, expression);
	                return underlyingCookies.get.apply(underlyingCookies, arguments);
	            },
	            writable: false
	        },
	        getAll: {
	            value: function getAll() {
	                let expression;
	                if (arguments.length === 0) {
	                    expression = '`cookies().getAll()`';
	                } else {
	                    expression = `\`cookies().getAll(${describeNameArg(arguments[0])})\``;
	                }
	                syncIODev(route, expression);
	                return underlyingCookies.getAll.apply(underlyingCookies, arguments);
	            },
	            writable: false
	        },
	        has: {
	            value: function get() {
	                let expression;
	                if (arguments.length === 0) {
	                    expression = '`cookies().has()`';
	                } else {
	                    expression = `\`cookies().has(${describeNameArg(arguments[0])})\``;
	                }
	                syncIODev(route, expression);
	                return underlyingCookies.has.apply(underlyingCookies, arguments);
	            },
	            writable: false
	        },
	        set: {
	            value: function set() {
	                let expression;
	                if (arguments.length === 0) {
	                    expression = '`cookies().set()`';
	                } else {
	                    const arg = arguments[0];
	                    if (arg) {
	                        expression = `\`cookies().set(${describeNameArg(arg)}, ...)\``;
	                    } else {
	                        expression = '`cookies().set(...)`';
	                    }
	                }
	                syncIODev(route, expression);
	                return underlyingCookies.set.apply(underlyingCookies, arguments);
	            },
	            writable: false
	        },
	        delete: {
	            value: function() {
	                let expression;
	                if (arguments.length === 0) {
	                    expression = '`cookies().delete()`';
	                } else if (arguments.length === 1) {
	                    expression = `\`cookies().delete(${describeNameArg(arguments[0])})\``;
	                } else {
	                    expression = `\`cookies().delete(${describeNameArg(arguments[0])}, ...)\``;
	                }
	                syncIODev(route, expression);
	                return underlyingCookies.delete.apply(underlyingCookies, arguments);
	            },
	            writable: false
	        },
	        clear: {
	            value: function clear() {
	                const expression = '`cookies().clear()`';
	                syncIODev(route, expression);
	                // @ts-ignore clear is defined in RequestCookies implementation but not in the type
	                return typeof underlyingCookies.clear === 'function' ? underlyingCookies.clear.apply(underlyingCookies, arguments) : // We should remove this and unify our cookies types. We could just let this continue to throw lazily
	                // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
	                // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
	                // has extra properties not available on RequestCookie instances.
	                polyfilledResponseCookiesClear.call(underlyingCookies, promise);
	            },
	            writable: false
	        },
	        toString: {
	            value: function toString() {
	                const expression = '`cookies().toString()` or implicit casting';
	                syncIODev(route, expression);
	                return underlyingCookies.toString.apply(underlyingCookies, arguments);
	            },
	            writable: false
	        }
	    });
	    return promise;
	}
	function describeNameArg(arg) {
	    return typeof arg === 'object' && arg !== null && typeof arg.name === 'string' ? `'${arg.name}'` : typeof arg === 'string' ? `'${arg}'` : '...';
	}
	function syncIODev(route, expression) {
	    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
	    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
	        // When we're rendering dynamically in dev we need to advance out of the
	        // Prerender environment when we read Request data synchronously
	        const requestStore = workUnitStore;
	        (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
	    }
	    // In all cases we warn normally
	    warnForSyncAccess(route, expression);
	}
	const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createCookiesAccessError);
	function createCookiesAccessError(route, expression) {
	    const prefix = route ? `Route "${route}" ` : 'This route ';
	    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`cookies()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
	        value: "E223",
	        enumerable: false,
	        configurable: true
	    });
	}
	function polyfilledResponseCookiesIterator() {
	    return this.getAll().map((c)=>[
	            c.name,
	            c
	        ]).values();
	}
	function polyfilledResponseCookiesClear(returnable) {
	    for (const cookie of this.getAll()){
	        this.delete(cookie.name);
	    }
	    return returnable;
	}

	
} (cookies$2));

var headers$1 = {};

var headers = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    HeadersAdapter: function() {
	        return HeadersAdapter;
	    },
	    ReadonlyHeadersError: function() {
	        return ReadonlyHeadersError;
	    }
	});
	const _reflect = reflect;
	class ReadonlyHeadersError extends Error {
	    constructor(){
	        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
	    }
	    static callable() {
	        throw new ReadonlyHeadersError();
	    }
	}
	class HeadersAdapter extends Headers {
	    constructor(headers){
	        // We've already overridden the methods that would be called, so we're just
	        // calling the super constructor to ensure that the instanceof check works.
	        super();
	        this.headers = new Proxy(headers, {
	            get (target, prop, receiver) {
	                // Because this is just an object, we expect that all "get" operations
	                // are for properties. If it's a "get" for a symbol, we'll just return
	                // the symbol.
	                if (typeof prop === 'symbol') {
	                    return _reflect.ReflectAdapter.get(target, prop, receiver);
	                }
	                const lowercased = prop.toLowerCase();
	                // Let's find the original casing of the key. This assumes that there is
	                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
	                // headers object.
	                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
	                // If the original casing doesn't exist, return undefined.
	                if (typeof original === 'undefined') return;
	                // If the original casing exists, return the value.
	                return _reflect.ReflectAdapter.get(target, original, receiver);
	            },
	            set (target, prop, value, receiver) {
	                if (typeof prop === 'symbol') {
	                    return _reflect.ReflectAdapter.set(target, prop, value, receiver);
	                }
	                const lowercased = prop.toLowerCase();
	                // Let's find the original casing of the key. This assumes that there is
	                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
	                // headers object.
	                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
	                // If the original casing doesn't exist, use the prop as the key.
	                return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
	            },
	            has (target, prop) {
	                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.has(target, prop);
	                const lowercased = prop.toLowerCase();
	                // Let's find the original casing of the key. This assumes that there is
	                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
	                // headers object.
	                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
	                // If the original casing doesn't exist, return false.
	                if (typeof original === 'undefined') return false;
	                // If the original casing exists, return true.
	                return _reflect.ReflectAdapter.has(target, original);
	            },
	            deleteProperty (target, prop) {
	                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.deleteProperty(target, prop);
	                const lowercased = prop.toLowerCase();
	                // Let's find the original casing of the key. This assumes that there is
	                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
	                // headers object.
	                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
	                // If the original casing doesn't exist, return true.
	                if (typeof original === 'undefined') return true;
	                // If the original casing exists, delete the property.
	                return _reflect.ReflectAdapter.deleteProperty(target, original);
	            }
	        });
	    }
	    /**
	   * Seals a Headers instance to prevent modification by throwing an error when
	   * any mutating method is called.
	   */ static seal(headers) {
	        return new Proxy(headers, {
	            get (target, prop, receiver) {
	                switch(prop){
	                    case 'append':
	                    case 'delete':
	                    case 'set':
	                        return ReadonlyHeadersError.callable;
	                    default:
	                        return _reflect.ReflectAdapter.get(target, prop, receiver);
	                }
	            }
	        });
	    }
	    /**
	   * Merges a header value into a string. This stores multiple values as an
	   * array, so we need to merge them into a string.
	   *
	   * @param value a header value
	   * @returns a merged header value (a string)
	   */ merge(value) {
	        if (Array.isArray(value)) return value.join(', ');
	        return value;
	    }
	    /**
	   * Creates a Headers instance from a plain object or a Headers instance.
	   *
	   * @param headers a plain object or a Headers instance
	   * @returns a headers instance
	   */ static from(headers) {
	        if (headers instanceof Headers) return headers;
	        return new HeadersAdapter(headers);
	    }
	    append(name, value) {
	        const existing = this.headers[name];
	        if (typeof existing === 'string') {
	            this.headers[name] = [
	                existing,
	                value
	            ];
	        } else if (Array.isArray(existing)) {
	            existing.push(value);
	        } else {
	            this.headers[name] = value;
	        }
	    }
	    delete(name) {
	        delete this.headers[name];
	    }
	    get(name) {
	        const value = this.headers[name];
	        if (typeof value !== 'undefined') return this.merge(value);
	        return null;
	    }
	    has(name) {
	        return typeof this.headers[name] !== 'undefined';
	    }
	    set(name, value) {
	        this.headers[name] = value;
	    }
	    forEach(callbackfn, thisArg) {
	        for (const [name, value] of this.entries()){
	            callbackfn.call(thisArg, value, name, this);
	        }
	    }
	    *entries() {
	        for (const key of Object.keys(this.headers)){
	            const name = key.toLowerCase();
	            // We assert here that this is a string because we got it from the
	            // Object.keys() call above.
	            const value = this.get(name);
	            yield [
	                name,
	                value
	            ];
	        }
	    }
	    *keys() {
	        for (const key of Object.keys(this.headers)){
	            const name = key.toLowerCase();
	            yield name;
	        }
	    }
	    *values() {
	        for (const key of Object.keys(this.headers)){
	            // We assert here that this is a string because we got it from the
	            // Object.keys() call above.
	            const value = this.get(key);
	            yield value;
	        }
	    }
	    [Symbol.iterator]() {
	        return this.entries();
	    }
	}

	
} (headers));

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "headers", {
	    enumerable: true,
	    get: function() {
	        return headers$1;
	    }
	});
	const _headers = headers;
	const _workasyncstorageexternal = workAsyncStorage_external;
	const _workunitasyncstorageexternal = workUnitAsyncStorage_external;
	const _dynamicrendering = dynamicRendering;
	const _staticgenerationbailout = staticGenerationBailoutExports;
	const _dynamicrenderingutils = dynamicRenderingUtils;
	const _creatededupedbycallsiteservererrorlogger = createDedupedByCallsiteServerErrorLogger;
	const _scheduler = scheduler;
	const _utils = utils;
	function headers$1() {
	    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
	    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
	    if (workStore) {
	        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
	            throw Object.defineProperty(new Error(`Route ${workStore.route} used "headers" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "headers" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
	                value: "E367",
	                enumerable: false,
	                configurable: true
	            });
	        }
	        if (workStore.forceStatic) {
	            // When using forceStatic we override all other logic and always just return an empty
	            // headers object without tracking
	            const underlyingHeaders = _headers.HeadersAdapter.seal(new Headers({}));
	            return makeUntrackedExoticHeaders(underlyingHeaders);
	        }
	        if (workUnitStore) {
	            if (workUnitStore.type === 'cache') {
	                throw Object.defineProperty(new Error(`Route ${workStore.route} used "headers" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
	                    value: "E304",
	                    enumerable: false,
	                    configurable: true
	                });
	            } else if (workUnitStore.type === 'unstable-cache') {
	                throw Object.defineProperty(new Error(`Route ${workStore.route} used "headers" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
	                    value: "E127",
	                    enumerable: false,
	                    configurable: true
	                });
	            }
	        }
	        if (workStore.dynamicShouldError) {
	            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
	                value: "E525",
	                enumerable: false,
	                configurable: true
	            });
	        }
	        if (workUnitStore) {
	            if (workUnitStore.type === 'prerender') {
	                // dynamicIO Prerender
	                // We don't track dynamic access here because access will be tracked when you access
	                // one of the properties of the headers object.
	                return makeDynamicallyTrackedExoticHeaders(workStore.route, workUnitStore);
	            } else if (workUnitStore.type === 'prerender-ppr') {
	                // PPR Prerender (no dynamicIO)
	                // We are prerendering with PPR. We need track dynamic access here eagerly
	                // to keep continuity with how headers has worked in PPR without dynamicIO.
	                // TODO consider switching the semantic to throw on property access instead
	                (0, _dynamicrendering.postponeWithTracking)(workStore.route, 'headers', workUnitStore.dynamicTracking);
	            } else if (workUnitStore.type === 'prerender-legacy') {
	                // Legacy Prerender
	                // We are in a legacy static generation mode while prerendering
	                // We track dynamic access here so we don't need to wrap the headers in
	                // individual property access tracking.
	                (0, _dynamicrendering.throwToInterruptStaticGeneration)('headers', workStore, workUnitStore);
	            }
	        }
	        // We fall through to the dynamic context below but we still track dynamic access
	        // because in dev we can still error for things like using headers inside a cache context
	        (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workStore, workUnitStore);
	    }
	    const requestStore = (0, _workunitasyncstorageexternal.getExpectedRequestStore)('headers');
	    if (process.env.NODE_ENV === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
	        return makeUntrackedExoticHeadersWithDevWarnings(requestStore.headers, workStore == null ? void 0 : workStore.route);
	    } else {
	        return makeUntrackedExoticHeaders(requestStore.headers);
	    }
	}
	const CachedHeaders = new WeakMap();
	function makeDynamicallyTrackedExoticHeaders(route, prerenderStore) {
	    const cachedHeaders = CachedHeaders.get(prerenderStore);
	    if (cachedHeaders) {
	        return cachedHeaders;
	    }
	    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, '`headers()`');
	    CachedHeaders.set(prerenderStore, promise);
	    Object.defineProperties(promise, {
	        append: {
	            value: function append() {
	                const expression = `\`headers().append(${describeNameArg(arguments[0])}, ...)\``;
	                const error = createHeadersAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        delete: {
	            value: function _delete() {
	                const expression = `\`headers().delete(${describeNameArg(arguments[0])})\``;
	                const error = createHeadersAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        get: {
	            value: function get() {
	                const expression = `\`headers().get(${describeNameArg(arguments[0])})\``;
	                const error = createHeadersAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        has: {
	            value: function has() {
	                const expression = `\`headers().has(${describeNameArg(arguments[0])})\``;
	                const error = createHeadersAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        set: {
	            value: function set() {
	                const expression = `\`headers().set(${describeNameArg(arguments[0])}, ...)\``;
	                const error = createHeadersAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        getSetCookie: {
	            value: function getSetCookie() {
	                const expression = '`headers().getSetCookie()`';
	                const error = createHeadersAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        forEach: {
	            value: function forEach() {
	                const expression = '`headers().forEach(...)`';
	                const error = createHeadersAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        keys: {
	            value: function keys() {
	                const expression = '`headers().keys()`';
	                const error = createHeadersAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        values: {
	            value: function values() {
	                const expression = '`headers().values()`';
	                const error = createHeadersAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        entries: {
	            value: function entries() {
	                const expression = '`headers().entries()`';
	                const error = createHeadersAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        },
	        [Symbol.iterator]: {
	            value: function() {
	                const expression = '`headers()[Symbol.iterator]()`';
	                const error = createHeadersAccessError(route, expression);
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(route, expression, error, prerenderStore);
	            }
	        }
	    });
	    return promise;
	}
	function makeUntrackedExoticHeaders(underlyingHeaders) {
	    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
	    if (cachedHeaders) {
	        return cachedHeaders;
	    }
	    const promise = Promise.resolve(underlyingHeaders);
	    CachedHeaders.set(underlyingHeaders, promise);
	    Object.defineProperties(promise, {
	        append: {
	            value: underlyingHeaders.append.bind(underlyingHeaders)
	        },
	        delete: {
	            value: underlyingHeaders.delete.bind(underlyingHeaders)
	        },
	        get: {
	            value: underlyingHeaders.get.bind(underlyingHeaders)
	        },
	        has: {
	            value: underlyingHeaders.has.bind(underlyingHeaders)
	        },
	        set: {
	            value: underlyingHeaders.set.bind(underlyingHeaders)
	        },
	        getSetCookie: {
	            value: underlyingHeaders.getSetCookie.bind(underlyingHeaders)
	        },
	        forEach: {
	            value: underlyingHeaders.forEach.bind(underlyingHeaders)
	        },
	        keys: {
	            value: underlyingHeaders.keys.bind(underlyingHeaders)
	        },
	        values: {
	            value: underlyingHeaders.values.bind(underlyingHeaders)
	        },
	        entries: {
	            value: underlyingHeaders.entries.bind(underlyingHeaders)
	        },
	        [Symbol.iterator]: {
	            value: underlyingHeaders[Symbol.iterator].bind(underlyingHeaders)
	        }
	    });
	    return promise;
	}
	function makeUntrackedExoticHeadersWithDevWarnings(underlyingHeaders, route) {
	    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
	    if (cachedHeaders) {
	        return cachedHeaders;
	    }
	    const promise = new Promise((resolve)=>(0, _scheduler.scheduleImmediate)(()=>resolve(underlyingHeaders)));
	    CachedHeaders.set(underlyingHeaders, promise);
	    Object.defineProperties(promise, {
	        append: {
	            value: function append() {
	                const expression = `\`headers().append(${describeNameArg(arguments[0])}, ...)\``;
	                syncIODev(route, expression);
	                return underlyingHeaders.append.apply(underlyingHeaders, arguments);
	            }
	        },
	        delete: {
	            value: function _delete() {
	                const expression = `\`headers().delete(${describeNameArg(arguments[0])})\``;
	                syncIODev(route, expression);
	                return underlyingHeaders.delete.apply(underlyingHeaders, arguments);
	            }
	        },
	        get: {
	            value: function get() {
	                const expression = `\`headers().get(${describeNameArg(arguments[0])})\``;
	                syncIODev(route, expression);
	                return underlyingHeaders.get.apply(underlyingHeaders, arguments);
	            }
	        },
	        has: {
	            value: function has() {
	                const expression = `\`headers().has(${describeNameArg(arguments[0])})\``;
	                syncIODev(route, expression);
	                return underlyingHeaders.has.apply(underlyingHeaders, arguments);
	            }
	        },
	        set: {
	            value: function set() {
	                const expression = `\`headers().set(${describeNameArg(arguments[0])}, ...)\``;
	                syncIODev(route, expression);
	                return underlyingHeaders.set.apply(underlyingHeaders, arguments);
	            }
	        },
	        getSetCookie: {
	            value: function getSetCookie() {
	                const expression = '`headers().getSetCookie()`';
	                syncIODev(route, expression);
	                return underlyingHeaders.getSetCookie.apply(underlyingHeaders, arguments);
	            }
	        },
	        forEach: {
	            value: function forEach() {
	                const expression = '`headers().forEach(...)`';
	                syncIODev(route, expression);
	                return underlyingHeaders.forEach.apply(underlyingHeaders, arguments);
	            }
	        },
	        keys: {
	            value: function keys() {
	                const expression = '`headers().keys()`';
	                syncIODev(route, expression);
	                return underlyingHeaders.keys.apply(underlyingHeaders, arguments);
	            }
	        },
	        values: {
	            value: function values() {
	                const expression = '`headers().values()`';
	                syncIODev(route, expression);
	                return underlyingHeaders.values.apply(underlyingHeaders, arguments);
	            }
	        },
	        entries: {
	            value: function entries() {
	                const expression = '`headers().entries()`';
	                syncIODev(route, expression);
	                return underlyingHeaders.entries.apply(underlyingHeaders, arguments);
	            }
	        },
	        [Symbol.iterator]: {
	            value: function() {
	                const expression = '`...headers()` or similar iteration';
	                syncIODev(route, expression);
	                return underlyingHeaders[Symbol.iterator].apply(underlyingHeaders, arguments);
	            }
	        }
	    });
	    return promise;
	}
	function describeNameArg(arg) {
	    return typeof arg === 'string' ? `'${arg}'` : '...';
	}
	function syncIODev(route, expression) {
	    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
	    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
	        // When we're rendering dynamically in dev we need to advance out of the
	        // Prerender environment when we read Request data synchronously
	        const requestStore = workUnitStore;
	        (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
	    }
	    // In all cases we warn normally
	    warnForSyncAccess(route, expression);
	}
	const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createHeadersAccessError);
	function createHeadersAccessError(route, expression) {
	    const prefix = route ? `Route "${route}" ` : 'This route ';
	    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`headers()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
	        value: "E277",
	        enumerable: false,
	        configurable: true
	    });
	}

	
} (headers$1));

var draftMode = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "draftMode", {
	    enumerable: true,
	    get: function() {
	        return draftMode;
	    }
	});
	const _workunitasyncstorageexternal = workUnitAsyncStorage_external;
	const _workasyncstorageexternal = workAsyncStorage_external;
	const _dynamicrendering = dynamicRendering;
	const _creatededupedbycallsiteservererrorlogger = createDedupedByCallsiteServerErrorLogger;
	const _staticgenerationbailout = staticGenerationBailoutExports;
	const _hooksservercontext = hooksServerContextExports;
	function draftMode() {
	    const callingExpression = 'draftMode';
	    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
	    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
	    if (!workStore || !workUnitStore) {
	        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
	    }
	    switch(workUnitStore.type){
	        case 'request':
	            return createOrGetCachedExoticDraftMode(workUnitStore.draftMode, workStore);
	        case 'cache':
	        case 'unstable-cache':
	            // Inside of `"use cache"` or `unstable_cache`, draft mode is available if
	            // the outmost work unit store is a request store, and if draft mode is
	            // enabled.
	            const draftModeProvider = (0, _workunitasyncstorageexternal.getDraftModeProviderForCacheScope)(workStore, workUnitStore);
	            if (draftModeProvider) {
	                return createOrGetCachedExoticDraftMode(draftModeProvider, workStore);
	            }
	        // Otherwise, we fall through to providing an empty draft mode.
	        // eslint-disable-next-line no-fallthrough
	        case 'prerender':
	        case 'prerender-ppr':
	        case 'prerender-legacy':
	            // Return empty draft mode
	            if (process.env.NODE_ENV === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
	                const route = workStore == null ? void 0 : workStore.route;
	                return createExoticDraftModeWithDevWarnings(null, route);
	            } else {
	                return createExoticDraftMode(null);
	            }
	        default:
	            const _exhaustiveCheck = workUnitStore;
	            return _exhaustiveCheck;
	    }
	}
	function createOrGetCachedExoticDraftMode(draftModeProvider, workStore) {
	    const cachedDraftMode = CachedDraftModes.get(draftMode);
	    if (cachedDraftMode) {
	        return cachedDraftMode;
	    }
	    let promise;
	    if (process.env.NODE_ENV === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
	        const route = workStore == null ? void 0 : workStore.route;
	        promise = createExoticDraftModeWithDevWarnings(draftModeProvider, route);
	    } else {
	        promise = createExoticDraftMode(draftModeProvider);
	    }
	    CachedDraftModes.set(draftModeProvider, promise);
	    return promise;
	}
	const CachedDraftModes = new WeakMap();
	function createExoticDraftMode(underlyingProvider) {
	    const instance = new DraftMode(underlyingProvider);
	    const promise = Promise.resolve(instance);
	    Object.defineProperty(promise, 'isEnabled', {
	        get () {
	            return instance.isEnabled;
	        },
	        set (newValue) {
	            Object.defineProperty(promise, 'isEnabled', {
	                value: newValue,
	                writable: true,
	                enumerable: true
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    promise.enable = instance.enable.bind(instance);
	    promise.disable = instance.disable.bind(instance);
	    return promise;
	}
	function createExoticDraftModeWithDevWarnings(underlyingProvider, route) {
	    const instance = new DraftMode(underlyingProvider);
	    const promise = Promise.resolve(instance);
	    Object.defineProperty(promise, 'isEnabled', {
	        get () {
	            const expression = '`draftMode().isEnabled`';
	            syncIODev(route, expression);
	            return instance.isEnabled;
	        },
	        set (newValue) {
	            Object.defineProperty(promise, 'isEnabled', {
	                value: newValue,
	                writable: true,
	                enumerable: true
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(promise, 'enable', {
	        value: function get() {
	            const expression = '`draftMode().enable()`';
	            syncIODev(route, expression);
	            return instance.enable.apply(instance, arguments);
	        }
	    });
	    Object.defineProperty(promise, 'disable', {
	        value: function get() {
	            const expression = '`draftMode().disable()`';
	            syncIODev(route, expression);
	            return instance.disable.apply(instance, arguments);
	        }
	    });
	    return promise;
	}
	class DraftMode {
	    constructor(provider){
	        this._provider = provider;
	    }
	    get isEnabled() {
	        if (this._provider !== null) {
	            return this._provider.isEnabled;
	        }
	        return false;
	    }
	    enable() {
	        // We have a store we want to track dynamic data access to ensure we
	        // don't statically generate routes that manipulate draft mode.
	        trackDynamicDraftMode('draftMode().enable()');
	        if (this._provider !== null) {
	            this._provider.enable();
	        }
	    }
	    disable() {
	        trackDynamicDraftMode('draftMode().disable()');
	        if (this._provider !== null) {
	            this._provider.disable();
	        }
	    }
	}
	function syncIODev(route, expression) {
	    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
	    if (workUnitStore && workUnitStore.type === 'request' && workUnitStore.prerenderPhase === true) {
	        // When we're rendering dynamically in dev we need to advance out of the
	        // Prerender environment when we read Request data synchronously
	        const requestStore = workUnitStore;
	        (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(requestStore);
	    }
	    // In all cases we warn normally
	    warnForSyncAccess(route, expression);
	}
	const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createDraftModeAccessError);
	function createDraftModeAccessError(route, expression) {
	    const prefix = route ? `Route "${route}" ` : 'This route ';
	    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`draftMode()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
	        value: "E377",
	        enumerable: false,
	        configurable: true
	    });
	}
	function trackDynamicDraftMode(expression) {
	    const store = _workasyncstorageexternal.workAsyncStorage.getStore();
	    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
	    if (store) {
	        // We have a store we want to track dynamic data access to ensure we
	        // don't statically generate routes that manipulate draft mode.
	        if (workUnitStore) {
	            if (workUnitStore.type === 'cache') {
	                throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" inside "use cache". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
	                    value: "E246",
	                    enumerable: false,
	                    configurable: true
	                });
	            } else if (workUnitStore.type === 'unstable-cache') {
	                throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" inside a function cached with "unstable_cache(...)". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
	                    value: "E259",
	                    enumerable: false,
	                    configurable: true
	                });
	            } else if (workUnitStore.phase === 'after') {
	                throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" inside \`after\`. The enabled status of draftMode can be read inside \`after\` but you cannot enable or disable draftMode. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
	                    value: "E348",
	                    enumerable: false,
	                    configurable: true
	                });
	            }
	        }
	        if (store.dynamicShouldError) {
	            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
	                value: "E553",
	                enumerable: false,
	                configurable: true
	            });
	        }
	        if (workUnitStore) {
	            if (workUnitStore.type === 'prerender') {
	                // dynamicIO Prerender
	                const error = Object.defineProperty(new Error(`Route ${store.route} used ${expression} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`), "__NEXT_ERROR_CODE", {
	                    value: "E126",
	                    enumerable: false,
	                    configurable: true
	                });
	                (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(store.route, expression, error, workUnitStore);
	            } else if (workUnitStore.type === 'prerender-ppr') {
	                // PPR Prerender
	                (0, _dynamicrendering.postponeWithTracking)(store.route, expression, workUnitStore.dynamicTracking);
	            } else if (workUnitStore.type === 'prerender-legacy') {
	                // legacy Prerender
	                workUnitStore.revalidate = 0;
	                const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
	                    value: "E558",
	                    enumerable: false,
	                    configurable: true
	                });
	                store.dynamicUsageDescription = expression;
	                store.dynamicUsageStack = err.stack;
	                throw err;
	            } else if (process.env.NODE_ENV === 'development' && workUnitStore && workUnitStore.type === 'request') {
	                workUnitStore.usedDynamic = true;
	            }
	        }
	    }
	}

	
} (draftMode));

cookies$2.cookies;
headers$1.headers;
draftMode.draftMode;

const getSubDomain = () => {
    if (typeof window !== "undefined") {
        const hostname = window?.location?.hostname;
        if (process.env.NODE_ENV === "production" ? hostname?.includes("crezlo.site") : hostname?.includes("localhost")) {
            const domain = hostname?.split(".")?.[0];
            return `${domain}.${process.env.NEXT_PUBLIC_WEBSITE_PREVIEW_DOMAIN_API}`;
        }
        return hostname;
    }
    return null;
};

const apiEndpoints = {
    auth: {
        profile: "profile"},
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
const AuthContext = require$$0.createContext(undefined);
const AuthProvider = ({ children, config }) => {
    const [state, dispatch] = require$$0.useReducer(authReducer, initialState);
    const mergedConfig = { ...defaultConfig, ...(config ?? {}) };
    // Token management
    const updateToken = require$$0.useCallback((token) => {
        setCookieJSON("token", token);
        dispatch({ type: "SET_TOKENS", payload: token });
    }, []);
    const logoutUser = require$$0.useCallback((callback) => {
        logoutAuthUser(() => {
            dispatch({ type: "CLEAR_AUTH" });
            callback?.();
        });
    }, []);
    const getToken = require$$0.useCallback(() => {
        const token = getAuthToken();
        console.log("AuthProvider getToken", window.location.href, token);
        if (!token?.access_token) {
            const domain = getSubDomain();
            let redirectUrl = ``;
            if (domain !== envConstants.APP_NAME.ACCOUNT) {
                redirectUrl = `?redirect_url=${window.location.href}`;
            }
            window.location.href = envConstants.APP_URL.ACCOUNT + `/login` + redirectUrl;
        }
        return token;
    }, []);
    // API request interceptor to add auth token
    require$$0.useEffect(() => {
        ApiInstance.client.addGlobalRequestInterceptor(async (config) => {
            const token = getToken();
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
    const refreshUser = require$$0.useCallback(async () => {
        // setCookieJSON(
        //   "token",
        //   {
        //     token_type: "Bearer",
        //     access_token:
        //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWIzZTI5MTM1OThjMWYwNzRhYTg5MTUyNTMxYWI5NjM2MzE5OWQ4YzUzNjdmZWUzYmJhODJhNWZhNjlhZTZiYjZhNWEyMGQyNTg3YTI0YmMiLCJpYXQiOjE3NTI1NjQwMTcuNzkyODk1LCJuYmYiOjE3NTI1NjQwMTcuNzkyODk4LCJleHAiOjE3NTUxNTYwMTcuNzYyNjI3LCJzdWIiOiIwMTk4MDhmMi03N2RmLTcwMTMtYTgwMC03YWFiNmM1YzNmMjIiLCJzY29wZXMiOltdLCJwYXlsb2FkIjp7ImFjY291bnRJZCI6IjAxOTgwOGYyLWUyYWUtNzFmNi04MzNiLThkMGIyZjgyOWYyNSIsInNob3J0Q29kZSI6ImZDNk1EVGxnbE16dWFFSndpdTd0KzA1RE1raHJaWFJRUW5oUlprbzFTV3cxUnk5SVQwdEJkRlpTYTJOdU5EZENibHBWZVVjeWJWSlROekE5In19.LzbFBLbd69l7NFf7MLweLU2pXsUJQ7YHN-M6kd2K27SdfwpArIuzX97L5VpAsMkBIdk9scmIZhytldP2joOnR_17-gvCTnzfNXTF1uZ7Otrix0DW-Dlx2yCiSKqiZYff7-V5XaiAcEhAji7gbBmrI0kxicVPvt_h00Rt277eVMVGzirhYNQ3zDyzqkwi-NwUDrXLDbVP4Uujsm3DSQxrziLEhW_l9TmNdbFmIzkwgNcxXFPyuG9Pd5WGQAEp_xEhwnbGdVB1hoZ2jexDTwSDlMvAKHibJY_goGzmA9i42UyaJMD5QuJHruR-Mk1pQrxPyxYOJZ8MBAOv4cxYmi0T_WAGBNmXnc9fpawYkXRzMIveUT1bRB7gq3HxoTz0sGbNgcRvmvW6gtKEvPQMJRkc2T5HyIINuTk5Ocv93ueQvDmHkqXhC8chLGsG00HnxlzwlYDorv_vApMtBI6OXyG5PuUj6P-_YHHZTImv7A4yrj-SRRMV4b3Pqrwwor1S7Y-kBK0zIFuifkw0xnxgziiUtOuSw419U_WOR4WMZWKXQ7tqjADq2fySlOvsFGbRy2YanaKwdzEYgN8baBB9jwWTZZI3AFYQSCEPyQUOxEouTOgaRXxriHP2pokDgnG2I_cM9OBpZWN1TcndsWFaK0ofwvSSwDCzDKBYZz7aTQ9U5G0",
        //     expires_at: "2025-08-13T09:59:33.000000Z",
        //   },
        //   { expires: new Date("2025-08-13T09:59:33.000000Z") }
        // );
        // return;
        dispatch({ type: "SET_LOADING", payload: true });
        dispatch({ type: "SET_ERROR", payload: null });
        ApiInstance.CORE.get(apiEndpoints.auth.profile)
            .then((res) => {
            // @ts-ignore
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
    require$$0.useCallback(() => {
        dispatch({ type: "SET_ERROR", payload: null });
    }, []);
    // Notify auth state changes
    require$$0.useEffect(() => {
        mergedConfig.onAuthStateChange(state);
    }, [state, mergedConfig.onAuthStateChange]);
    const contextValue = {
        ...state,
        getToken,
        updateToken,
        logout: logoutUser,
        refreshUser,
    };
    return jsxRuntime.jsx(AuthContext.Provider, { value: contextValue, children: children });
};
// Hook to use auth context
const useAuth = () => {
    const context = require$$0.useContext(AuthContext);
    // if (context === undefined) {
    //   throw new Error("useAuth must be used within an AuthProvider");
    // }
    return context;
};

const AppContext = require$$0.createContext({
    sidebarOpen: true,
    setSidebarOpen: (value) => { },
    sidebarExpanded: true,
    setSidebarExpanded: (value) => { },
});
function AppProvider({ children }) {
    const [sidebarOpen, setSidebarOpen] = require$$0.useState(true);
    const [sidebarExpanded, setSidebarExpanded] = require$$0.useState(true);
    return (jsxRuntime.jsx(AppContext.Provider, { value: {
            sidebarOpen,
            setSidebarOpen,
            sidebarExpanded,
            setSidebarExpanded,
        }, children: children }));
}
const useAppProvider = () => require$$0.useContext(AppContext);

exports.AppProvider = AppProvider;
exports.AuthContext = AuthContext;
exports.AuthProvider = AuthProvider;
exports.useAppProvider = useAppProvider;
exports.useAuth = useAuth;
//# sourceMappingURL=index.js.map
