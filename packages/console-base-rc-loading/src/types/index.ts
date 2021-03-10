import {
  HTMLAttributes
} from 'react';

import {
  DataWithLoading
} from '@alicloud/console-base-common-typings';

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

export interface IPropsLoading extends HTMLAttributes<HTMLDivElement> {
  message?: string | JSX.Element;
  inline?: boolean;
  status?: TStatus;
  align?: TAlign;
  retry?(): void;
}

export interface IPropsWithLoading<T> extends Partial<DataWithLoading<T | null>>, IWithLoading<T> {}

export interface IPropsWithPromise<T> extends IWithLoading<T> {
  promise?: Promise<T> | null;
}
