"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ERROR_RISK_FORBIDDEN: true,
  ERROR_RISK_INVALID: true,
  ERROR_RISK_CANCELLED: true,
  createFetcher: true
};
Object.defineProperty(exports, "ERROR_RISK_FORBIDDEN", {
  enumerable: true,
  get: function get() {
    return _consoleFetcherInterceptorResRisk.ERROR_RISK_FORBIDDEN;
  }
});
Object.defineProperty(exports, "ERROR_RISK_INVALID", {
  enumerable: true,
  get: function get() {
    return _consoleFetcherInterceptorResRisk.ERROR_RISK_INVALID;
  }
});
Object.defineProperty(exports, "ERROR_RISK_CANCELLED", {
  enumerable: true,
  get: function get() {
    return _consoleFetcherInterceptorResRisk.ERROR_RISK_CANCELLED;
  }
});
Object.defineProperty(exports, "createFetcher", {
  enumerable: true,
  get: function get() {
    return _createFetcher.default;
  }
});
exports.default = void 0;

var _consoleFetcherInterceptorResRisk = require("@alicloud/console-fetcher-interceptor-res-risk");

var _createFetcher = _interopRequireDefault(require("./util/create-fetcher"));

var _consoleFetcherBasic = require("@alicloud/console-fetcher-basic");

Object.keys(_consoleFetcherBasic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _consoleFetcherBasic[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _consoleFetcherBasic[key];
    }
  });
});
var fetcher = (0, _createFetcher.default)();
fetcher.sealInterceptors();
var _default = fetcher;
exports.default = _default;