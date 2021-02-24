import {
  ERROR_BIZ
} from '@alicloud/console-fetcher-interceptor-res-biz';

import createFetcher from './util/create-fetcher';

const fetcher = createFetcher();

fetcher.sealInterceptors();

export * from '@alicloud/fetcher';

export default fetcher;

export {
  ERROR_BIZ,
  createFetcher
};

export type {
  // 覆盖 @alicloud/fetcher 中的类型
  IConsoleFetcherConfig as FetcherConfig,
  IConsoleFetcher as Fetcher,
  // 新增类型
  IConsoleFetcherInterceptorOptions as FetcherInterceptorOptions,
  IConsoleApiOptions as FetcherConsoleApiOptions,
  IFnConsoleApi as FetcherFnOpenApi,
  IFnConsoleApi as FetcherFnInnerApi,
  IFnConsoleApi as FetcherFnContainerApi,
  IFnConsoleApiMulti as FetcherFnOpenApiMulti,
  IConsoleApiMultiAction as FetcherOpenApiMultiAction
} from './types';
