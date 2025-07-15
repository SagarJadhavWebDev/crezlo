'use strict';

var react = require('react');

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = react.useState(() => {
        if (typeof window === 'undefined')
            return initialValue;
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });
    const setValue = react.useCallback((value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        }
        catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, storedValue]);
    const removeValue = react.useCallback(() => {
        try {
            setStoredValue(initialValue);
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem(key);
            }
        }
        catch (error) {
            console.warn(`Error removing localStorage key "${key}":`, error);
        }
    }, [key, initialValue]);
    return [storedValue, setValue, removeValue];
};
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = react.useState(value);
    react.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
};
const useToggle = (initialValue = false) => {
    const [value, setValue] = react.useState(initialValue);
    const toggle = react.useCallback(() => setValue(prev => !prev), []);
    const setTrue = react.useCallback(() => setValue(true), []);
    const setFalse = react.useCallback(() => setValue(false), []);
    return [value, toggle, setTrue, setFalse];
};

exports.useDebounce = useDebounce;
exports.useLocalStorage = useLocalStorage;
exports.useToggle = useToggle;
//# sourceMappingURL=index.js.map
