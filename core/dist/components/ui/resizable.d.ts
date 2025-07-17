import * as ResizablePrimitive from "react-resizable-panels";
declare const ResizablePanelGroup: ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => import("react/jsx-runtime").JSX.Element;
declare const ResizablePanel: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<HTMLHtmlElement | HTMLElement | HTMLHeadElement | HTMLBodyElement | HTMLDivElement | HTMLAnchorElement | HTMLLIElement | HTMLImageElement | HTMLButtonElement | HTMLSpanElement | HTMLHeadingElement | HTMLUListElement | HTMLInputElement | HTMLLabelElement | HTMLParagraphElement | HTMLObjectElement | HTMLProgressElement | HTMLSelectElement | HTMLDataElement | HTMLLinkElement | HTMLSlotElement | HTMLStyleElement | HTMLTitleElement | HTMLTimeElement | HTMLTableElement | HTMLBaseElement | HTMLFormElement | HTMLDialogElement | HTMLOptionElement | HTMLAreaElement | HTMLAudioElement | HTMLQuoteElement | HTMLBRElement | HTMLCanvasElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLHRElement | HTMLIFrameElement | HTMLLegendElement | HTMLMapElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOutputElement | HTMLPreElement | HTMLScriptElement | HTMLSourceElement | HTMLTemplateElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTableRowElement | HTMLTrackElement | HTMLVideoElement | HTMLTableCaptionElement | HTMLMenuElement | HTMLPictureElement>, "id" | "onResize"> & {
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
