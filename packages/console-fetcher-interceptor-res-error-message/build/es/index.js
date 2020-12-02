import createInterceptor from './util/create-interceptor';
export default function intercept(fetcher) {
  var interceptor = createInterceptor();
  return fetcher.interceptResponse(undefined, interceptor);
}