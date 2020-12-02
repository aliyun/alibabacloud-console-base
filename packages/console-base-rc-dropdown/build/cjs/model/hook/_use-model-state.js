"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useModelState;

var _useModelContext = _interopRequireDefault(require("./_use-model-context"));

function useModelState() {
  return (0, _useModelContext.default)().STATE;
}