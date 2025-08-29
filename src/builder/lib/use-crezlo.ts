import { Config, UserGenerics, AppState, ComponentData } from "../types";
import { createContext, useContext, useEffect, useState } from "react";
import { AppStore, useAppStoreApi } from "../store";
import {
  GetPermissions,
  RefreshPermissions,
} from "../store/slices/permissions";
import { HistorySlice } from "../store/slices/history";
import { createStore, StoreApi, useStore } from "zustand";
import { makeStatePublic } from "./data/make-state-public";
import { getItem, ItemSelector } from "./data/get-item";

type WithGet<T> = T & { get: () => T };

export type UseCrezloData<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
> = {
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

export type CrezloApi<UserConfig extends Config = Config> =
  UseCrezloData<UserConfig>;

type UseCrezloStore<UserConfig extends Config = Config> = WithGet<
  CrezloApi<UserConfig>
>;

type PickedStore = Pick<
  AppStore,
  "config" | "dispatch" | "selectedItem" | "permissions" | "history" | "state"
>;

export const generateUseCrezlo = (store: PickedStore): UseCrezloStore => {
  const history: UseCrezloStore["history"] = {
    back: store.history.back,
    forward: store.history.forward,
    setHistories: store.history.setHistories,
    setHistoryIndex: store.history.setHistoryIndex,
    hasPast: store.history.hasPast(),
    hasFuture: store.history.hasFuture(),
    histories: store.history.histories,
    index: store.history.index,
  };

  const storeData: CrezloApi = {
    appState: makeStatePublic(store.state),
    config: store.config,
    dispatch: store.dispatch,
    getPermissions: store.permissions.getPermissions,
    refreshPermissions: store.permissions.refreshPermissions,
    history,
    selectedItem: store.selectedItem || null,
    getItemBySelector: (selector) => getItem(selector, store.state),
    getItemById: (id) => store.state.indexes.nodes[id].data,
    getSelectorForId: (id) => {
      const node = store.state.indexes.nodes[id];

      if (!node) return;

      const zoneCompound = `${node.parentId}:${node.zone}`;

      const index =
        store.state.indexes.zones[zoneCompound].contentIds.indexOf(id);

      return { zone: zoneCompound, index };
    },
  };

  const get = () => storeData;

  return { ...storeData, get };
};

export const UseCrezloStoreContext = createContext<StoreApi<UseCrezloStore> | null>(
  null
);

const convertToPickedStore = (store: AppStore): PickedStore => {
  return {
    state: store.state,
    config: store.config,
    dispatch: store.dispatch,
    permissions: store.permissions,
    history: store.history,
    selectedItem: store.selectedItem,
  };
};

/**
 * Mirror changes in appStore to useCrezloStore
 */
export const useRegisterUseCrezloStore = (
  appStore: ReturnType<typeof useAppStoreApi>
) => {
  const [useCrezloStore] = useState(() =>
    createStore(() =>
      generateUseCrezlo(convertToPickedStore(appStore.getState()))
    )
  );

  useEffect(() => {
    // Subscribe here isn't doing anything as selection isn't shallow
    return appStore.subscribe(
      (store) => convertToPickedStore(store),
      (pickedStore) => {
        useCrezloStore.setState(generateUseCrezlo(pickedStore));
      }
    );
  }, []);

  return useCrezloStore;
};

/**
 * createUseCrezlo
 *
 * Create a typed useCrezlo hook, which is necessary because the user may provide a generic type but not
 * a selector type, and TS does not currently support partial inference.
 * Related: https://github.com/microsoft/TypeScript/issues/26242
 *
 * @returns a typed useCrezlo function
 */
export function createUseCrezlo<UserConfig extends Config = Config>() {
  return function useCrezlo<T = CrezloApi<UserConfig>>(
    selector: (state: UseCrezloStore<UserConfig>) => T
  ): T {
    const useCrezloApi = useContext(UseCrezloStoreContext);

    if (!useCrezloApi) {
      throw new Error("useCrezlo must be used inside <Crezlo>.");
    }

    const result = useStore(
      useCrezloApi as unknown as StoreApi<UseCrezloStore<UserConfig>>,
      selector ?? ((s) => s as T)
    );

    return result;
  };
}

export function useCrezlo<UserConfig extends Config = Config>() {
  useEffect(() => {
    console.warn(
      "You're using the `useCrezlo` method without a selector, which may cause unnecessary re-renders. Replace with `createUseCrezlo` and provide a selector for improved performance."
    );
  }, []);

  return createUseCrezlo<UserConfig>()((s) => s);
}

/**
 * Get the latest state without relying on a render
 *
 * @returns CrezloApi
 */
export function useGetCrezlo() {
  const useCrezloApi = useContext(UseCrezloStoreContext);

  if (!useCrezloApi) {
    throw new Error("useCrezloGet must be used inside <Crezlo>.");
  }

  return useCrezloApi.getState;
}
