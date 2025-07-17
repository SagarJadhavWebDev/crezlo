'use strict';

var require$$0 = require('react');

var navigation$1 = {exports: {}};

var appRouterContext_sharedRuntime = {};

var _interop_require_default$1 = {};

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
_interop_require_default$1._ = _interop_require_default;

(function (exports) {
	'use client';
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
	    AppRouterContext: function() {
	        return AppRouterContext;
	    },
	    GlobalLayoutRouterContext: function() {
	        return GlobalLayoutRouterContext;
	    },
	    LayoutRouterContext: function() {
	        return LayoutRouterContext;
	    },
	    MissingSlotContext: function() {
	        return MissingSlotContext;
	    },
	    TemplateContext: function() {
	        return TemplateContext;
	    }
	});
	const _interop_require_default = _interop_require_default$1;
	const _react = /*#__PURE__*/ _interop_require_default._(require$$0);
	const AppRouterContext = _react.default.createContext(null);
	const LayoutRouterContext = _react.default.createContext(null);
	const GlobalLayoutRouterContext = _react.default.createContext(null);
	const TemplateContext = _react.default.createContext(null);
	if (process.env.NODE_ENV !== 'production') {
	    AppRouterContext.displayName = 'AppRouterContext';
	    LayoutRouterContext.displayName = 'LayoutRouterContext';
	    GlobalLayoutRouterContext.displayName = 'GlobalLayoutRouterContext';
	    TemplateContext.displayName = 'TemplateContext';
	}
	const MissingSlotContext = _react.default.createContext(new Set());

	
} (appRouterContext_sharedRuntime));

var hooksClientContext_sharedRuntime = {};

(function (exports) {
	'use client';
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
	    PathParamsContext: function() {
	        return PathParamsContext;
	    },
	    PathnameContext: function() {
	        return PathnameContext;
	    },
	    SearchParamsContext: function() {
	        return SearchParamsContext;
	    }
	});
	const _react = require$$0;
	const SearchParamsContext = (0, _react.createContext)(null);
	const PathnameContext = (0, _react.createContext)(null);
	const PathParamsContext = (0, _react.createContext)(null);
	if (process.env.NODE_ENV !== 'production') {
	    SearchParamsContext.displayName = 'SearchParamsContext';
	    PathnameContext.displayName = 'PathnameContext';
	    PathParamsContext.displayName = 'PathParamsContext';
	}

	
} (hooksClientContext_sharedRuntime));

var getSegmentValue = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "getSegmentValue", {
	    enumerable: true,
	    get: function() {
	        return getSegmentValue;
	    }
	});
	function getSegmentValue(segment) {
	    return Array.isArray(segment) ? segment[1] : segment;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (getSegmentValue, getSegmentValue.exports));

var getSegmentValueExports = getSegmentValue.exports;

var segment = {};

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
	    DEFAULT_SEGMENT_KEY: function() {
	        return DEFAULT_SEGMENT_KEY;
	    },
	    PAGE_SEGMENT_KEY: function() {
	        return PAGE_SEGMENT_KEY;
	    },
	    addSearchParamsIfPageSegment: function() {
	        return addSearchParamsIfPageSegment;
	    },
	    isGroupSegment: function() {
	        return isGroupSegment;
	    },
	    isParallelRouteSegment: function() {
	        return isParallelRouteSegment;
	    }
	});
	function isGroupSegment(segment) {
	    // Use array[0] for performant purpose
	    return segment[0] === '(' && segment.endsWith(')');
	}
	function isParallelRouteSegment(segment) {
	    return segment.startsWith('@') && segment !== '@children';
	}
	function addSearchParamsIfPageSegment(segment, searchParams) {
	    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
	    if (isPageSegment) {
	        const stringifiedQuery = JSON.stringify(searchParams);
	        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
	    }
	    return segment;
	}
	const PAGE_SEGMENT_KEY = '__PAGE__';
	const DEFAULT_SEGMENT_KEY = '__DEFAULT__';

	
} (segment));

