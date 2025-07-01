import React, { HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/theme';
export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
    children: React.ReactNode;
    dot?: boolean;
    outline?: boolean;
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
