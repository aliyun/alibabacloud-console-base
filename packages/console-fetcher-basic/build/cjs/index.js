"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ERROR_BIZ: true,
  createFetcher: true
};
Object.defineProperty(exports, "ERROR_BIZ", {
  enumerable: true,
  get: function get() {
    return _consoleFetcherInterceptorResBiz.ERROR_BIZ;
  }
});
Object.defineProperty(exports, "createFetcher", {
  enumerable: true,
  get: function get() {
    return _createFetcher.default;
  }
});
exports.default = void 0;

var _consoleFetcherInterceptorResBiz = require("@alicloud/console-fetcher-interceptor-res-biz");

var _createFetcher = _interopRequireDefault(require("./util/create-fetcher"));

var _fetcher = require("@alicloud/fetcher");

Object.keys(_fetcher).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _fetcher[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fetcher[key];
    }
  });
});
var fetcher = (0, _createFetcher.default)();
fetcher.sealInterceptors();
var _default = fetcher;
exports.default = _default;