import {
  ERROR_BIZ
} from '@alicloud/console-fetcher-interceptor-res-biz';

import {
  IConsoleFetcherConfig as FetcherConfig,
  IConsoleFetcher as Fetcher,
  IConsoleFetcherInterceptorOptions as FetcherInterceptorOptions,
  IConsoleApiOptions as FetcherConsoleApiOptions,
  IFnConsoleApi as FetcherFnOpenApi,
  IFnConsoleApi as FetcherFnInnerApi,
  IFnConsoleApi as FetcherFnContainerApi,
  IFnConsoleApiMulti as FetcherFnOpenApiMulti
} from './types';
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
  Fetcher,
  FetcherConfig,
  // 新增类型
  FetcherInterceptorOptions,
  FetcherConsoleApiOptions,
  FetcherFnOpenApi,
  FetcherFnInnerApi,
  FetcherFnContainerApi,
  FetcherFnOpenApiMulti
};
