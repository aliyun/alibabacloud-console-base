"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDialogMaxContentHeight;

var _ = require("../..");

var _useModelState2 = _interopRequireDefault(require("./_use-model-state"));

var _usePropMode = _interopRequireDefault(require("./use-prop-mode"));

/**
 * Normal 模式下需要对内容区域限高
 */
function useDialogMaxContentHeight() {
  var mode = (0, _usePropMode.default)();

  var _useModelState = (0, _useModelState2.default)(),
      windowHeight = _useModelState.windowHeight;

  if (mode === _.EDialogMode.SLIDE) {
    return -1;
  }

  return windowHeight - 200; // 这里的逻辑比较浅，没有考虑是否有 title 和 按钮等
}