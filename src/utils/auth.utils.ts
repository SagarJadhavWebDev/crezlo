import { AuthToken } from "../types";
import { getCookieJSON, removeCookie } from "./cookieManager";

export const getAuthToken = (redirectOnUnauthorized?: string): AuthToken | null => {
  const token = getCookieJSON("token");
  console.log("TOKEN:", token);
  if (token?.access_token) {
    return token;
  } else {
    if (redirectOnUnauthorized) {
      window.location.assign(redirectOnUnauthorized + `?redirect_url=${window.location.href}`);
    } else {
      window.location.pathname = "/login";
    }
  }
  return null;
};

export const logoutAuthUser = (callback?: () => void): void => {
  removeCookie("token");
  removeCookie("auth");
  callback?.();
};
