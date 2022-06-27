import {
  HTMLAttributes
} from 'react';

import {
  ELoadingStatus
} from '../enum';

interface IWithLoadingBase<T> {
  messageLoading?: string | JSX.Element;
  messageError?: string | JSX.Element;
  messageErrorRetry?: string | JSX.Element;
  messageEmpty?: string | JSX.Element;
  retry?(): void;
  isEmpty?(data: T): boolean;
  renderError?(err: Error | undefined, renderErrorDefault: () => JSX.Element): JSX.Element; // 如果 messageXx 等无法满足的情况，可以用它
  renderEmpty?(renderEmptyDefault: () => JSX.Element): JSX.Element; // 如果 messageXx 等无法满足的情况，可以用它
  renderLoaded(data: T): JSX.Element;
}

export type TStatus = 'loading' | 'error' | 'empty';
export type TAlign = 'l' | 'r' | 'c';

/**
 * 带加载状态的数据
 */
export interface IDataWithLoading<T> {
  loading: ELoadingStatus;
  data: T;
  error?: Error;
}

export interface IPropsLoading extends HTMLAttributes<HTMLDivElement> {
  message?: string | JSX.Element;
  inline?: boolean;
  status?: TStatus;
  align?: TAlign;
  retry?(): void;
}

export interface IPropsWithLoading<T> extends Partial<IDataWithLoading<T | null>>, IWithLoadingBase<T> {}

export interface IPropsWithPromise<T> extends IWithLoadingBase<T> {
  promise?: Promise<T> | null;
}
