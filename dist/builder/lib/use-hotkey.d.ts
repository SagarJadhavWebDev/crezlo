declare const keys: readonly ["ctrl", "meta", "shift", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
type KeyStrict = (typeof keys)[number];
type KeyMapStrict = Partial<Record<KeyStrict, boolean>>;
export declare const monitorHotkeys: (doc: Document) => () => void;
export declare const useMonitorHotkeys: () => void;
export declare const useHotkey: (combo: KeyMapStrict, cb: Function) => void;
export {};
