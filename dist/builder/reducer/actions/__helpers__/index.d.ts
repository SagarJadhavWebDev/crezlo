import { Config, Data, Slot, UiState } from "../../../types";
import { PrivateAppState } from "../../../types/Internal";
type Props = {
    Comp: {
        prop: string;
        slot: Slot;
    };
    CompWithDefaults: {
        prop: string;
        slot: Slot;
    };
};
type RootProps = {
    title: string;
    slot: Slot;
};
export type UserConfig = Config<Props, RootProps>;
export type UserData = Data<Props, RootProps>;
export declare const dzZoneCompound = "my-component:zone1";
export declare const defaultData: UserData;
export declare const defaultUi: UiState;
export declare const defaultIndexes: PrivateAppState<UserData>["indexes"];
export declare const defaultState: {
    data: UserData;
    ui: UiState;
    indexes: {
        nodes: import("../../../types/Internal").NodeIndex;
        zones: import("../../../types/Internal").ZoneIndex;
    };
};
export declare const appStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<import("../../../store").AppStore<Config, import("../../..").UserGenerics<Config>>>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: import("../../../store").AppStore<Config, import("../../..").UserGenerics<Config>>, previousSelectedState: import("../../../store").AppStore<Config, import("../../..").UserGenerics<Config>>) => void): () => void;
        <U>(selector: (state: import("../../../store").AppStore<Config, import("../../..").UserGenerics<Config>>) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: (a: U, b: U) => boolean;
            fireImmediately?: boolean;
        }): () => void;
    };
}>;
export {};
