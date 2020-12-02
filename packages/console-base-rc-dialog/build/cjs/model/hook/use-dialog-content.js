"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDialogContent;

var _useModelProps2 = _interopRequireDefault(require("./_use-model-props"));

function useDialogContent() {
  var _useModelProps = (0, _useModelProps2.default)(),
      content = _useModelProps.content;

  return content;
}