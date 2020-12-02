"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requestInterceptorLast;

var _isCors = _interopRequireDefault(require("../../util/is-cors"));

var _isJsonp = _interopRequireDefault(require("../../util/is-jsonp"));

var _canHaveBody = _interopRequireDefault(require("../../util/can-have-body"));

/**
 * request 最后一个拦截器，对 headers 和 credentials 做补充
 */
function requestInterceptorLast(config) {
  if ((0, _isJsonp.default)(config)) {
    return;
  }

  var headers = config.headers || {};
  var credentials = config.credentials || ((0, _isCors.default)(config) ? 'include' : 'same-origin'); // MUST

  if ((0, _canHaveBody.default)(config.method)) {
    headers['Content-Type'] = headers['Content-Type'] || 'application/x-www-form-urlencoded';
  }

  return {
    headers: headers,
    credentials: credentials
  };
}