import { Data } from "../../types";
import { SetUiAction } from "../actions";
import { PrivateAppState } from "../../types/Internal";
export declare const setUiAction: <UserData extends Data>(state: PrivateAppState<UserData>, action: SetUiAction) => PrivateAppState<UserData>;
