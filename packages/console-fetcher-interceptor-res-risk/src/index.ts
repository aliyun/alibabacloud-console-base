import {
  Fetcher,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';

import {
  IRiskConfig as ConsoleFetcherRiskConfig
} from './types';
import {
  ERROR_RISK_FORBIDDEN,
  ERROR_RISK_INVALID,
  ERROR_RISK_CANCELLED
} from './const';
import createInterceptor from './util/create-interceptor';

export default function intercept(fetcher: Fetcher, o?: ConsoleFetcherRiskConfig): () => void {
  const interceptor: FetcherFnInterceptResponseRejected = createInterceptor(o);
  
  return fetcher.interceptResponse(undefined, interceptor);
}

export {
  ERROR_RISK_FORBIDDEN,
  ERROR_RISK_INVALID,
  ERROR_RISK_CANCELLED
};

export type {
  ConsoleFetcherRiskConfig
};
