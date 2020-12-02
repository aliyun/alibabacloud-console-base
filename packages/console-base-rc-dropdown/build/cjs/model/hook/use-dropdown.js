"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDropdown;

var _react = require("react");

var _useVisible = _interopRequireDefault(require("./use-visible"));

var _useDispatchToggleVisible = _interopRequireDefault(require("./use-dispatch-toggle-visible"));

/**
 * 给内容用的 hook
 */
function useDropdown() {
  var visible = (0, _useVisible.default)();
  var dispatchToggleVisible = (0, _useDispatchToggleVisible.default)();
  var showDrop = (0, _react.useCallback)(function () {
    return dispatchToggleVisible(true);
  }, [dispatchToggleVisible]);
  var hideDrop = (0, _react.useCallback)(function () {
    return dispatchToggleVisible(false);
  }, [dispatchToggleVisible]);
  return (0, _react.useMemo)(function () {
    return {
      visible: visible,
      showDrop: showDrop,
      hideDrop: hideDrop
    };
  }, [visible, showDrop, hideDrop]);
}