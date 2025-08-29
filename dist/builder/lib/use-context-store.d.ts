import { Context } from "react";
import { StoreApi } from "zustand";
type ExtractState<S> = S extends {
    getState: () => infer T;
} ? T : never;
/**
 * Use a Zustand store via context
 */
export declare function useContextStore<T, U>(context: Context<StoreApi<T>>, selector: (s: ExtractState<StoreApi<T>>) => U): U;
export {};
