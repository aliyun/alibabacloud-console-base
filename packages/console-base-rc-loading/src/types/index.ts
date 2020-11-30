import {
  HTMLAttributes
} from 'react';

import {
  DataWithLoading
} from '@alicloud/console-base-common-typings';

export type TStatus = 'loading' | 'error' | 'empty';
export type TAlign = 'l' | 'r' | 'c';

export interface IPropsLoading extends HTMLAttributes<HTMLDivElement> {
  message?: string | JSX.Element;
  inline?: boolean;
  status?: TStatus;
  align?: TAlign;
  retry?(): void;
}

export interface IPropsWithLoading<T> extends DataWithLoading<T> {
  messageLoading?: string | JSX.Element;
  messageError?: string | JSX.Element;
  messageErrorRetry?: string | JSX.Element;
  messageEmpty?: string | JSX.Element;
  renderLoaded(data: T): JSX.Element;
  retry?(): void;
}
