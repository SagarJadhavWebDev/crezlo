import { CollisionDetector } from "@dnd-kit/abstract";
import { DragAxis } from "../../../../types";
/**
 * A factory for creating a "dynamic" collision detector
 *
 * A dynamic collision combines mid-point and directional collisions for smooth, flicker-free dragging with complex
 * layouts.
 *
 * Midpoint-based detection creates a natural snapping effect, inspired by react-beautiful-dnd. Each collision is
 * provided with the direction of movement, so the user can determine the appropriate place to inject the item based
 * on their layout or document direction.
 *
 * If a draggable is being dragged towards a droppable with the same ID, this is deemed the highest priority collision
 * to prevent flickering with complex layout shifts during drag.
 *
 * @param dragAxis Restrict mid-point detection to a given axis, providing a traditional sortable list detection.
 * @param midpointOffset A percentage offset from the midpoint. Defaults to 5% (0.05) from the mid-point in the
 * direction of travel, helping to create "dead zone" in the center of the item.
 *
 * @returns
 */
export declare const createDynamicCollisionDetector: (dragAxis: DragAxis, midpointOffset?: number) => CollisionDetector;
