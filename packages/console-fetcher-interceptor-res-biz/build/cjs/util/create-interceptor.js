"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createInterceptor;

var _fetcher = require("@alicloud/fetcher");

var _const = require("../const");

var _isSuccess = _interopRequireDefault(require("./is-success"));

var _getCode = _interopRequireDefault(require("./get-code"));

var _getData = _interopRequireDefault(require("./get-data"));

var _getMessage = _interopRequireDefault(require("./get-message"));

/**
 * 请求到这里，说明服务端有返回，但业务上不一定是成功的。
 * 这里会判断业务是否成功，如果成功则返回从原屎返回中得出的真正的数据，如果失败在抛出 FetchErrorBiz。
 */
function createInterceptor() {
  return function (json, config) {
    // eslint-disable-line @typescript-eslint/no-explicit-any
    var success = (0, _isSuccess.default)(json, config.isSuccess);

    if (success) {
      return (0, _getData.default)(json, config.getData);
    }

    var code = (0, _getCode.default)(json, config.getCode) || '__UNKNOWN__';
    var message = (0, _getMessage.default)(json, config.getMessage) || code;
    throw _fetcher.FetcherUtils.createError(config, _const.ERROR_BIZ, message, code);
  };
}