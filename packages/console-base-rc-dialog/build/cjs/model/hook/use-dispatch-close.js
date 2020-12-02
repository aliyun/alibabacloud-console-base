"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDispatchClose;

var _react = require("react");

var _useDispatchCloseWithValue = _interopRequireDefault(require("./use-dispatch-close-with-value"));

/**
 * 无参的关闭，用于内部调用
 */
function useDispatchClose() {
  var dispatchCloseWithValue = (0, _useDispatchCloseWithValue.default)();
  return (0, _react.useCallback)(function () {
    return dispatchCloseWithValue();
  }, [dispatchCloseWithValue]);
}