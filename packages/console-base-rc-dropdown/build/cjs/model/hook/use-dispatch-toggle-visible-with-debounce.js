"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDispatchToggleVisibleWithDebounce;

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _react = require("react");

var _useDispatchToggleVisible = _interopRequireDefault(require("./use-dispatch-toggle-visible"));

/**
 * 适用于快速切换的场景（鼠标移入移出）
 */
function useDispatchToggleVisibleWithDebounce() {
  var dispatchToggleVisible = (0, _useDispatchToggleVisible.default)();
  return (0, _react.useMemo)(function () {
    return (0, _debounce2.default)(function (visible) {
      return dispatchToggleVisible(visible);
    }, 200);
  }, [dispatchToggleVisible]);
}