var navigation_reactServer = {exports: {}};

var redirect = {exports: {}};

var redirectStatusCode = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "RedirectStatusCode", {
	    enumerable: true,
	    get: function() {
	        return RedirectStatusCode;
	    }
	});
	var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
	    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
	    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
	    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
	    return RedirectStatusCode;
	}({});

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (redirectStatusCode, redirectStatusCode.exports));

var redirectStatusCodeExports = redirectStatusCode.exports;

var redirectError = {exports: {}};

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
	    REDIRECT_ERROR_CODE: function() {
	        return REDIRECT_ERROR_CODE;
	    },
	    RedirectType: function() {
	        return RedirectType;
	    },
	    isRedirectError: function() {
	        return isRedirectError;
	    }
	});
	const _redirectstatuscode = redirectStatusCodeExports;
	const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
	var RedirectType = /*#__PURE__*/ function(RedirectType) {
	    RedirectType["push"] = "push";
	    RedirectType["replace"] = "replace";
	    return RedirectType;
	}({});
	function isRedirectError(error) {
	    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
	        return false;
	    }
	    const digest = error.digest.split(';');
	    const [errorCode, type] = digest;
	    const destination = digest.slice(2, -2).join(';');
	    const status = digest.at(-2);
	    const statusCode = Number(status);
	    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (redirectError, redirectError.exports));

var redirectErrorExports = redirectError.exports;

var actionAsyncStorage_external = {};

var actionAsyncStorageInstance = {};

var asyncLocalStorage = {};

var hasRequiredAsyncLocalStorage;

function requireAsyncLocalStorage () {
	if (hasRequiredAsyncLocalStorage) return asyncLocalStorage;
	hasRequiredAsyncLocalStorage = 1;
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
	return asyncLocalStorage;
}

var hasRequiredActionAsyncStorageInstance;

function requireActionAsyncStorageInstance () {
	if (hasRequiredActionAsyncStorageInstance) return actionAsyncStorageInstance;
	hasRequiredActionAsyncStorageInstance = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "actionAsyncStorageInstance", {
		    enumerable: true,
		    get: function() {
		        return actionAsyncStorageInstance;
		    }
		});
		const _asynclocalstorage = requireAsyncLocalStorage();
		const actionAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();

		
	} (actionAsyncStorageInstance));
	return actionAsyncStorageInstance;
}

var hasRequiredActionAsyncStorage_external;

function requireActionAsyncStorage_external () {
	if (hasRequiredActionAsyncStorage_external) return actionAsyncStorage_external;
	hasRequiredActionAsyncStorage_external = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "actionAsyncStorage", {
		    enumerable: true,
		    get: function() {
		        return _actionasyncstorageinstance.actionAsyncStorageInstance;
		    }
		});
		const _actionasyncstorageinstance = requireActionAsyncStorageInstance();

		
	} (actionAsyncStorage_external));
	return actionAsyncStorage_external;
}

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
	    getRedirectError: function() {
	        return getRedirectError;
	    },
	    getRedirectStatusCodeFromError: function() {
	        return getRedirectStatusCodeFromError;
	    },
	    getRedirectTypeFromError: function() {
	        return getRedirectTypeFromError;
	    },
	    getURLFromRedirectError: function() {
	        return getURLFromRedirectError;
	    },
	    permanentRedirect: function() {
	        return permanentRedirect;
	    },
	    redirect: function() {
	        return redirect;
	    }
	});
	const _redirectstatuscode = redirectStatusCodeExports;
	const _redirecterror = redirectErrorExports;
	const actionAsyncStorage = typeof window === 'undefined' ? requireActionAsyncStorage_external().actionAsyncStorage : undefined;
	function getRedirectError(url, type, statusCode) {
	    if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
	    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
	        value: "E394",
	        enumerable: false,
	        configurable: true
	    });
	    error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
	    return error;
	}
	function redirect(/** The URL to redirect to */ url, type) {
	    var _actionAsyncStorage_getStore;
	    type != null ? type : type = (actionAsyncStorage == null ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) == null ? void 0 : _actionAsyncStorage_getStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
	    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
	}
	function permanentRedirect(/** The URL to redirect to */ url, type) {
	    if (type === void 0) type = _redirecterror.RedirectType.replace;
	    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
	}
	function getURLFromRedirectError(error) {
	    if (!(0, _redirecterror.isRedirectError)(error)) return null;
	    // Slices off the beginning of the digest that contains the code and the
	    // separating ';'.
	    return error.digest.split(';').slice(2, -2).join(';');
	}
	function getRedirectTypeFromError(error) {
	    if (!(0, _redirecterror.isRedirectError)(error)) {
	        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
	            value: "E260",
	            enumerable: false,
	            configurable: true
	        });
	    }
	    return error.digest.split(';', 2)[1];
	}
	function getRedirectStatusCodeFromError(error) {
	    if (!(0, _redirecterror.isRedirectError)(error)) {
	        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
	            value: "E260",
	            enumerable: false,
	            configurable: true
	        });
	    }
	    return Number(error.digest.split(';').at(-2));
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (redirect, redirect.exports));

