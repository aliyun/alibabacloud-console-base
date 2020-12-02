"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requestWithNoBody;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _mergeConfig = _interopRequireDefault(require("../util/merge-config"));

/**
 * 用于执行不带 body 的请求，对应点 method 有 'GET' / 'DELETE' / 'HEAD' / 'OPTIONS' / 'JSONP'
 */
function requestWithNoBody(fetcher, method, args) {
  var options;
  var url;
  var params;

  if (typeof args[0] === 'string') {
    var _ref = args;

    var _ref2 = (0, _slicedToArray2.default)(_ref, 2);

    url = _ref2[0];
    params = _ref2[1];
  } else {
    var _ref3 = args;

    var _ref4 = (0, _slicedToArray2.default)(_ref3, 3);

    options = _ref4[0];
    url = _ref4[1];
    params = _ref4[2];
  }

  var config = (0, _mergeConfig.default)(options, {
    url: url,
    method: method,
    params: params
  });
  return fetcher.request(config);
}