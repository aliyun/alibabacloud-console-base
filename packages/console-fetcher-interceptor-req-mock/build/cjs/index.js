"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intercept;

var _createInterceptor = _interopRequireDefault(require("./util/create-interceptor"));

/**
 * 利用 mocks.alibaba-inc.com 对接口（OneConsole 和 非 OneConsole 接口）进行，可通过 options 参数进行微调
 */
function intercept(fetcher, options) {
  var interceptorReq = (0, _createInterceptor.default)(options);
  fetcher.sealInterceptors(false); // 可能已被锁

  var release = fetcher.interceptRequest(interceptorReq);
  fetcher.sealInterceptors(true);
  return release;
}