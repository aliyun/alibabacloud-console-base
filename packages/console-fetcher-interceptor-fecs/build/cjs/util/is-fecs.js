"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFecs;

var _consoleBaseConfEnv = _interopRequireDefault(require("@alicloud/console-base-conf-env"));

var _fetcher = require("@alicloud/fetcher");

/**
 * 判断当前请求是不是 fecs 的请求
 * 注意：「野生」即手写的 FECS 域名判断可能会出错，因为它可能不会像 @alicloud/console-base-conf-env 进行环境判断
 */
function isFecs(_ref) {
  var url = _ref.url,
      urlBase = _ref.urlBase;

  var protocolHost = _fetcher.FetcherUtils.extractProtocolHost(url);

  if (protocolHost) {
    // 如果 url 是绝对地址，则不会用到 urlBase，不需要往下进行判断
    return protocolHost[1] === _consoleBaseConfEnv.default.FECS_HOST;
  }

  protocolHost = _fetcher.FetcherUtils.extractProtocolHost(urlBase);
  return protocolHost ? protocolHost[1] === _consoleBaseConfEnv.default.FECS_HOST : false;
}