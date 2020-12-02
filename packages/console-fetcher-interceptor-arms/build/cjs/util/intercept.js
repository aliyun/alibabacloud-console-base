"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intercept;

var _createInterceptorResponseFulfilled = _interopRequireDefault(require("./create-interceptor-response-fulfilled"));

var _createInterceptorResponseRejected = _interopRequireDefault(require("./create-interceptor-response-rejected"));

/**
 * 为 fetcher 增加 arms 埋点
 */
function intercept(fetcher, interceptorConfig) {
  var interceptorFulfilled = (0, _createInterceptorResponseFulfilled.default)(interceptorConfig);
  var interceptorRejected = (0, _createInterceptorResponseRejected.default)(interceptorConfig);
  return fetcher.interceptResponse(interceptorFulfilled, interceptorRejected);
}