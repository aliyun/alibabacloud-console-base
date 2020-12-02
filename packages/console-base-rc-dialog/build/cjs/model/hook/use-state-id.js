"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useStateId;

var _useModelState = _interopRequireDefault(require("./_use-model-state"));

function useStateId() {
  return (0, _useModelState.default)().id;
}