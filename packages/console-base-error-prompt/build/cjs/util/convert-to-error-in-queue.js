"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertToErrorInQueue;

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _parseParams = _interopRequireWildcard(require("./parse-params"));

var _convertToErrorDetailedInfo = _interopRequireDefault(require("./convert-to-error-detailed-info"));

/**
 * 把错误 `o?: TErrorPromptArg` 转化成 IErrorInQueue
 */
function convertToErrorInQueue(o) {
  var info = (0, _convertToErrorDetailedInfo.default)(o);

  if ((0, _isString2.default)(info.method)) {
    info.method = info.method.toUpperCase();
  }

  if (info.params) {
    info.params = (0, _parseParams.default)(info.params);
  }

  if (info.body) {
    info.body = (0, _parseParams.parseBody)(info.body);
  }

  return info;
}