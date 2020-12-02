"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDialogZIndex;

var _useModelProps2 = _interopRequireDefault(require("./_use-model-props"));

var _useModelState2 = _interopRequireDefault(require("./_use-model-state"));

function useDialogZIndex() {
  var _useModelProps = (0, _useModelProps2.default)(),
      zIndex = _useModelProps.zIndex;

  var _useModelState = (0, _useModelState2.default)(),
      zIndexInState = _useModelState.zIndex;

  if (zIndexInState > 0) {
    return zIndexInState;
  }

  return zIndex;
}