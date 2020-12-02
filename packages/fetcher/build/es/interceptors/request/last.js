import isCors from '../../util/is-cors';
import isJsonp from '../../util/is-jsonp';
import canHaveBody from '../../util/can-have-body';
/**
 * request 最后一个拦截器，对 headers 和 credentials 做补充
 */

export default function requestInterceptorLast(config) {
  if (isJsonp(config)) {
    return;
  }

  var headers = config.headers || {};
  var credentials = config.credentials || (isCors(config) ? 'include' : 'same-origin'); // MUST

  if (canHaveBody(config.method)) {
    headers['Content-Type'] = headers['Content-Type'] || 'application/x-www-form-urlencoded';
  }

  return {
    headers: headers,
    credentials: credentials
  };
}