"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useModelDispatch;

var _useModelContext = _interopRequireDefault(require("./_use-model-context"));

function useModelDispatch() {
  return (0, _useModelContext.default)().dispatch;
}