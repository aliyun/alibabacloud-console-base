"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consoleFetcher = require("@alicloud/console-fetcher");

var _interceptFetcherWithProxy = _interopRequireDefault(require("./intercept-fetcher-with-proxy"));

var _default = function _default(config, interceptorOptions) {
  var fetcher = (0, _consoleFetcher.createFetcher)(config, interceptorOptions);
  (0, _interceptFetcherWithProxy.default)(fetcher);
  return fetcher;
};

exports.default = _default;