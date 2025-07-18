import { Data } from "../../types";
import { RemoveAction } from "../actions";
import { AppStore } from "../../store";
import { PrivateAppState } from "../../types/Internal";
export declare const removeAction: <UserData extends Data>(state: PrivateAppState<UserData>, action: RemoveAction, appStore: AppStore) => PrivateAppState<UserData>;
