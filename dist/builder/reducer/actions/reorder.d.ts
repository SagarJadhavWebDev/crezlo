import { Data } from "../../types";
import { ReorderAction } from "../actions";
import { PrivateAppState } from "../../types/Internal";
import { AppStore } from "../../store";
export declare const reorderAction: <UserData extends Data>(state: PrivateAppState<UserData>, action: ReorderAction, appStore: AppStore) => PrivateAppState<UserData>;
