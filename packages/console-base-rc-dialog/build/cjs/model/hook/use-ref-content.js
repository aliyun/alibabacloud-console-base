"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRefContent;

var _useModelRef = _interopRequireDefault(require("./_use-model-ref"));

function useRefContent() {
  return (0, _useModelRef.default)().refContent;
}