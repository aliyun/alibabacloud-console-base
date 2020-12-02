import { HTMLAttributes, MouseEvent } from 'react';
import { ButtonProps } from '@alicloud/console-base-rc-button';
import { EDialogMode, EDialogSize } from '../const';
export declare type TStringOrJSX = string | JSX.Element;
export declare type TDialogData = Record<string, unknown>;
/**
 * 标题、按钮等可以根据 dialogData 进行动态控制
 */
export declare type TDynamicByData<T = void, D = TDialogData> = T | ((dialogData: D) => T);
/**
 * button.onClick 方法定义，可以返回 false 阻止 Dialog 关闭（默认行为是点击后关闭）
 */
export declare type TFnButtonOnClick<T = void, D = TDialogData> = (dialog: IContextForContent<T, D>, e: MouseEvent<HTMLElement>) => boolean | void;
/**
 * Dialog props.onClose 方法定义，value 的类型为 Promise resolve 的类型
 */
export declare type TFnDialogOnClose<T = void> = (result?: T, rejected?: boolean) => void;
export declare type TFnCloseWithResult<T = void> = (result?: T | Error, rejected?: boolean) => void;
export declare type TDispatchLock = (loading?: boolean) => void;
export declare type TDispatchUpdateProps<T = void, D = TDialogData> = (propsUpdates: Partial<IDialogPropsMutable<T, D>>) => void;
export declare type TDispatchUpdateData<D = TDialogData> = (dataUpdates: Partial<D>) => void;
export interface IContextForContent<T = void, D = TDialogData> {
    data: D;
    focus(): void;
    resetScrollTop(): void;
    unlock(): void;
    lock: TDispatchLock;
    update: TDispatchUpdateProps<T, D>;
    updateData: TDispatchUpdateData<D>;
    close: TFnCloseWithResult<T>;
}
export interface IDialogButtonProps<T = void, D = TDialogData> extends Omit<ButtonProps, 'spm' | 'onClick'> {
    spm?: string;
    primary?: boolean;
    result?: TDynamicByData<T, D>;
    onClick?: TFnButtonOnClick<T, D>;
}
export declare type TDialogButton<T = void, D = TDialogData> = TStringOrJSX | IDialogButtonProps<T, D>;
/**
 * Dialog props 定义
 */
export interface IDialogProps<T = void, D = TDialogData> extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: TDynamicByData<TStringOrJSX, D>;
    buttons?: TDynamicByData<TDialogButton<T, D>[], D>;
    content?: TStringOrJSX;
    mode?: EDialogMode | 'normal' | 'slide';
    size?: number | EDialogSize | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'auto' | 'almost-full';
    classNameOnBody?: string;
    backdrop?: boolean;
    closable?: boolean;
    esc?: boolean | number;
    externalClose?: boolean | number;
    zIndex?: number;
    zIndexBackdrop?: number;
    data?: D;
    undefinedAsReject?: boolean;
    onClose?: TFnDialogOnClose<T>;
}
/**
 * 可以由内容组件控制并调整的 props，除了 content 之外，几乎所有都可以修改
 */
export interface IDialogPropsMutable<T = void, D = TDialogData> extends Omit<IDialogProps<T, D>, 'content' | 'data'> {
}
/**
 * 用于 alert/confirm/prompt 的 props
 */
export declare type TDialogPropsForAlts<T = void, D = TDialogData> = Omit<IDialogProps<T, D>, 'content' | 'buttons' | 'mode' | 'backdrop' | 'esc' | 'zIndex' | 'zIndexBackdrop'>;
export interface IDialogPropsAlert extends TDialogPropsForAlts {
    title?: TStringOrJSX;
    content: TStringOrJSX;
}
export interface IDialogPropsConfirm extends TDialogPropsForAlts<boolean> {
    title?: TStringOrJSX;
    content: TStringOrJSX;
}
export interface IDialogPropsPrompt<D = TDialogData> extends TDialogPropsForAlts<string, D> {
    title?: TStringOrJSX;
}
export interface IDialogIndirectPromise<T = void, D = TDialogData> {
    renderUpdate(changedProps: Partial<IDialogProps<T, D>>): void;
    close(result?: T | Error, rejected?: boolean): void;
    promise: Promise<T>;
}
