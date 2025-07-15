import React, { ReactNode } from "react";
type Tab = {
    label: string;
    key: string;
};
type DynamicTabsProps = {
    tabs: Tab[];
    children: ReactNode[];
};
declare const DynamicTabs: React.FC<DynamicTabsProps>;
export default DynamicTabs;
