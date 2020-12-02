import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import _isString from 'lodash/isString';
import _isError from 'lodash/isError';
import { isValidElement } from 'react';

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


export default function convertToErrorDetailedInfo(o) {
  if (_isString(o) || /*#__PURE__*/isValidElement(o)) {
    return {
      message: o
    };
  }

  return _isError(o) ? convertToErrorInQueueFromError(o) : o;
}