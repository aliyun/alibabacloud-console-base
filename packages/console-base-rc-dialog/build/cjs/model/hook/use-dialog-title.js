"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDialogTitle;

var _useModelProps2 = _interopRequireDefault(require("./_use-model-props"));

var _useModelState2 = _interopRequireDefault(require("./_use-model-state"));

function useDialogTitle() {
  var _useModelProps = (0, _useModelProps2.default)(),
      title = _useModelProps.title;

  var _useModelState = (0, _useModelState2.default)(),
      data = _useModelState.data;

  return typeof title === 'function' ? title(data) : title;
}