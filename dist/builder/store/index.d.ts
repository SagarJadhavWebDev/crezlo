import { Config, IframeConfig, Overrides, AppState, UiState, Plugin, UserGenerics, ComponentConfig, Metadata, ComponentData, RootDataWithProps, ResolveDataTrigger } from "../types";
import { CrezloAction } from "../reducer";
import { Viewports } from "../types";
import { StoreApi } from "zustand";
import { type HistorySlice } from "./slices/history";
import { type NodesSlice } from "./slices/nodes";
import { type PermissionsSlice } from "./slices/permissions";
import { type FieldsSlice } from "./slices/fields";
import { defaultAppState } from "./default-app-state";
export { defaultAppState };
export type Status = "LOADING" | "MOUNTED" | "READY";
type ZoomConfig = {
    autoZoom: number;
    rootHeight: number;
    zoom: number;
};
type ComponentState = Record<string, {
    loadingCount: number;
}>;
export type AppStore<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = {
    state: G["UserAppState"];
    dispatch: (action: CrezloAction) => void;
    config: UserConfig;
    componentState: ComponentState;
    setComponentState: (componentState: ComponentState) => void;
    setComponentLoading: (id: string, loading?: boolean, defer?: number) => () => void;
    unsetComponentLoading: (id: string) => void;
    pendingLoadTimeouts: Record<string, NodeJS.Timeout>;
    resolveComponentData: <T extends ComponentData | RootDataWithProps>(componentData: T, trigger: ResolveDataTrigger) => Promise<{
        node: T;
        didChange: boolean;
    }>;
    resolveAndCommitData: () => void;
    plugins: Plugin[];
    overrides: Partial<Overrides>;
    viewports: Viewports;
    zoomConfig: ZoomConfig;
    setZoomConfig: (zoomConfig: ZoomConfig) => void;
    status: Status;
    setStatus: (status: Status) => void;
    iframe: IframeConfig;
    selectedItem?: G["UserData"]["content"][0] | null;
    setUi: (ui: Partial<UiState>, recordHistory?: boolean) => void;
    getComponentConfig: (type?: string) => ComponentConfig | null | undefined;
    onAction?: (action: CrezloAction, newState: AppState, state: AppState) => void;
    metadata: Metadata;
    fields: FieldsSlice;
    history: HistorySlice;
    nodes: NodesSlice;
    permissions: PermissionsSlice;
};
export type AppStoreApi = StoreApi<AppStore>;
export declare const createAppStore: (initialAppStore?: Partial<AppStore>) => import("zustand").UseBoundStore<Omit<StoreApi<AppStore<Config, UserGenerics<Config>>>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: AppStore<Config, UserGenerics<Config>>, previousSelectedState: AppStore<Config, UserGenerics<Config>>) => void): () => void;
        <U>(selector: (state: AppStore<Config, UserGenerics<Config>>) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: (a: U, b: U) => boolean;
            fireImmediately?: boolean;
        }): () => void;
    };
}>;
export declare const appStoreContext: import("react").Context<import("zustand").UseBoundStore<Omit<StoreApi<AppStore<Config, UserGenerics<Config>>>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: AppStore<Config, UserGenerics<Config>>, previousSelectedState: AppStore<Config, UserGenerics<Config>>) => void): () => void;
        <U>(selector: (state: AppStore<Config, UserGenerics<Config>>) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: (a: U, b: U) => boolean;
            fireImmediately?: boolean;
        }): () => void;
    };
}>>;
export declare function useAppStore<T>(selector: (state: AppStore) => T): T;
export declare function useAppStoreApi(): import("zustand").UseBoundStore<Omit<StoreApi<AppStore<Config, UserGenerics<Config>>>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: AppStore<Config, UserGenerics<Config>>, previousSelectedState: AppStore<Config, UserGenerics<Config>>) => void): () => void;
        <U>(selector: (state: AppStore<Config, UserGenerics<Config>>) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: (a: U, b: U) => boolean;
            fireImmediately?: boolean;
        }): () => void;
    };
}>;
