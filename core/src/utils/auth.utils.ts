import { envConstants } from "../constants";
import { AuthToken } from "../types";
import { getCookieJSON, removeCookie } from "./cookieManager";
import getSubDomain from "./getSubDomain";

export const getAuthToken = (): AuthToken | null => {
  const token = getCookieJSON("token");
  if (token?.access_token) {
    return token;
  }
  return null;
};

export const logoutAuthUser = (callback?: () => void): void => {
  removeCookie("token");
  removeCookie("auth");
  callback?.();
};

export const redirectOnUnauthorized = () => {
  const domain = getSubDomain();
  if (envConstants.APP_NAME.ACCOUNT !== domain) {
    window.location.assign(envConstants.APP_URL.ACCOUNT + `/login?redirect_url=${window.location.href}`);
  } else {
    window.location.pathname = "/login";
  }
};
