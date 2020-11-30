import {
  ERROR_RISK_FORBIDDEN,
  ERROR_RISK_INVALID,
  ERROR_RISK_CANCELLED
} from '@alicloud/console-fetcher-interceptor-res-risk';

import {
  IConsoleFetcherInterceptorOptions as FetcherInterceptorOptions
} from './types';
import createFetcher from './util/create-fetcher';

const fetcher = createFetcher();

fetcher.sealInterceptors();

export * from '@alicloud/console-fetcher-basic';

export default fetcher;

export {
  ERROR_RISK_FORBIDDEN,
  ERROR_RISK_INVALID,
  ERROR_RISK_CANCELLED,
  createFetcher
};

export type {
  // 修改 @alicloud/console-fetcher-basic 中的类型
  FetcherInterceptorOptions
};

