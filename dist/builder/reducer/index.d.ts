import { Reducer } from "react";
import { AppState, Data } from "../types";
import { CrezloAction } from "./actions";
import type { OnAction } from "../types";
import { AppStore } from "../store";
import { PrivateAppState } from "../types/Internal";
export * from "./actions";
export type ActionType = "insert" | "reorder";
export type StateReducer<UserData extends Data = Data> = Reducer<PrivateAppState<UserData>, CrezloAction>;
export declare function createReducer<UserData extends Data>({ record, onAction, appStore, }: {
    record?: (appState: AppState<UserData>) => void;
    onAction?: OnAction<UserData>;
    appStore: AppStore;
}): StateReducer<UserData>;
