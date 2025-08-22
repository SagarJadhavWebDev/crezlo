import { Config, UserGenerics, AppState, ComponentData } from "../types";
import { AppStore, useAppStoreApi } from "../store";
import { GetPermissions, RefreshPermissions } from "../store/slices/permissions";
import { HistorySlice } from "../store/slices/history";
import { StoreApi } from "zustand";
import { ItemSelector } from "./data/get-item";
type WithGet<T> = T & {
    get: () => T;
};
export type UseCrezloData<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = {
    appState: AppState;
    config: UserConfig;
    dispatch: AppStore["dispatch"];
    getPermissions: GetPermissions<UserConfig>;
    refreshPermissions: RefreshPermissions<UserConfig>;
    selectedItem: G["UserComponentData"] | null;
    getItemBySelector: (selector: ItemSelector) => ComponentData | undefined;
    getItemById: (id: string) => ComponentData | undefined;
    getSelectorForId: (id: string) => Required<ItemSelector> | undefined;
    history: {
        back: HistorySlice["back"];
        forward: HistorySlice["forward"];
        setHistories: HistorySlice["setHistories"];
        setHistoryIndex: HistorySlice["setHistoryIndex"];
        histories: HistorySlice["histories"];
        index: HistorySlice["index"];
        hasPast: boolean;
        hasFuture: boolean;
    };
};
export type CrezloApi<UserConfig extends Config = Config> = UseCrezloData<UserConfig>;
type UseCrezloStore<UserConfig extends Config = Config> = WithGet<CrezloApi<UserConfig>>;
type PickedStore = Pick<AppStore, "config" | "dispatch" | "selectedItem" | "permissions" | "history" | "state">;
export declare const generateUseCrezlo: (store: PickedStore) => UseCrezloStore;
export declare const UseCrezloStoreContext: import("react").Context<StoreApi<UseCrezloStore<Config>>>;
/**
 * Mirror changes in appStore to useCrezloStore
 */
export declare const useRegisterUseCrezloStore: (appStore: ReturnType<typeof useAppStoreApi>) => StoreApi<UseCrezloStore<Config>>;
/**
 * createUseCrezlo
 *
 * Create a typed useCrezlo hook, which is necessary because the user may provide a generic type but not
 * a selector type, and TS does not currently support partial inference.
 * Related: https://github.com/microsoft/TypeScript/issues/26242
 *
 * @returns a typed useCrezlo function
 */
export declare function createUseCrezlo<UserConfig extends Config = Config>(): <T = CrezloApi<UserConfig>>(selector: (state: UseCrezloStore<UserConfig>) => T) => T;
export declare function useCrezlo<UserConfig extends Config = Config>(): UseCrezloStore<UserConfig>;
/**
 * Get the latest state without relying on a render
 *
 * @returns CrezloApi
 */
export declare function useGetCrezlo(): () => UseCrezloStore<Config>;
export {};
