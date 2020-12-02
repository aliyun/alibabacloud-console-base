import { HTMLAttributes } from 'react';
import { DataWithLoading } from '@alicloud/console-base-common-typings';
interface IWithLoading<T> {
    messageLoading?: string | JSX.Element;
    messageError?: string | JSX.Element;
    messageErrorRetry?: string | JSX.Element;
    messageEmpty?: string | JSX.Element;
    renderLoaded(data: T): JSX.Element;
    retry?(): void;
}
export declare type TStatus = 'loading' | 'error' | 'empty';
export declare type TAlign = 'l' | 'r' | 'c';
export interface IPropsLoading extends HTMLAttributes<HTMLDivElement> {
    message?: string | JSX.Element;
    inline?: boolean;
    status?: TStatus;
    align?: TAlign;
    retry?(): void;
}
export interface IPropsWithLoading<T> extends DataWithLoading<T>, IWithLoading<T> {
}
export interface IPropsWithPromise<T> extends IWithLoading<T> {
    promise?: Promise<T> | null;
}
export {};
