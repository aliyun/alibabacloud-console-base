import {
  Fetcher,
  FetcherFnInterceptResponseFulfilled
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtraBiz as FetcherConfigExtraBiz,
  IFetcherConfigExtendedBiz as FetcherConfigExtendedBiz
} from './types';
import {
  ERROR_BIZ
} from './const';
import createInterceptor from './util/create-interceptor';

export default function intercept(fetcher: Fetcher<FetcherConfigExtendedBiz>): () => void {
  const interceptor: FetcherFnInterceptResponseFulfilled = createInterceptor();
  
  return fetcher.interceptResponse(interceptor);
}

export {
  ERROR_BIZ
};

export type {
  FetcherConfigExtraBiz,
  FetcherConfigExtendedBiz
};
