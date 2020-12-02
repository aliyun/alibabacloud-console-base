"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intercept;

var _createInterceptorReq = _interopRequireDefault(require("./util/create-interceptor-req"));

var _createInterceptorRes = _interopRequireDefault(require("./util/create-interceptor-res"));

/**
 * fecs 的接口的 sec_token 跟应用不同，它是从 cookie 中获取的（fecs 服务端种的）
 * 
 * 该 token 实际上是通过当前浏览器的 cookie 到 fecs 后端进行换取的，所以要求用户登录
 */
function intercept(fetcher) {
  var interceptorRequest = (0, _createInterceptorReq.default)();
  var interceptorResponseRejected = (0, _createInterceptorRes.default)();
  var release1 = fetcher.interceptRequest(interceptorRequest);
  var release2 = fetcher.interceptResponse(undefined, interceptorResponseRejected);
  return function () {
    release1();
    release2();
  };
}