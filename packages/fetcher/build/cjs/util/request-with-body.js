"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requestWithBody;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _mergeConfig = _interopRequireDefault(require("./merge-config"));

/**
 * 用于执行带 body 的请求，对应点 method 有 'POST' / 'PUT' / 'PATCH'
 */
function requestWithBody(fetcher, method, args) {
  var options;
  var url;
  var body;
  var params;

  if (typeof args[0] === 'string') {
    var _ref = args;

    var _ref2 = (0, _slicedToArray2.default)(_ref, 3);

    url = _ref2[0];
    body = _ref2[1];
    params = _ref2[2];
  } else {
    var _ref3 = args;

    var _ref4 = (0, _slicedToArray2.default)(_ref3, 4);

    options = _ref4[0];
    url = _ref4[1];
    body = _ref4[2];
    params = _ref4[3];
  }

  var config = (0, _mergeConfig.default)(options, {
    url: url,
    method: method,
    params: params,
    body: body
  });
  return fetcher.request(config);
}