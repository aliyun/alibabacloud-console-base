import { ERROR_RISK_FORBIDDEN, ERROR_RISK_INVALID, ERROR_RISK_CANCELLED } from '@alicloud/console-fetcher-interceptor-res-risk';
import { IConsoleFetcherInterceptorOptions as FetcherInterceptorOptions } from './types';
import createFetcher from './util/create-fetcher';
declare const fetcher: import("@alicloud/console-fetcher-basic").Fetcher<import("@alicloud/console-fetcher-basic").FetcherConfig>;
export * from '@alicloud/console-fetcher-basic';
export default fetcher;
export { ERROR_RISK_FORBIDDEN, ERROR_RISK_INVALID, ERROR_RISK_CANCELLED, createFetcher };
export type { FetcherInterceptorOptions };
