import { CollisionType, DragOperation, Droppable } from "@dnd-kit/abstract";
import { Point } from "@dnd-kit/geometry";
/**
 * Collide if we're moving towards an item.
 */
export declare const directionalCollision: (input: {
    dragOperation: DragOperation;
    droppable: Droppable;
}, previous: Point) => {
    id: import("@dnd-kit/abstract").UniqueIdentifier;
    value: number;
    type: CollisionType;
};
