import * as ResizablePrimitive from "react-resizable-panels";
declare const ResizablePanelGroup: ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => import("react/jsx-runtime").JSX.Element;
declare const ResizablePanel: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<HTMLElement | HTMLIFrameElement | HTMLDivElement | HTMLButtonElement | HTMLSpanElement | HTMLAnchorElement | HTMLSlotElement | HTMLFieldSetElement | HTMLInputElement | HTMLFormElement | HTMLLabelElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableRowElement | HTMLTableCellElement | HTMLSelectElement | HTMLOptionElement | HTMLOptGroupElement | HTMLTextAreaElement | HTMLObjectElement | HTMLLinkElement | HTMLStyleElement | HTMLTitleElement | HTMLMapElement | HTMLMetaElement | HTMLParagraphElement | HTMLQuoteElement | HTMLProgressElement | HTMLDataElement | HTMLDialogElement | HTMLImageElement | HTMLMenuElement | HTMLScriptElement | HTMLSourceElement | HTMLBodyElement | HTMLTimeElement | HTMLPreElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLBRElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDListElement | HTMLEmbedElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLLegendElement | HTMLLIElement | HTMLMeterElement | HTMLOListElement | HTMLOutputElement | HTMLPictureElement | HTMLTemplateElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement>, "id" | "onResize"> & {
    className?: string;
    collapsedSize?: number | undefined;
    collapsible?: boolean | undefined;
    defaultSize?: number | undefined;
    id?: string;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    onCollapse?: ResizablePrimitive.PanelOnCollapse;
    onExpand?: ResizablePrimitive.PanelOnExpand;
    onResize?: ResizablePrimitive.PanelOnResize;
    order?: number;
    style?: object;
    tagName?: keyof HTMLElementTagNameMap | undefined;
} & {
    children?: import("react").ReactNode | undefined;
} & import("react").RefAttributes<ResizablePrimitive.ImperativePanelHandle>>;
declare const ResizableHandle: ({ withHandle, className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
    withHandle?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
