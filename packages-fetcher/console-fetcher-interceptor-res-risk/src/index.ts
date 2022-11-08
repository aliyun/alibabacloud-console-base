import {
  ERROR_RISK_FORBIDDEN,
  ERROR_RISK_INVALID,
  ERROR_RISK_CANCELLED
} from '@alicloud/console-fetcher-risk-prompt';

import {
  intercept
} from './util';

export {
  ERROR_RISK_FORBIDDEN,
  ERROR_RISK_INVALID,
  ERROR_RISK_CANCELLED
};
export default intercept;

export type {
  IFetcherInterceptorConfig as FetcherInterceptorConfig
} from './types';
