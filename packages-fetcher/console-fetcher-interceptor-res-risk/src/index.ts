import type {
  IFetcherInterceptorConfig
} from './types';
import intercept from './intercept';

export default intercept;
export {
  ERROR_RISK_FORBIDDEN,
  ERROR_RISK_INVALID,
  ERROR_RISK_CANCELLED
} from './const';

export type {
  IFetcherInterceptorConfig as FetcherInterceptorConfig
};
