"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRefDialog;

var _useModelRef = _interopRequireDefault(require("./_use-model-ref"));

function useRefDialog() {
  return (0, _useModelRef.default)().refDialog;
}