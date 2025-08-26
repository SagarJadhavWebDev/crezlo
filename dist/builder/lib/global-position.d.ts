interface Position {
    x: number;
    y: number;
}
export declare class GlobalPosition {
    target: Element;
    original: Position;
    private scaleFactor;
    private frameEl;
    private frameRect;
    constructor(target: Element, original: Position);
    get x(): number;
    get y(): number;
    get global(): Position;
    get frame(): Position;
}
export {};
