"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onFetcherRequest;

var _const = require("../../const");

var _subscribeByConsoleBase = require("../../util/subscribe-by-console-base");

/**
 * console-base 响应接口统一请求
 */
function onFetcherRequest(fn) {
  return (0, _subscribeByConsoleBase.subscribePromiseByConsoleBase)(_const.EMessageBroadcastByApp.FETCHER_REQUEST, fn);
}