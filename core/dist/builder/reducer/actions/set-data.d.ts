import { Data } from "../../types";
import { SetDataAction } from "../actions";
import { AppStore } from "../../store";
import { PrivateAppState } from "../../types/Internal";
export declare const setDataAction: <UserData extends Data>(state: PrivateAppState<UserData>, action: SetDataAction, appStore: AppStore) => PrivateAppState<UserData>;
