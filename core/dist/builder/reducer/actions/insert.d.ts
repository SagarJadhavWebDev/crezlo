import { Data } from "../../types";
import { InsertAction } from "../actions";
import { PrivateAppState } from "../../types/Internal";
import { AppStore } from "../../store";
export declare function insertAction<UserData extends Data>(state: PrivateAppState<UserData>, action: InsertAction, appStore: AppStore): PrivateAppState<UserData>;
