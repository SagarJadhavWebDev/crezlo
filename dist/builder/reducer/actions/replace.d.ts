import { Data } from "../../types";
import { ReplaceAction } from "../actions";
import { AppStore } from "../../store";
import { PrivateAppState } from "../../types/Internal";
export declare const replaceAction: <UserData extends Data>(state: PrivateAppState<UserData>, action: ReplaceAction<UserData>, appStore: AppStore) => PrivateAppState<UserData>;
