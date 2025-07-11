export declare const useLocalStorage: <T>(key: string, initialValue: T) => readonly [T, (value: T | ((val: T) => T)) => void, () => void];
export declare const useDebounce: <T>(value: T, delay: number) => T;
export declare const useToggle: (initialValue?: boolean) => readonly [boolean, () => void, () => void, () => void];
