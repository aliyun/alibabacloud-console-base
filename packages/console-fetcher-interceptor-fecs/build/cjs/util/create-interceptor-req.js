"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createInterceptorReq;

var _consoleOneConfig = _interopRequireDefault(require("@alicloud/console-one-config"));

var _consoleBaseConfEnv = _interopRequireDefault(require("@alicloud/console-base-conf-env"));

var _fetcher = require("@alicloud/fetcher");

var _isFecs = _interopRequireDefault(require("./is-fecs"));

var _isRelativeOneApi = _interopRequireDefault(require("./is-relative-one-api"));

var _cookieGetToken = _interopRequireDefault(require("./cookie-get-token"));

// FECS 仅支持 .aliyun.com 或其对应日常
var FECS_COMPATIBLE = function () {
  var arr1 = location.hostname.split('.');

  var arr2 = _consoleBaseConfEnv.default.FECS_HOST.split('.');

  return arr1[arr1.length - 2] === arr2[arr1.length - 2] && arr1[arr1.length - 1] === arr2[arr1.length - 1];
}();
/**
 * 此拦截器做了两个事情：
 * 
 * 1. 对于处理去往 FECS 的接口，为 POST 添加 FECS 专属的 sec_token
 * 2. 对于 OneConsole 封装的 open/inner/container 系列 API，在非 OneConsole 下自动走 FECS
 */


function interceptRequest(config) {
  // 只有向 FECS 的带 body 的请求需要填 FECS 的 token
  if (!_fetcher.FetcherUtils.canHaveBody(config.method)) {
    return;
  }

  var fecs = (0, _isFecs.default)(config);
  var relativeOne = (0, _isRelativeOneApi.default)(config); // 既不走 FECS，也不是当前域名下的 OneConsole API，不需要做什么

  if (!fecs && !relativeOne) {
    return;
  } // 走 FECS，填充 FECS 特有的 sec_token


  if (fecs) {
    return {
      body: {
        sec_token: (0, _cookieGetToken.default)()
      }
    };
  } // 不走 FECS 的当前域名下的 OneConsole API，需要判断当前是不是 OneConsole


  if (relativeOne) {
    if (_consoleOneConfig.default.ONE || !FECS_COMPATIBLE) {
      // 是 OneConsole，或非 FECS 兼容的域名，则不需要处理什么
      return;
    } // 强走 FECS


    return {
      urlBase: "//".concat(_consoleBaseConfEnv.default.FECS_HOST),
      body: {
        sec_token: (0, _cookieGetToken.default)()
      }
    };
  }
}

function createInterceptorReq() {
  return interceptRequest;
}