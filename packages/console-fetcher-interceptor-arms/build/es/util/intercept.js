import createInterceptorResponseFulfilled from './create-interceptor-response-fulfilled';
import createInterceptorResponseRejected from './create-interceptor-response-rejected';
/**
 * 为 fetcher 增加 arms 埋点
 */

export default function intercept(fetcher, interceptorConfig) {
  var interceptorFulfilled = createInterceptorResponseFulfilled(interceptorConfig);
  var interceptorRejected = createInterceptorResponseRejected(interceptorConfig);
  return fetcher.interceptResponse(interceptorFulfilled, interceptorRejected);
}