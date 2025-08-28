import { ReactNode } from "react";
type Suggestion = null | string;
type PublishFn = (newSuggestion: Suggestion) => void;
type HookShape = [suggestion: Suggestion, setSuggestion: PublishFn];
export declare function SharedAutocompleteContext({ children, }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare const useSharedAutocompleteContext: () => HookShape;
export {};
