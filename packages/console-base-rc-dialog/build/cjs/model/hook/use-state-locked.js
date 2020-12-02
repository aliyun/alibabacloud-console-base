"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useStateLocked;

var _useModelState = _interopRequireDefault(require("./_use-model-state"));

function useStateLocked() {
  return (0, _useModelState.default)().locked;
}