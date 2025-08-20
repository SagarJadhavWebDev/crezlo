import { ComponentData, Config, Permissions, UserGenerics } from "../../types";
import { AppStore, useAppStoreApi } from "../";
type PermissionsArgs<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = {
    item?: G["UserComponentData"] | null;
    type?: keyof G["UserProps"];
    root?: boolean;
};
export type GetPermissions<UserConfig extends Config = Config> = (params?: PermissionsArgs<UserConfig>) => Permissions;
type ResolvePermissions<UserConfig extends Config = Config> = (params?: PermissionsArgs<UserConfig>, force?: boolean) => void;
export type RefreshPermissions<UserConfig extends Config = Config> = (params?: PermissionsArgs<UserConfig>, force?: boolean) => void;
type Cache = Record<string, {
    lastPermissions: Partial<Permissions>;
    lastData: ComponentData | null;
}>;
export type PermissionsSlice = {
    cache: Cache;
    globalPermissions: Permissions;
    resolvedPermissions: Record<string, Partial<Permissions> | undefined>;
    getPermissions: GetPermissions<Config>;
    resolvePermissions: ResolvePermissions<Config>;
    refreshPermissions: RefreshPermissions<Config>;
};
export declare const createPermissionsSlice: (set: (newState: Partial<AppStore>) => void, get: () => AppStore) => PermissionsSlice;
export declare const useRegisterPermissionsSlice: (appStore: ReturnType<typeof useAppStoreApi>, globalPermissions: Partial<Permissions>) => void;
export {};
