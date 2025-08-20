import { Data } from "../../types";
import { ReplaceRootAction } from "../actions";
import { AppStore } from "../../store";
import { PrivateAppState } from "../../types/Internal";
export declare const replaceRootAction: <UserData extends Data>(state: PrivateAppState<UserData>, action: ReplaceRootAction<UserData>, appStore: AppStore) => PrivateAppState<UserData>;
