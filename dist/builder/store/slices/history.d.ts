import { AppState, History } from "../../types";
import { AppStore, useAppStoreApi } from "../";
export type HistorySlice<D = any> = {
    index: number;
    hasPast: () => boolean;
    hasFuture: () => boolean;
    histories: History<D>[];
    record: (data: D) => void;
    back: VoidFunction;
    forward: VoidFunction;
    currentHistory: () => History;
    nextHistory: () => History<D> | null;
    prevHistory: () => History<D> | null;
    setHistories: (histories: History[]) => void;
    setHistoryIndex: (index: number) => void;
    initialAppState: D;
};
export type CrezloHistory = {
    back: VoidFunction;
    forward: VoidFunction;
    setHistories: (histories: History[]) => void;
    setHistoryIndex: (index: number) => void;
    HistorySlice: HistorySlice;
};
export declare const createHistorySlice: (set: (newState: Partial<AppStore>) => void, get: () => AppStore) => HistorySlice;
export declare function useRegisterHistorySlice(appStore: ReturnType<typeof useAppStoreApi>, { histories, index, initialAppState, }: {
    histories: History<any>[];
    index: number;
    initialAppState: AppState;
}): void;
