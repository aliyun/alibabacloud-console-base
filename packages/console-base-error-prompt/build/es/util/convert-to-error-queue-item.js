import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import _noop from 'lodash/noop';
import _isNil from 'lodash/isNil';
import convertToErrorInQueue from './convert-to-error-in-queue';
/**
 * 把错误 `o?: TErrorPromptArg` 转化成 IErrorQueueItem
 */

export default function convertToErrorQueueItem(o, extra) {
  if (_isNil(o)) {
    return null;
  }

  return _objectSpread(_objectSpread({}, extra), {}, {
    error: convertToErrorInQueue(o),
    resolve: _noop
  });
}