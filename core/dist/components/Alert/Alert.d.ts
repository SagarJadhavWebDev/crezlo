import React, { HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/theme';
export interface AlertProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
    children: React.ReactNode;
    title?: string;
    icon?: React.ReactNode;
    closable?: boolean;
    onClose?: () => void;
}
export interface AlertTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}
export interface AlertDescriptionProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
export declare const AlertTitle: React.ForwardRefExoticComponent<AlertTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export declare const AlertDescription: React.ForwardRefExoticComponent<AlertDescriptionProps & React.RefAttributes<HTMLDivElement>>;