var redirectExports = redirect.exports;

var notFound = {exports: {}};

var httpAccessFallback = {exports: {}};

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
	    HTTPAccessErrorStatus: function() {
	        return HTTPAccessErrorStatus;
	    },
	    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
	        return HTTP_ERROR_FALLBACK_ERROR_CODE;
	    },
	    getAccessFallbackErrorTypeByStatus: function() {
	        return getAccessFallbackErrorTypeByStatus;
	    },
	    getAccessFallbackHTTPStatus: function() {
	        return getAccessFallbackHTTPStatus;
	    },
	    isHTTPAccessFallbackError: function() {
	        return isHTTPAccessFallbackError;
	    }
	});
	const HTTPAccessErrorStatus = {
	    NOT_FOUND: 404,
	    FORBIDDEN: 403,
	    UNAUTHORIZED: 401
	};
	const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
	const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
	function isHTTPAccessFallbackError(error) {
	    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
	        return false;
	    }
	    const [prefix, httpStatus] = error.digest.split(';');
	    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
	}
	function getAccessFallbackHTTPStatus(error) {
	    const httpStatus = error.digest.split(';')[1];
	    return Number(httpStatus);
	}
	function getAccessFallbackErrorTypeByStatus(status) {
	    switch(status){
	        case 401:
	            return 'unauthorized';
	        case 403:
	            return 'forbidden';
	        case 404:
	            return 'not-found';
	        default:
	            return;
	    }
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (httpAccessFallback, httpAccessFallback.exports));

