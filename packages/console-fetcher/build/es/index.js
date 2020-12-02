import { ERROR_RISK_FORBIDDEN, ERROR_RISK_INVALID, ERROR_RISK_CANCELLED } from '@alicloud/console-fetcher-interceptor-res-risk';
import createFetcher from './util/create-fetcher';
var fetcher = createFetcher();
fetcher.sealInterceptors();
export * from '@alicloud/console-fetcher-basic';
export default fetcher;
export { ERROR_RISK_FORBIDDEN, ERROR_RISK_INVALID, ERROR_RISK_CANCELLED, createFetcher };