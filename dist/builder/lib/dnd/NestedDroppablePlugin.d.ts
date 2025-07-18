import { DragDropManager } from "@dnd-kit/dom";
import { GlobalPosition } from "../global-position";
type NestedDroppablePluginOptions = {
    onChange: (params: {
        area: string | null;
        zone: string | null;
    }, manager: DragDropManager) => void;
};
export declare const findDeepestCandidate: (position: GlobalPosition, manager: DragDropManager) => {
    zone: string;
    area: any;
};
export declare const createNestedDroppablePlugin: ({ onChange }: NestedDroppablePluginOptions, id: string) => any;
export {};
