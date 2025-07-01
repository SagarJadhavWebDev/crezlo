import React, { HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/theme';
export interface SpinnerProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
    speed?: 'slow' | 'normal' | 'fast';
    thickness?: 'thin' | 'normal' | 'thick';
}
export declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLDivElement>>;
