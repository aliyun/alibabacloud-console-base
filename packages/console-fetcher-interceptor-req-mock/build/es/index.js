import createInterceptor from './util/create-interceptor';
/**
 * 利用 mocks.alibaba-inc.com 对接口（OneConsole 和 非 OneConsole 接口）进行，可通过 options 参数进行微调
 */

export default function intercept(fetcher, options) {
  var interceptorReq = createInterceptor(options);
  fetcher.sealInterceptors(false); // 可能已被锁

  var release = fetcher.interceptRequest(interceptorReq);
  fetcher.sealInterceptors(true);
  return release;
}