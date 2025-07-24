import { ReactNode, RefObject } from "react";
export type AutoFrameProps = {
    children: ReactNode;
    className: string;
    debug?: boolean;
    id?: string;
    onReady?: () => void;
    onNotReady?: () => void;
    frameRef: RefObject<HTMLIFrameElement | null>;
};
type AutoFrameContext = {
    document?: Document;
    window?: Window;
};
export declare const autoFrameContext: import("react").Context<AutoFrameContext>;
export declare const useFrame: () => AutoFrameContext;
declare function AutoFrame({ children, className, debug, id, onReady, onNotReady, frameRef, ...props }: AutoFrameProps): import("react/jsx-runtime").JSX.Element;
declare namespace AutoFrame {
    var displayName: string;
}
export default AutoFrame;
