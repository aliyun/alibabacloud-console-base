import { HTMLAttributes } from 'react';
import { EIconType } from '../const';
export declare type TIconType = keyof typeof EIconType;
export interface IPropsIcon extends HTMLAttributes<HTMLElement> {
    type: TIconType;
    rotate?: number;
}
