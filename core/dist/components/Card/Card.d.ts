import React, { HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/theme';
export interface CardProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
    children: React.ReactNode;
    padding?: boolean;
    shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'soft' | 'medium' | 'hard';
}
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}
export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
export declare const CardTitle: React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export declare const CardDescription: React.ForwardRefExoticComponent<CardDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
export declare const CardContent: React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>;
export declare const CardFooter: React.ForwardRefExoticComponent<CardFooterProps & React.RefAttributes<HTMLDivElement>>;
