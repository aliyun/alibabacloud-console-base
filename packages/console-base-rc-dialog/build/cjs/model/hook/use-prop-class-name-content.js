"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usePropClassNameContent;

var _useModelProps = _interopRequireDefault(require("./_use-model-props"));

function usePropClassNameContent() {
  return (0, _useModelProps.default)().classNameOnBody;
}