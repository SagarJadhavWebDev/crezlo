import { Data } from "../../types";
type WithZones<T extends Data> = T & {
    zones: NonNullable<T["zones"]>;
};
export declare const setupZone: <UserData extends Data>(data: UserData, zoneKey: string) => Required<WithZones<UserData>>;
export {};
