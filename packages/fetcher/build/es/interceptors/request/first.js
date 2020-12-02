/**
 * 默认的第一个 request 拦截器
 * - 记录开始的时间
 * - 保证 method 存在且大写
 */
export default function requestInterceptorFirst(config) {
  var _config$method = config.method,
      method = _config$method === void 0 ? 'GET' : _config$method;
  return {
    _timeStarted: Date.now(),
    method: method.toUpperCase()
  };
}