"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createInterceptorResponseSuccess;

var _fetcher = require("@alicloud/fetcher");

var _bl = require("./bl");

function createInterceptorResponseSuccess(interceptorConfig) {
  return function (data, config, response) {
    if (interceptorConfig !== null && interceptorConfig !== void 0 && interceptorConfig.shouldIgnore(config)) {
      (0, _bl.logSuccess)({
        api: _fetcher.FetcherUtils.buildUrl(config.url || '', {
          urlBase: config.urlBase
        }),
        timeStarted: config._timeStarted,
        traceId: response === null || response === void 0 ? void 0 : response.headers['Eagleeye-Traceid']
      });
    }

    return data;
  };
}