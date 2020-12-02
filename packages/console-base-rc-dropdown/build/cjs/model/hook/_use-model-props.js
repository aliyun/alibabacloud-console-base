"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useModelProps;

var _useModelContext = _interopRequireDefault(require("./_use-model-context"));

function useModelProps() {
  return (0, _useModelContext.default)().PROPS;
}