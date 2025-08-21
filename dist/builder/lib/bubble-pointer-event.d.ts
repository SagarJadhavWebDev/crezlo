export interface BubbledPointerEventType extends PointerEvent {
    originalTarget: EventTarget | null;
}
declare const BaseEvent: {
    new (type: string, eventInitDict?: PointerEventInit): PointerEvent;
    prototype: PointerEvent;
} | {
    new (type: string, eventInitDict?: EventInit): Event;
    prototype: Event;
    readonly NONE: 0;
    readonly CAPTURING_PHASE: 1;
    readonly AT_TARGET: 2;
    readonly BUBBLING_PHASE: 3;
};
export declare class BubbledPointerEvent extends BaseEvent {
    _originalTarget: EventTarget | null;
    constructor(type: string, data: PointerEvent & {
        originalTarget: EventTarget | null;
    });
    set originalTarget(target: EventTarget | null);
    get originalTarget(): EventTarget | null;
}
export {};
