import { ComponentData, Config, Content, Fields, RootData, SlotField } from "../../types";
type MapFn<T = any> = (data: Content, parentId: string, propName: string, field: SlotField, propPath: string) => T;
type PromiseMapFn = MapFn<Promise<any>>;
type EitherMapFn = MapFn<any | Promise<any>>;
type WalkFieldOpts = {
    value: unknown;
    fields: Fields;
    map: EitherMapFn;
    propKey?: string;
    propPath?: string;
    id?: string;
    config: Config;
    recurseSlots?: boolean;
};
export declare const walkField: ({ value, fields, map, propKey, propPath, id, config, recurseSlots, }: WalkFieldOpts) => any | Promise<any>;
export declare function mapSlots<T extends ComponentData | RootData>(item: T, map: MapFn, config: Config, recurseSlots?: boolean): T;
export declare function mapSlots<T extends ComponentData | RootData>(item: T, map: PromiseMapFn, config: Config, recurseSlots?: boolean): Promise<T>;
export {};
