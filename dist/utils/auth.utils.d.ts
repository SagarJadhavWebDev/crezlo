import { AuthToken } from "../types";
export declare const getAuthToken: () => AuthToken | null;
export declare const logoutAuthUser: (callback?: () => void) => void;
export declare const redirectOnUnauthorized: () => void;
