import { Data } from "../../types";
import { DuplicateAction } from "../actions";
import { PrivateAppState } from "../../types/Internal";
import { AppStore } from "../../store";
export declare function duplicateAction<UserData extends Data>(state: PrivateAppState<UserData>, action: DuplicateAction, appStore: AppStore): PrivateAppState<UserData>;
