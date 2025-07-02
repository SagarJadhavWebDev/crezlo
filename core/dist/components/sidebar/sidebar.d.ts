interface SubMenu {
    label: string;
    value: string;
    href?: string;
}
export interface MenuItem {
    label: string;
    value: string;
    href?: string;
    icon?: React.ReactNode;
    subMenu?: SubMenu[];
    badge?: string | number;
}
interface SidebarProps {
    variant?: "default" | "v2";
    menuItems: MenuItem[];
    logoUrl?: string;
    logoLabel?: string;
}
export default function Sidebar({ variant, menuItems, logoLabel, logoUrl, }: SidebarProps): import("react/jsx-runtime").JSX.Element;
export {};