var httpAccessFallbackExports = httpAccessFallback.exports;

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "notFound", {
	    enumerable: true,
	    get: function() {
	        return notFound;
	    }
	});
	const _httpaccessfallback = httpAccessFallbackExports;
	/**
	 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
	 * within a route segment as well as inject a tag.
	 *
	 * `notFound()` can be used in
	 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
	 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
	 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
	 *
	 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
	 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
	 *
	 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
	 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
	function notFound() {
	    // eslint-disable-next-line no-throw-literal
	    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
	        value: "E394",
	        enumerable: false,
	        configurable: true
	    });
	    error.digest = DIGEST;
	    throw error;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (notFound, notFound.exports));

var notFoundExports = notFound.exports;

var forbidden = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "forbidden", {
	    enumerable: true,
	    get: function() {
	        return forbidden;
	    }
	});
	const _httpaccessfallback = httpAccessFallbackExports;
	// TODO: Add `forbidden` docs
	/**
	 * @experimental
	 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
	 * within a route segment as well as inject a tag.
	 *
	 * `forbidden()` can be used in
	 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
	 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
	 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
	 *
	 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
	 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
	function forbidden() {
	    if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
	        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
	            value: "E488",
	            enumerable: false,
	            configurable: true
	        });
	    }
	    // eslint-disable-next-line no-throw-literal
	    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
	        value: "E394",
	        enumerable: false,
	        configurable: true
	    });
	    error.digest = DIGEST;
	    throw error;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (forbidden, forbidden.exports));

var forbiddenExports = forbidden.exports;

var unauthorized = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "unauthorized", {
	    enumerable: true,
	    get: function() {
	        return unauthorized;
	    }
	});
	const _httpaccessfallback = httpAccessFallbackExports;
	// TODO: Add `unauthorized` docs
	/**
	 * @experimental
	 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
	 * within a route segment as well as inject a tag.
	 *
	 * `unauthorized()` can be used in
	 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
	 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
	 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
	 *
	 *
	 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
	 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
	function unauthorized() {
	    if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
	        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
	            value: "E411",
	            enumerable: false,
	            configurable: true
	        });
	    }
	    // eslint-disable-next-line no-throw-literal
	    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
	        value: "E394",
	        enumerable: false,
	        configurable: true
	    });
	    error.digest = DIGEST;
	    throw error;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (unauthorized, unauthorized.exports));

var unauthorizedExports = unauthorized.exports;

var unstableRethrow = {exports: {}};

var unstableRethrow_server = {exports: {}};

var dynamicRenderingUtils = {};

var hasRequiredDynamicRenderingUtils;

function requireDynamicRenderingUtils () {
	if (hasRequiredDynamicRenderingUtils) return dynamicRenderingUtils;
	hasRequiredDynamicRenderingUtils = 1;
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
	return dynamicRenderingUtils;
}

var isPostpone = {};

var hasRequiredIsPostpone;

function requireIsPostpone () {
	if (hasRequiredIsPostpone) return isPostpone;
	hasRequiredIsPostpone = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isPostpone", {
		    enumerable: true,
		    get: function() {
		        return isPostpone;
		    }
		});
		const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
		function isPostpone(error) {
		    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
		}

		
	} (isPostpone));
	return isPostpone;
}

var bailoutToCsr = {};

var hasRequiredBailoutToCsr;

function requireBailoutToCsr () {
	if (hasRequiredBailoutToCsr) return bailoutToCsr;
	hasRequiredBailoutToCsr = 1;
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
		    BailoutToCSRError: function() {
		        return BailoutToCSRError;
		    },
		    isBailoutToCSRError: function() {
		        return isBailoutToCSRError;
		    }
		});
		const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
		class BailoutToCSRError extends Error {
		    constructor(reason){
		        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
		    }
		}
		function isBailoutToCSRError(err) {
		    if (typeof err !== 'object' || err === null || !('digest' in err)) {
		        return false;
		    }
		    return err.digest === BAILOUT_TO_CSR;
		}

		
	} (bailoutToCsr));
	return bailoutToCsr;
}

var isNextRouterError = {exports: {}};

var hasRequiredIsNextRouterError;

function requireIsNextRouterError () {
	if (hasRequiredIsNextRouterError) return isNextRouterError.exports;
	hasRequiredIsNextRouterError = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isNextRouterError", {
		    enumerable: true,
		    get: function() {
		        return isNextRouterError;
		    }
		});
		const _httpaccessfallback = httpAccessFallbackExports;
		const _redirecterror = redirectErrorExports;
		function isNextRouterError(error) {
		    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (isNextRouterError, isNextRouterError.exports));
	return isNextRouterError.exports;
}

var dynamicRendering = {};

var hooksServerContext = {exports: {}};

var hasRequiredHooksServerContext;

function requireHooksServerContext () {
	if (hasRequiredHooksServerContext) return hooksServerContext.exports;
	hasRequiredHooksServerContext = 1;
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
	return hooksServerContext.exports;
}

var staticGenerationBailout = {exports: {}};

var hasRequiredStaticGenerationBailout;

function requireStaticGenerationBailout () {
	if (hasRequiredStaticGenerationBailout) return staticGenerationBailout.exports;
	hasRequiredStaticGenerationBailout = 1;
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
	return staticGenerationBailout.exports;
}

var workUnitAsyncStorage_external = {};

var workUnitAsyncStorageInstance = {};

var hasRequiredWorkUnitAsyncStorageInstance;

function requireWorkUnitAsyncStorageInstance () {
	if (hasRequiredWorkUnitAsyncStorageInstance) return workUnitAsyncStorageInstance;
	hasRequiredWorkUnitAsyncStorageInstance = 1;
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
		const _asynclocalstorage = requireAsyncLocalStorage();
		const workUnitAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();

		
	} (workUnitAsyncStorageInstance));
	return workUnitAsyncStorageInstance;
}

var appRouterHeaders = {exports: {}};

var hasRequiredAppRouterHeaders;

function requireAppRouterHeaders () {
	if (hasRequiredAppRouterHeaders) return appRouterHeaders.exports;
	hasRequiredAppRouterHeaders = 1;
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
	return appRouterHeaders.exports;
}

var hasRequiredWorkUnitAsyncStorage_external;

function requireWorkUnitAsyncStorage_external () {
	if (hasRequiredWorkUnitAsyncStorage_external) return workUnitAsyncStorage_external;
	hasRequiredWorkUnitAsyncStorage_external = 1;
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
		const _workunitasyncstorageinstance = requireWorkUnitAsyncStorageInstance();
		const _approuterheaders = requireAppRouterHeaders();
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
	return workUnitAsyncStorage_external;
}

var workAsyncStorage_external = {};

var workAsyncStorageInstance = {};

var hasRequiredWorkAsyncStorageInstance;

function requireWorkAsyncStorageInstance () {
	if (hasRequiredWorkAsyncStorageInstance) return workAsyncStorageInstance;
	hasRequiredWorkAsyncStorageInstance = 1;
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
		const _asynclocalstorage = requireAsyncLocalStorage();
		const workAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();

		
	} (workAsyncStorageInstance));
	return workAsyncStorageInstance;
}

var hasRequiredWorkAsyncStorage_external;

function requireWorkAsyncStorage_external () {
	if (hasRequiredWorkAsyncStorage_external) return workAsyncStorage_external;
	hasRequiredWorkAsyncStorage_external = 1;
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
		const _workasyncstorageinstance = requireWorkAsyncStorageInstance();

		
	} (workAsyncStorage_external));
	return workAsyncStorage_external;
}

var metadataConstants = {};

var hasRequiredMetadataConstants;

function requireMetadataConstants () {
	if (hasRequiredMetadataConstants) return metadataConstants;
	hasRequiredMetadataConstants = 1;
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
	return metadataConstants;
}

var scheduler = {};

var hasRequiredScheduler;

function requireScheduler () {
	if (hasRequiredScheduler) return scheduler;
	hasRequiredScheduler = 1;
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
	return scheduler;
}

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

var hasRequiredDynamicRendering;

function requireDynamicRendering () {
	if (hasRequiredDynamicRendering) return dynamicRendering;
	hasRequiredDynamicRendering = 1;
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
		const _hooksservercontext = requireHooksServerContext();
		const _staticgenerationbailout = requireStaticGenerationBailout();
		const _workunitasyncstorageexternal = requireWorkUnitAsyncStorage_external();
		const _workasyncstorageexternal = requireWorkAsyncStorage_external();
		const _dynamicrenderingutils = requireDynamicRenderingUtils();
		const _metadataconstants = requireMetadataConstants();
		const _scheduler = requireScheduler();
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
	return dynamicRendering;
}

var hasRequiredUnstableRethrow_server;

function requireUnstableRethrow_server () {
	if (hasRequiredUnstableRethrow_server) return unstableRethrow_server.exports;
	hasRequiredUnstableRethrow_server = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "unstable_rethrow", {
		    enumerable: true,
		    get: function() {
		        return unstable_rethrow;
		    }
		});
		const _dynamicrenderingutils = requireDynamicRenderingUtils();
		const _ispostpone = requireIsPostpone();
		const _bailouttocsr = requireBailoutToCsr();
		const _isnextroutererror = requireIsNextRouterError();
		const _dynamicrendering = requireDynamicRendering();
		const _hooksservercontext = requireHooksServerContext();
		function unstable_rethrow(error) {
		    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error)) {
		        throw error;
		    }
		    if (error instanceof Error && 'cause' in error) {
		        unstable_rethrow(error.cause);
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (unstableRethrow_server, unstableRethrow_server.exports));
	return unstableRethrow_server.exports;
}

var unstableRethrow_browser = {exports: {}};

var hasRequiredUnstableRethrow_browser;

function requireUnstableRethrow_browser () {
	if (hasRequiredUnstableRethrow_browser) return unstableRethrow_browser.exports;
	hasRequiredUnstableRethrow_browser = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "unstable_rethrow", {
		    enumerable: true,
		    get: function() {
		        return unstable_rethrow;
		    }
		});
		const _bailouttocsr = requireBailoutToCsr();
		const _isnextroutererror = requireIsNextRouterError();
		function unstable_rethrow(error) {
		    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error)) {
		        throw error;
		    }
		    if (error instanceof Error && 'cause' in error) {
		        unstable_rethrow(error.cause);
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (unstableRethrow_browser, unstableRethrow_browser.exports));
	return unstableRethrow_browser.exports;
}

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "unstable_rethrow", {
	    enumerable: true,
	    get: function() {
	        return unstable_rethrow;
	    }
	});
	const unstable_rethrow = typeof window === 'undefined' ? requireUnstableRethrow_server().unstable_rethrow : requireUnstableRethrow_browser().unstable_rethrow;

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (unstableRethrow, unstableRethrow.exports));

var unstableRethrowExports = unstableRethrow.exports;

/** @internal */

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
	    ReadonlyURLSearchParams: function() {
	        return ReadonlyURLSearchParams;
	    },
	    RedirectType: function() {
	        return _redirecterror.RedirectType;
	    },
	    forbidden: function() {
	        return _forbidden.forbidden;
	    },
	    notFound: function() {
	        return _notfound.notFound;
	    },
	    permanentRedirect: function() {
	        return _redirect.permanentRedirect;
	    },
	    redirect: function() {
	        return _redirect.redirect;
	    },
	    unauthorized: function() {
	        return _unauthorized.unauthorized;
	    },
	    unstable_rethrow: function() {
	        return _unstablerethrow.unstable_rethrow;
	    }
	});
	const _redirect = redirectExports;
	const _redirecterror = redirectErrorExports;
	const _notfound = notFoundExports;
	const _forbidden = forbiddenExports;
	const _unauthorized = unauthorizedExports;
	const _unstablerethrow = unstableRethrowExports;
	class ReadonlyURLSearchParamsError extends Error {
	    constructor(){
	        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
	    }
	}
	class ReadonlyURLSearchParams extends URLSearchParams {
	    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
	        throw new ReadonlyURLSearchParamsError();
	    }
	    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
	        throw new ReadonlyURLSearchParamsError();
	    }
	    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
	        throw new ReadonlyURLSearchParamsError();
	    }
	    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
	        throw new ReadonlyURLSearchParamsError();
	    }
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (navigation_reactServer, navigation_reactServer.exports));

