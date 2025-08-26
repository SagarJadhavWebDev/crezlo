import { RegisterZoneAction, UnregisterZoneAction } from "..";
import { Content, Data } from "../../types";
import { PrivateAppState } from "../../types/Internal";
export declare const zoneCache: Record<string, Content>;
export declare const addToZoneCache: (key: string, data: Content) => void;
export declare function registerZoneAction<UserData extends Data>(state: PrivateAppState<UserData>, action: RegisterZoneAction): PrivateAppState<UserData>;
export declare function unregisterZoneAction<UserData extends Data>(state: PrivateAppState<UserData>, action: UnregisterZoneAction): PrivateAppState<UserData>;
