"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useVisible;

var _useModelProps2 = _interopRequireDefault(require("./_use-model-props"));

var _useModelState2 = _interopRequireDefault(require("./_use-model-state"));

/**
 * 由 props 和 state 决定是否下拉可见
 */
function useVisible() {
  var _useModelProps = (0, _useModelProps2.default)(),
      visible = _useModelProps.visible;

  var _useModelState = (0, _useModelState2.default)(),
      visibleInState = _useModelState.visible;

  return visible !== null && visible !== void 0 ? visible : visibleInState;
}