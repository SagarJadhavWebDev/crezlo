import { PropsWithChildren, ReactNode } from "react";
import "./styles.css";
export declare const SortableProvider: ({ children, onDragStart, onDragEnd, onMove, }: PropsWithChildren<{
    onDragStart: (id: string) => void;
    onDragEnd: () => void;
    onMove: (moveData: {
        source: number;
        target: number;
    }) => void;
}>) => import("react/jsx-runtime").JSX.Element;
export declare const Sortable: ({ id, index, disabled, children, type, }: {
    id: string;
    index: number;
    disabled?: boolean;
    children: (props: {
        isDragging: boolean;
        isDropping: boolean;
        ref: (element: Element | null) => void;
        handleRef: (element: Element | null) => void;
    }) => ReactNode;
    type?: string;
}) => ReactNode;
