import { ComponentData } from "../../types";
import type { Fields } from "../../types";
import { AppStore, useAppStoreApi } from "../";
type ComponentOrRootData = Omit<ComponentData<any>, "type">;
export type FieldsSlice = {
    fields: Fields | Partial<Fields>;
    loading: boolean;
    lastResolvedData: Partial<ComponentOrRootData>;
    id: string | undefined;
};
export declare const createFieldsSlice: (_set: (newState: Partial<AppStore>) => void, _get: () => AppStore) => FieldsSlice;
export declare const useRegisterFieldsSlice: (appStore: ReturnType<typeof useAppStoreApi>, id?: string) => void;
export {};
