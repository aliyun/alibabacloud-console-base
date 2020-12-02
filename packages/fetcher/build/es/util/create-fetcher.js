import Fetcher from '../fetcher';
import requestWithNoBody from '../util/request-with-no-body';
import requestWithBody from '../util/request-with-body';
/**
 * 这里会创建 Fetcher 实例，但不会直接把实例返回，因为那样的话用起来会不舒服（方法无法脱离实例进行调用），
 * 所以这里实际上是返回了一组方法组合成的一个对象。
 */

export default function createFetcher(config) {
  var fetcher = new Fetcher(config);
  var interceptRequest = fetcher.interceptRequest.bind(fetcher);
  var interceptResponse = fetcher.interceptResponse.bind(fetcher);
  var sealInterceptors = fetcher.sealInterceptors.bind(fetcher);
  var request = fetcher.request.bind(fetcher); // 便捷方法

  var jsonp = function jsonp() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return requestWithNoBody(fetcher, 'JSONP', args);
  };

  var get = function get() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return requestWithNoBody(fetcher, 'GET', args);
  };

  var deleteFn = function deleteFn() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return requestWithBody(fetcher, 'POST', args);
  };

  var post = function post() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return requestWithBody(fetcher, 'POST', args);
  };

  var put = function put() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return requestWithBody(fetcher, 'PUT', args);
  };

  var patch = function patch() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    return requestWithBody(fetcher, 'PATCH', args);
  };

  return {
    interceptRequest: interceptRequest,
    interceptResponse: interceptResponse,
    sealInterceptors: sealInterceptors,
    request: request,
    jsonp: jsonp,
    get: get,
    delete: deleteFn,
    post: post,
    put: put,
    patch: patch
  };
}