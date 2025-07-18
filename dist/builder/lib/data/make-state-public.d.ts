import { AppState, Data } from "../../types";
import { PrivateAppState } from "../../types/Internal";
export declare const makeStatePublic: <UserData extends Data>(state: PrivateAppState<UserData>) => AppState<UserData>;
