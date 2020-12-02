"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consoleFetcherBasic = require("@alicloud/console-fetcher-basic");

var _consoleFetcherInterceptorResRisk = _interopRequireDefault(require("@alicloud/console-fetcher-interceptor-res-risk"));

var _default = function _default(config) {
  var interceptorOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fetcher = (0, _consoleFetcherBasic.createFetcher)(config, interceptorOptions);
  (0, _consoleFetcherInterceptorResRisk.default)(fetcher, interceptorOptions.riskConfig);
  return fetcher;
};

exports.default = _default;