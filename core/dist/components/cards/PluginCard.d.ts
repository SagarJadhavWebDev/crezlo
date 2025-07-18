import { ReactNode } from "react";
interface PluginCardProps {
    onCardClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    title: string;
    topRightIcon?: ReactNode;
    actions: ReactNode[];
    imageIcon?: ReactNode;
}
export declare const PluginCard: React.FC<PluginCardProps>;
export {};
