import {
  ERROR_BIZ
} from '@alicloud/console-fetcher-interceptor-res-biz';

import createFetcher from './factory';

const fetcher = createFetcher();

fetcher.sealInterceptors();

// eslint-disable-next-line import/export
export * from '@alicloud/fetcher';

export default fetcher;

export {
  ERROR_BIZ,
  // eslint-disable-next-line import/export
  createFetcher // 覆盖 @alicloud/fetcher 的 createFetcher
};

export type {
  // 覆盖 @alicloud/fetcher 中的类型
  // eslint-disable-next-line import/export
  IConsoleFetcherConfig as FetcherConfig,
  // eslint-disable-next-line import/export
  IConsoleFetcher as Fetcher,
  // 新增类型
  IConsoleFetcherInterceptorOptions as FetcherInterceptorOptions,
  IConsoleApiOptions as FetcherConsoleApiOptions,
  IFnConsoleApi as FetcherFnOpenApi,
  IFnConsoleApi as FetcherFnInnerApi,
  IFnConsoleApi as FetcherFnContainerApi,
  IFnConsoleApiMultiLegacy as FetcherFnOpenApiMulti,
  IConsoleApiMultiAction as FetcherOpenApiMultiAction
} from './types';
