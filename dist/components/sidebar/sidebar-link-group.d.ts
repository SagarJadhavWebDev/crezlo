interface SidebarLinkGroupProps {
    children: (handleClick: () => void, openGroup: boolean) => React.ReactNode;
    open?: boolean;
}
export default function SidebarLinkGroup({ children, open }: SidebarLinkGroupProps): import("react/jsx-runtime").JSX.Element;
export {};
