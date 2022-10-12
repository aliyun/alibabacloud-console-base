import {
  intercept
} from './util';

export default intercept;
export {
  ERROR_RISK_FORBIDDEN,
  ERROR_RISK_INVALID,
  ERROR_RISK_CANCELLED
} from './const';

export type {
  IFetcherInterceptorConfig as FetcherInterceptorConfig
} from './types';
