import React, { ReactNode } from "react";
import { AuthContextValue, AuthProviderConfig } from "../types/auth";
declare const AuthContext: React.Context<AuthContextValue>;
export interface AuthProviderProps {
    children: ReactNode;
    config: AuthProviderConfig;
}
export declare const AuthProvider: React.FC<AuthProviderProps>;
export declare const useAuth: () => AuthContextValue;
export { AuthContext };
