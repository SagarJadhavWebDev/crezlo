import React, { HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/theme';
export interface ModalProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
    children: React.ReactNode;
    open: boolean;
    onClose?: () => void;
    closeOnBackdrop?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    backdrop?: 'blur-sm' | 'dark' | 'light';
    animation?: 'fade' | 'scale' | 'slide-up' | 'slide-down';
}
export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
export declare const ModalHeader: React.ForwardRefExoticComponent<ModalHeaderProps & React.RefAttributes<HTMLDivElement>>;
export declare const ModalTitle: React.ForwardRefExoticComponent<ModalTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export declare const ModalContent: React.ForwardRefExoticComponent<ModalContentProps & React.RefAttributes<HTMLDivElement>>;
export declare const ModalFooter: React.ForwardRefExoticComponent<ModalFooterProps & React.RefAttributes<HTMLDivElement>>;
