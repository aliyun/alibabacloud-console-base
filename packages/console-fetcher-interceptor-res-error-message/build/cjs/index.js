"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intercept;

var _createInterceptor = _interopRequireDefault(require("./util/create-interceptor"));

function intercept(fetcher) {
  var interceptor = (0, _createInterceptor.default)();
  return fetcher.interceptResponse(undefined, interceptor);
}