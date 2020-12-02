/**
 * 专门用于 demo 的 biz 拦截器
 * 
 * 使用 `fetcher.interceptResponse(fetcherDemoInterceptorBiz)`
 */
export default function fetcherDemoInterceptorBiz(json, config) {
  var code = json.code,
      data = json.data;

  if (code === '200') {
    return data;
  }

  var error = new Error(json.message || code || '__UNKNOWN__');
  error.code = code;
  error.name = 'BizErrorDemo';
  error.config = config;
  throw error;
}