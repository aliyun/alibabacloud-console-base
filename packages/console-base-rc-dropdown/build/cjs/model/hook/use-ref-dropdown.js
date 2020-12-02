"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRefDropdown;

var _useModelRef = _interopRequireDefault(require("./_use-model-ref"));

function useRefDropdown() {
  return (0, _useModelRef.default)().refDropdown;
}