import { ERROR_BIZ } from './const';
import createInterceptor from './util/create-interceptor';
export default function intercept(fetcher) {
  var interceptor = createInterceptor();
  return fetcher.interceptResponse(interceptor);
}
export { ERROR_BIZ };