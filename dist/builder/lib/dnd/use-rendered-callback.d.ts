import { DependencyList } from "react";
/**
 * Returns a callback that only triggers when dnd-kit has finished
 * rendering. This is useful when working with state managers
 * that operate outside of the React lifecycle, like Zustand, as
 * dnd-kit cannot defer the rendering until it's finished.
 *
 * This may change in a future release
 *
 * @param callback
 * @param deps
 * @returns
 */
export declare function useRenderedCallback<T extends Function>(callback: T, deps: DependencyList): (...args: any) => Promise<any>;
