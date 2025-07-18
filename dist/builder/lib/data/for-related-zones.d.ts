import { Content, Data } from "../../types";
export declare function forRelatedZones<UserData extends Data>(item: UserData["content"][0], data: UserData, cb: (path: string[], zoneCompound: string, content: Content) => void, path?: string[]): void;