var navigation_reactServerExports = navigation_reactServer.exports;

var serverInsertedHtml_sharedRuntime = {};

var _interop_require_wildcard$1 = {};

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = { __proto__: null };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}
_interop_require_wildcard$1._ = _interop_require_wildcard;

(function (exports) {
	'use client';
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
	    ServerInsertedHTMLContext: function() {
	        return ServerInsertedHTMLContext;
	    },
	    useServerInsertedHTML: function() {
	        return useServerInsertedHTML;
	    }
	});
	const _interop_require_wildcard = _interop_require_wildcard$1;
	const _react = /*#__PURE__*/ _interop_require_wildcard._(require$$0);
	const ServerInsertedHTMLContext = /*#__PURE__*/ _react.default.createContext(null);
	function useServerInsertedHTML(callback) {
	    const addInsertedServerHTMLCallback = (0, _react.useContext)(ServerInsertedHTMLContext);
	    // Should have no effects on client where there's no flush effects provider
	    if (addInsertedServerHTMLCallback) {
	        addInsertedServerHTMLCallback(callback);
	    }
	}

	
} (serverInsertedHtml_sharedRuntime));

var bailoutToClientRendering = {exports: {}};

var hasRequiredBailoutToClientRendering;

function requireBailoutToClientRendering () {
	if (hasRequiredBailoutToClientRendering) return bailoutToClientRendering.exports;
	hasRequiredBailoutToClientRendering = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "bailoutToClientRendering", {
		    enumerable: true,
		    get: function() {
		        return bailoutToClientRendering;
		    }
		});
		const _bailouttocsr = requireBailoutToCsr();
		const _workasyncstorageexternal = requireWorkAsyncStorage_external();
		function bailoutToClientRendering(reason) {
		    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
		    if (workStore == null ? void 0 : workStore.forceStatic) return;
		    if (workStore == null ? void 0 : workStore.isStaticGeneration) throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
		        value: "E394",
		        enumerable: false,
		        configurable: true
		    });
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (bailoutToClientRendering, bailoutToClientRendering.exports));
	return bailoutToClientRendering.exports;
}

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
	    ReadonlyURLSearchParams: function() {
	        return _navigationreactserver.ReadonlyURLSearchParams;
	    },
	    RedirectType: function() {
	        return _navigationreactserver.RedirectType;
	    },
	    ServerInsertedHTMLContext: function() {
	        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
	    },
	    forbidden: function() {
	        return _navigationreactserver.forbidden;
	    },
	    notFound: function() {
	        return _navigationreactserver.notFound;
	    },
	    permanentRedirect: function() {
	        return _navigationreactserver.permanentRedirect;
	    },
	    redirect: function() {
	        return _navigationreactserver.redirect;
	    },
	    unauthorized: function() {
	        return _navigationreactserver.unauthorized;
	    },
	    unstable_rethrow: function() {
	        return _navigationreactserver.unstable_rethrow;
	    },
	    useParams: function() {
	        return useParams;
	    },
	    usePathname: function() {
	        return usePathname;
	    },
	    useRouter: function() {
	        return useRouter;
	    },
	    useSearchParams: function() {
	        return useSearchParams;
	    },
	    useSelectedLayoutSegment: function() {
	        return useSelectedLayoutSegment;
	    },
	    useSelectedLayoutSegments: function() {
	        return useSelectedLayoutSegments;
	    },
	    useServerInsertedHTML: function() {
	        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
	    }
	});
	const _react = require$$0;
	const _approutercontextsharedruntime = appRouterContext_sharedRuntime;
	const _hooksclientcontextsharedruntime = hooksClientContext_sharedRuntime;
	const _getsegmentvalue = getSegmentValueExports;
	const _segment = segment;
	const _navigationreactserver = navigation_reactServerExports;
	const _serverinsertedhtmlsharedruntime = serverInsertedHtml_sharedRuntime;
	const useDynamicRouteParams = typeof window === 'undefined' ? requireDynamicRendering().useDynamicRouteParams : undefined;
	function useSearchParams() {
	    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
	    // In the case where this is `null`, the compat types added in
	    // `next-env.d.ts` will add a new overload that changes the return type to
	    // include `null`.
	    const readonlySearchParams = (0, _react.useMemo)(()=>{
	        if (!searchParams) {
	            // When the router is not ready in pages, we won't have the search params
	            // available.
	            return null;
	        }
	        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
	    }, [
	        searchParams
	    ]);
	    if (typeof window === 'undefined') {
	        // AsyncLocalStorage should not be included in the client bundle.
	        const { bailoutToClientRendering } = requireBailoutToClientRendering();
	        // TODO-APP: handle dynamic = 'force-static' here and on the client
	        bailoutToClientRendering('useSearchParams()');
	    }
	    return readonlySearchParams;
	}
	function usePathname() {
	    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('usePathname()');
	    // In the case where this is `null`, the compat types added in `next-env.d.ts`
	    // will add a new overload that changes the return type to include `null`.
	    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
	}
	function useRouter() {
	    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
	    if (router === null) {
	        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
	            value: "E238",
	            enumerable: false,
	            configurable: true
	        });
	    }
	    return router;
	}
	function useParams() {
	    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useParams()');
	    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
	}
	/** Get the canonical parameters from the current level to the leaf node. */ // Client components API
	function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
	    if (first === void 0) first = true;
	    if (segmentPath === void 0) segmentPath = [];
	    let node;
	    if (first) {
	        // Use the provided parallel route key on the first parallel route
	        node = tree[1][parallelRouteKey];
	    } else {
	        // After first parallel route prefer children, if there's no children pick the first parallel route.
	        const parallelRoutes = tree[1];
	        var _parallelRoutes_children;
	        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
	    }
	    if (!node) return segmentPath;
	    const segment = node[0];
	    let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
	    if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
	        return segmentPath;
	    }
	    segmentPath.push(segmentValue);
	    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
	}
	function useSelectedLayoutSegments(parallelRouteKey) {
	    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
	    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegments()');
	    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
	    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
	    if (!context) return null;
	    return getSelectedLayoutSegmentPath(context.parentTree, parallelRouteKey);
	}
	function useSelectedLayoutSegment(parallelRouteKey) {
	    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
	    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegment()');
	    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
	    if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
	        return null;
	    }
	    const selectedLayoutSegment = parallelRouteKey === 'children' ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
	    // if the default slot is showing, we return null since it's not technically "selected" (it's a fallback)
	    // and returning an internal value like `__DEFAULT__` would be confusing.
	    return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (navigation$1, navigation$1.exports));

