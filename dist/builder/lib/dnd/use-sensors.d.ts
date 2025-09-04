import { PointerSensor } from "@dnd-kit/react";
import { type Distance } from "@dnd-kit/geometry";
export interface DelayConstraint {
    value: number;
    tolerance: Distance;
}
export interface DistanceConstraint {
    value: Distance;
    tolerance?: Distance;
}
export interface ActivationConstraints {
    distance?: DistanceConstraint;
    delay?: DelayConstraint;
}
export declare const useSensors: ({ other, mouse, touch, }?: {
    mouse?: ActivationConstraints;
    touch?: ActivationConstraints;
    other?: ActivationConstraints;
}) => import("@dnd-kit/abstract").PluginDescriptor<any, any, typeof PointerSensor>[];
