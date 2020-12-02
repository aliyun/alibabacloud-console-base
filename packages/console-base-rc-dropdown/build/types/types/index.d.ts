export declare type TBodyPadding = 'both' | 'top' | 'bottom' | 'none';
export interface IPropsTheDrop {
    header?: string | JSX.Element;
    body?: string | JSX.Element;
    footer?: string | JSX.Element;
    align?: 'left' | 'right';
    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    zIndex?: number;
    offset?: [number, number];
    bodyPadding?: TBodyPadding;
    dropContainer?: 'inside' | 'body';
}
export interface IPropsDropdown extends IPropsTheDrop {
    trigger: string | JSX.Element;
    block?: boolean;
    visible?: boolean;
    onEsc?(): void;
    onNavUp?(): void;
    onNavDown?(): void;
    onVisibleChange?(value: boolean): void;
}
