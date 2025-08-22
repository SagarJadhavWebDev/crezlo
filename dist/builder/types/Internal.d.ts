import { Slot } from "./API";
import { AppState } from "./AppState";
import { ComponentData, Data } from "./Data";
import { DefaultComponentProps } from "./Props";
export type ZoneType = "root" | "dropzone" | "slot";
export type CrezloNodeData = {
    data: ComponentData;
    flatData: ComponentData;
    parentId: string | null;
    zone: string;
    path: string[];
};
export type CrezloZoneData = {
    contentIds: string[];
    type: ZoneType;
};
export type NodeIndex = Record<string, CrezloNodeData>;
export type ZoneIndex = Record<string, CrezloZoneData>;
export type PrivateAppState<UserData extends Data = Data> = AppState<UserData> & {
    indexes: {
        nodes: NodeIndex;
        zones: ZoneIndex;
    };
};
export type DefaultAllProps = Record<string, DefaultComponentProps>;
/**
 * Recursively walk T and replace Slots with SlotComponents
 */
export type WithDeepSlots<T, SlotType = T> = T extends Slot ? SlotType : T extends (infer U)[] ? Array<WithDeepSlots<U, SlotType>> : T extends (infer U)[] ? WithDeepSlots<U, SlotType>[] : T extends object ? {
    [K in keyof T]: WithDeepSlots<T[K], SlotType>;
} : T;
