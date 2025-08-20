import * as ResizablePrimitive from "react-resizable-panels";
declare const ResizablePanelGroup: ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => import("react/jsx-runtime").JSX.Element;
declare const ResizablePanel: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<HTMLElement | HTMLInputElement | HTMLDivElement | HTMLStyleElement | HTMLSpanElement | HTMLSelectElement | HTMLTextAreaElement | HTMLIFrameElement | HTMLButtonElement | HTMLAnchorElement | HTMLSlotElement | HTMLFieldSetElement | HTMLFormElement | HTMLLabelElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableRowElement | HTMLTableCellElement | HTMLOptionElement | HTMLOptGroupElement | HTMLObjectElement | HTMLMenuElement | HTMLLinkElement | HTMLDataElement | HTMLDialogElement | HTMLImageElement | HTMLTitleElement | HTMLTimeElement | HTMLProgressElement | HTMLMapElement | HTMLMetaElement | HTMLParagraphElement | HTMLQuoteElement | HTMLScriptElement | HTMLSourceElement | HTMLBodyElement | HTMLPreElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLBRElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDListElement | HTMLEmbedElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLLegendElement | HTMLLIElement | HTMLMeterElement | HTMLOListElement | HTMLOutputElement | HTMLPictureElement | HTMLTemplateElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement>, "id" | "onResize"> & {
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
