import { ERROR_RISK_FORBIDDEN, ERROR_RISK_INVALID, ERROR_RISK_CANCELLED } from './const';
import createInterceptor from './util/create-interceptor';
export default function intercept(fetcher, o) {
  var interceptor = createInterceptor(o);
  return fetcher.interceptResponse(undefined, interceptor);
}
export { ERROR_RISK_FORBIDDEN, ERROR_RISK_INVALID, ERROR_RISK_CANCELLED };