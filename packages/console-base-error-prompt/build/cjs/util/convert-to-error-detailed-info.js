"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertToErrorDetailedInfo;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _isError2 = _interopRequireDefault(require("lodash/isError"));

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function convertToErrorInQueueFromError(e) {
  var _ref = e,
      details = _ref.details;

  var errorInQueue = _objectSpread({
    message: e.message
  }, details);

  if (!details) {
    // 如果没有详情 则尽可能拿更多的信息
    errorInQueue.errorName = e.name;
    errorInQueue.stack = e.stack;
  }

  return errorInQueue;
}
/**
 * 把错误 `o?: TErrorPromptArg` 转化成 IErrorDetailedInfo，这个方法会被暴露到外部
 */


function convertToErrorDetailedInfo(o) {
  if ((0, _isString2.default)(o) || /*#__PURE__*/(0, _react.isValidElement)(o)) {
    return {
      message: o
    };
  }

  return (0, _isError2.default)(o) ? convertToErrorInQueueFromError(o) : o;
}