var navigationExports = navigation$1.exports;

var navigation = navigationExports;

const useQueryParams = () => {
    const searchParams = navigation.useSearchParams();
    const router = navigation.useRouter();
    const params = new URLSearchParams(searchParams);
    const updateQueryParam = (key, value) => {
        params.set(key, value);
        router.push(`?${params.toString()}`);
    };
    return { params, updateQueryParam };
};

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = require$$0.useState(() => {
        if (typeof window === 'undefined')
            return initialValue;
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });
    const setValue = require$$0.useCallback((value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        }
        catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, storedValue]);
    const removeValue = require$$0.useCallback(() => {
        try {
            setStoredValue(initialValue);
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem(key);
            }
        }
        catch (error) {
            console.warn(`Error removing localStorage key "${key}":`, error);
        }
    }, [key, initialValue]);
    return [storedValue, setValue, removeValue];
};
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = require$$0.useState(value);
    require$$0.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
};
const useToggle = (initialValue = false) => {
    const [value, setValue] = require$$0.useState(initialValue);
    const toggle = require$$0.useCallback(() => setValue(prev => !prev), []);
    const setTrue = require$$0.useCallback(() => setValue(true), []);
    const setFalse = require$$0.useCallback(() => setValue(false), []);
    return [value, toggle, setTrue, setFalse];
};

exports.useDebounce = useDebounce;
exports.useLocalStorage = useLocalStorage;
exports.useQueryParams = useQueryParams;
exports.useToggle = useToggle;
//# sourceMappingURL=index.js.map
