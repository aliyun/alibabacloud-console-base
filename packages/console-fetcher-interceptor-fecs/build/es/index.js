import createInterceptorReq from './util/create-interceptor-req';
import createInterceptorRes from './util/create-interceptor-res';
/**
 * fecs 的接口的 sec_token 跟应用不同，它是从 cookie 中获取的（fecs 服务端种的）
 * 
 * 该 token 实际上是通过当前浏览器的 cookie 到 fecs 后端进行换取的，所以要求用户登录
 */

export default function intercept(fetcher) {
  var interceptorRequest = createInterceptorReq();
  var interceptorResponseRejected = createInterceptorRes();
  var release1 = fetcher.interceptRequest(interceptorRequest);
  var release2 = fetcher.interceptResponse(undefined, interceptorResponseRejected);
  return function () {
    release1();
    release2();
  };
}