import { Point } from "@dnd-kit/geometry";
import { Direction, DragAxis } from "../../../../types";
type Interval = {
    current: Point;
    delta: Point;
    previous: Point;
    direction: Direction;
};
/**
 * A method for tracking and getting the current movement interval, including:
 *
 * - `current` - the current point to track
 * - `previous` - the previous point, captured when the delta is greater than the INTERVAL_SENSITIVITY
 * - `delta` - the delta between the two points
 * - `direction` - the direction of travel of the delta, locked to an axis
 *
 * @param point The latest point to track.
 * @param dragAxis The axis to lock the direction to. If the value is "dynamic", it can be either axis based on the greater value.
 *
 * @returns Current movement interval
 */
export declare const trackMovementInterval: (point: Point, dragAxis?: DragAxis) => Interval;
export {};
