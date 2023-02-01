import {
  HTMLAttributes
} from 'react';

import {
  DataWithLoading
} from '@alicloud/console-base-helper-loading';

interface IWithLoadingBase<T> {
  messageLoading?: string | JSX.Element;
  messageError?: string | JSX.Element;
  messageErrorRetry?: string | JSX.Element;
  messageEmpty?: string | JSX.Element;
  retry?(times: number): void;
  isEmpty?(data: T): boolean;
  renderError?(err: Error | null | undefined, renderErrorDefault: () => JSX.Element): JSX.Element; // 如果 messageXx 等无法满足的情况，可以用它
  renderEmpty?(renderEmptyDefault: () => JSX.Element): JSX.Element; // 如果 messageXx 等无法满足的情况，可以用它
  renderLoaded(data: T): JSX.Element;
}

export type TStatus = 'loading' | 'error' | 'empty';
export type TAlign = 'l' | 'r' | 'c';

export interface IPropsLoading extends HTMLAttributes<HTMLDivElement> {
  message?: string | JSX.Element;
  inline?: boolean;
  status?: TStatus;
  align?: TAlign;
  retry?(times: number): void;
}

export interface IPropsWithLoading<T> extends Partial<DataWithLoading<T>>, IWithLoadingBase<T> {}

export interface IPropsWithPromise<T> extends IWithLoadingBase<T> {
  promise?: Promise<T> | null;
}
