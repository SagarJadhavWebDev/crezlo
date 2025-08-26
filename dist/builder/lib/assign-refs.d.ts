export type Ref<ElementType = HTMLElement> = React.RefObject<ElementType | null> | React.ForwardedRef<ElementType | null> | ((element: ElementType | null) => void);
export declare function assignRef<ElementType = HTMLElement>(ref: Ref<ElementType>, node: ElementType | null): void;
export declare function assignRefs<ElementType = HTMLElement>(refs: Ref<ElementType>[], node: ElementType | null): void;
