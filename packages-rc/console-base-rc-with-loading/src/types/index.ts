import {
  ReactElement
} from 'react';

import {
  DataWithLoading
} from '@alicloud/console-base-helper-loading';

interface IRenderLoadedFn<T> {
  (data: T): JSX.Element;
}

interface IRenderEmptyFn {
  (renderEmptyDefault: () => JSX.Element): JSX.Element;
}

interface IRenderErrorFn {
  (err: Error | null | undefined, renderErrorDefault: () => JSX.Element): JSX.Element;
}

interface IWithLoadingBase<T> {
  messageLoading?: string | JSX.Element;
  messageEmpty?: string | JSX.Element;
  messageError?: string | JSX.Element;
  messageErrorRetry?: string | JSX.Element;
  isEmpty?(data: T): boolean;
  renderEmpty?: IRenderEmptyFn | ReactElement;
  renderLoaded: IRenderLoadedFn<T> | ReactElement;
  renderError?: IRenderErrorFn | ReactElement;
  retry?(times: number): void;
}

export interface IWithLoadingProps<T> extends Partial<DataWithLoading<T>>, IWithLoadingBase<T> {}

export interface IWithPromiseProps<T> extends IWithLoadingBase<T> {
  promise?: Promise<T> | null;
}
