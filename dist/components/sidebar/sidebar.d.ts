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
    className?: string;
}
export interface Menu {
    name?: string;
    items: MenuItem[];
}
interface SidebarProps {
    variant?: "default" | "v2";
    menus: Menu[];
    logoUrl?: string;
    logoLabel?: string;
    marketPlaceMenu?: MarketPlaceMenuItem;
}
interface MarketPlaceMenuItem {
    value?: string;
    href?: string;
}
export default function Sidebar({ variant, menus, logoLabel, logoUrl, marketPlaceMenu, }: SidebarProps): import("react/jsx-runtime").JSX.Element;
export {};
