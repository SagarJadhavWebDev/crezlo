import { Content, Data } from "../../types";
import { MoveAction } from "../actions";
import { AppStore } from "../../store";
import { PrivateAppState } from "../../types/Internal";
export declare const zoneCache: Record<string, Content>;
export declare const addToZoneCache: (key: string, data: Content) => void;
export declare const moveAction: <UserData extends Data>(state: PrivateAppState<UserData>, action: MoveAction, appStore: AppStore) => PrivateAppState<UserData>;
