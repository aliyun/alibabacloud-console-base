import createInterceptor from './create-interceptor';
export default function intercept(fetcher, interceptorConfig) {
  var interceptorRejected = createInterceptor(interceptorConfig);
  return fetcher.interceptResponse(undefined, interceptorRejected);
}