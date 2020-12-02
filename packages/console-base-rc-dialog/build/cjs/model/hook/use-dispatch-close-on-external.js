"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDispatchCloseOnExternal;

var _react = require("react");

var _useModelProps2 = _interopRequireDefault(require("./_use-model-props"));

var _useDispatchClose = _interopRequireDefault(require("./use-dispatch-close"));

/**
 * 处理外部点击关闭
 */
function useDispatchCloseOnExternal() {
  var _useModelProps = (0, _useModelProps2.default)(),
      externalClose = _useModelProps.externalClose,
      closable = _useModelProps.closable;

  var dispatchClose = (0, _useDispatchClose.default)();
  return (0, _react.useCallback)(function () {
    if (externalClose === -1 || closable && externalClose) {
      dispatchClose();
    }
  }, [externalClose, closable, dispatchClose]);
}