import { AuthToken } from "../types";
export declare const getAuthToken: (redirectOnUnauthorized?: string) => AuthToken | null;
export declare const logoutAuthUser: (callback?: () => void) => void;
