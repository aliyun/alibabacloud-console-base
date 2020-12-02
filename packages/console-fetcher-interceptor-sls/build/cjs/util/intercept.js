"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intercept;

var _createInterceptor = _interopRequireDefault(require("./create-interceptor"));

function intercept(fetcher, interceptorConfig) {
  var interceptorRejected = (0, _createInterceptor.default)(interceptorConfig);
  return fetcher.interceptResponse(undefined, interceptorRejected);
}