import { CrezloAction } from "../../../reducer";
import { ComponentData, Config, Data, Slot, UiState } from "../../../types";
import { PrivateAppState } from "../../../types/Internal";
import { Reducer } from "react";
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
export declare const expectIndexed: (state: PrivateAppState, item: ComponentData | undefined, path: string[], index: number, _config?: Config) => void;
export declare const executeSequenceFactory: (reducer: Reducer<any, any>) => <UserData extends Data>(initialState: PrivateAppState<UserData>, actions: ((currentState: PrivateAppState<UserData>) => CrezloAction)[]) => PrivateAppState<UserData>;
export declare const testSetup: () => {
    reducer: (state: PrivateAppState, action: CrezloAction) => PrivateAppState<Data>;
    executeSequence: (initialState: PrivateAppState<UserData>, actions: ((currentState: PrivateAppState<UserData>) => CrezloAction)[]) => PrivateAppState<UserData>;
    config: UserConfig;
};
export {};
