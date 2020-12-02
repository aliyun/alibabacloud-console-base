import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import mergeConfig from '../util/merge-config';

/**
 * 用于执行不带 body 的请求，对应点 method 有 'GET' / 'DELETE' / 'HEAD' / 'OPTIONS' / 'JSONP'
 */
export default function requestWithNoBody(fetcher, method, args) {
  var options;
  var url;
  var params;

  if (typeof args[0] === 'string') {
    var _ref = args;

    var _ref2 = _slicedToArray(_ref, 2);

    url = _ref2[0];
    params = _ref2[1];
  } else {
    var _ref3 = args;

    var _ref4 = _slicedToArray(_ref3, 3);

    options = _ref4[0];
    url = _ref4[1];
    params = _ref4[2];
  }

  var config = mergeConfig(options, {
    url: url,
    method: method,
    params: params
  });
  return fetcher.request(config);
}