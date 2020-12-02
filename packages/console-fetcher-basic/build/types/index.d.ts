import { ERROR_BIZ } from '@alicloud/console-fetcher-interceptor-res-biz';
import { IConsoleFetcherConfig as FetcherConfig, IConsoleFetcher as Fetcher, IConsoleFetcherInterceptorOptions as FetcherInterceptorOptions, IFnConsoleApi as FetcherFnOpenApi, IFnConsoleApi as FetcherFnInnerApi, IFnConsoleApi as FetcherFnContainerApi, IFnConsoleApiMulti as FetcherFnOpenApiMulti } from './types';
import createFetcher from './util/create-fetcher';
declare const fetcher: Fetcher<FetcherConfig>;
export * from '@alicloud/fetcher';
export default fetcher;
export { ERROR_BIZ, createFetcher };
export type { Fetcher, FetcherConfig, FetcherInterceptorOptions, FetcherFnOpenApi, FetcherFnInnerApi, FetcherFnContainerApi, FetcherFnOpenApiMulti };
