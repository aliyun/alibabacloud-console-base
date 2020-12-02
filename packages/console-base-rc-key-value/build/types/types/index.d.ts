import { HTMLAttributes, ReactNode } from 'react';
export interface IItem {
    key?: string;
    k: string | JSX.Element;
    v: ReactNode;
    col?: 1 | 2 | 3;
    vertical?: boolean;
}
export declare type TItems = {
    [k: string]: ReactNode;
} | (IItem | null)[];
export interface IProps extends HTMLAttributes<HTMLDivElement> {
    o: TItems;
    ignoreEmpty?: boolean;
    wrapValue?: boolean;
}
