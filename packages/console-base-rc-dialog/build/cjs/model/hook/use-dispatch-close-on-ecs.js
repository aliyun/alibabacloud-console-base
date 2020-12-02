"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDispatchCloseOnEsc;

var _react = require("react");

var _detectFusionOverlay = _interopRequireDefault(require("../../util/detect-fusion-overlay"));

var _useModelProps2 = _interopRequireDefault(require("./_use-model-props"));

var _useDispatchClose = _interopRequireDefault(require("./use-dispatch-close"));

/**
 * 处理 ESC 事件
 *
 * 注意会经常变，引用用到了 dispatchCloseWithValue
 */
function useDispatchCloseOnEsc() {
  var _useModelProps = (0, _useModelProps2.default)(),
      esc = _useModelProps.esc,
      closable = _useModelProps.closable;

  var dispatchClose = (0, _useDispatchClose.default)();
  return (0, _react.useCallback)(function () {
    if ((0, _detectFusionOverlay.default)()) {
      return false;
    } // ESC 的时候优先关闭 fusion 的 overlay，如果有 fusion 的，则这边先不关


    if (esc === -1 || closable && esc) {
      dispatchClose();
    }
  }, [esc, closable, dispatchClose]);
}