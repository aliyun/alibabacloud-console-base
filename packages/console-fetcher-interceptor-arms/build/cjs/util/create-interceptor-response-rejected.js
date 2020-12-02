"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createInterceptorResponseRejected;

var _fetcher = require("@alicloud/fetcher");

var _bl = require("./bl");

function createInterceptorResponseRejected(interceptorConfig) {
  return function (err, config, response) {
    if (!(interceptorConfig !== null && interceptorConfig !== void 0 && interceptorConfig.shouldIgnore(config, err))) {
      (0, _bl.logError)({
        api: _fetcher.FetcherUtils.buildUrl(config.url || '', {
          urlBase: config.urlBase
        }),
        code: err.code,
        message: err.message,
        timeStarted: config._timeStarted,
        traceId: response === null || response === void 0 ? void 0 : response.headers['Eagleeye-Traceid']
      });
    }

    throw err; // 继续错下去
  };
}