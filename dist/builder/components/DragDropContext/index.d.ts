import { ReactNode } from "react";
import { DragDropManager } from "@dnd-kit/dom";
import { DragDropEvents } from "@dnd-kit/abstract";
import type { Draggable, Droppable } from "@dnd-kit/dom";
type Events = DragDropEvents<Draggable, Droppable, DragDropManager>;
type EventKeys = keyof Events;
export declare function useDragListener(type: EventKeys, fn: Events[EventKeys], deps?: any[]): void;
type DragDropContextProps = {
    children: ReactNode;
    disableAutoScroll?: boolean;
};
export declare const DragDropContext: ({ children, disableAutoScroll, }: DragDropContextProps) => string | number | bigint | boolean | Iterable<ReactNode> | Promise<import("react").AwaitedReactNode> | import("react/jsx-runtime").JSX.Element;
export {};
