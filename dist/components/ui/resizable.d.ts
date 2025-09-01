import * as ResizablePrimitive from "react-resizable-panels";
declare const ResizablePanelGroup: ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => import("react/jsx-runtime").JSX.Element;
declare const ResizablePanel: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<HTMLInputElement | HTMLElement | HTMLDivElement | HTMLLabelElement | HTMLSpanElement | HTMLSelectElement | HTMLTextAreaElement | HTMLUListElement | HTMLLIElement | HTMLButtonElement | HTMLStyleElement | HTMLOptionElement | HTMLOptGroupElement | HTMLHeadingElement | HTMLAnchorElement | HTMLImageElement | HTMLObjectElement | HTMLFormElement | HTMLSlotElement | HTMLTitleElement | HTMLLinkElement | HTMLTimeElement | HTMLDialogElement | HTMLTableElement | HTMLProgressElement | HTMLMapElement | HTMLDataElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLCanvasElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLLegendElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOutputElement | HTMLParagraphElement | HTMLPreElement | HTMLScriptElement | HTMLSourceElement | HTMLTemplateElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTableRowElement | HTMLTrackElement | HTMLVideoElement | HTMLMenuElement | HTMLTableCaptionElement | HTMLPictureElement>, "id" | "onResize"> & {
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
