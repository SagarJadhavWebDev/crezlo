export interface MenuOption {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: 'default' | 'danger';
}
export default function EditMenu({ align, className, options, }: React.HTMLAttributes<HTMLDivElement> & {
    align?: 'left' | 'right';
    className?: string;
    options: MenuOption[];
}): import("react/jsx-runtime").JSX.Element;
