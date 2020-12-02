"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intercept;
Object.defineProperty(exports, "ERROR_RISK_FORBIDDEN", {
  enumerable: true,
  get: function get() {
    return _const.ERROR_RISK_FORBIDDEN;
  }
});
Object.defineProperty(exports, "ERROR_RISK_INVALID", {
  enumerable: true,
  get: function get() {
    return _const.ERROR_RISK_INVALID;
  }
});
Object.defineProperty(exports, "ERROR_RISK_CANCELLED", {
  enumerable: true,
  get: function get() {
    return _const.ERROR_RISK_CANCELLED;
  }
});

var _const = require("./const");

var _createInterceptor = _interopRequireDefault(require("./util/create-interceptor"));

function intercept(fetcher, o) {
  var interceptor = (0, _createInterceptor.default)(o);
  return fetcher.interceptResponse(undefined, interceptor);
}