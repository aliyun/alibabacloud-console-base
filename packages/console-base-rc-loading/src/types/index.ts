import {
  HTMLAttributes
} from 'react';

import {
  ELoadingStatus
} from '../const';

interface IWithLoading<T> {
  messageLoading?: string | JSX.Element;
  messageError?: string | JSX.Element;
  messageErrorRetry?: string | JSX.Element;
  messageEmpty?: string | JSX.Element;
  retry?(): void;
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

export interface IPropsWithLoading<T> extends Partial<IDataWithLoading<T | null>>, IWithLoading<T> {}

export interface IPropsWithPromise<T> extends IWithLoading<T> {
  promise?: Promise<T> | null;
}
