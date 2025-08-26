import { Data } from "../../types";
import { SetAction } from "../actions";
import { AppStore } from "../../store";
import { PrivateAppState } from "../../types/Internal";
export declare const setAction: <UserData extends Data>(state: PrivateAppState<UserData>, action: SetAction<UserData>, appStore: AppStore) => PrivateAppState<UserData>;
