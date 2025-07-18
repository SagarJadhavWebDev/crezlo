import { AuthToken } from "../types";
import { getCookieJSON, removeCookie } from "./cookieManager";

export const getAuthToken = (): AuthToken | null => {
  const token = getCookieJSON("token");
  if (token?.access_token) {
    return token;
  }
  return null;
};

export const logoutAuthUser = (callback?: () => void): void => {
  removeCookie("token");
  callback?.();
};
