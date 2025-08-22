import { ReactNode } from "react";
export type HeadingProps = {
    children: ReactNode;
    rank?: "1" | "2" | "3" | "4" | "5" | "6";
    size?: "xxxxl" | "xxxl" | "xxl" | "xl" | "l" | "m" | "s" | "xs";
};
export declare const Heading: ({ children, rank, size }: HeadingProps) => import("react/jsx-runtime").JSX.Element;
