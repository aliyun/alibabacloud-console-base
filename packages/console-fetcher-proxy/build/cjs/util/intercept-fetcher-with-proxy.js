"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = interceptFetcherWithProxy;

var _consoleFetcher = require("@alicloud/console-fetcher");

var _consoleBaseMessenger = require("@alicloud/console-base-messenger");

var _consoleBaseGlobal = require("@alicloud/console-base-global");

var interceptor = function interceptor(config) {
  if (!(0, _consoleBaseGlobal.getProxyFetcher)()) {
    return; // 将继续正常的请求流程
  }

  var result;

  try {
    // postMessage 可能抛错
    result = _consoleBaseMessenger.forApp.fetcherRequest(config);
  } catch (err) {
    // 抛错表明 message 的 payload 中含有无法序列化的数据
    // TODO log
    return; // 将继续正常的请求流程
  }

  throw _consoleFetcher.FetcherUtils.createErrorSkipNetwork(result, config);
};

function interceptFetcherWithProxy(fetcher) {
  fetcher.interceptRequest(interceptor);
}