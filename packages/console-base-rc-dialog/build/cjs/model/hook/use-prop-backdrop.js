"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usePropBackdrop;

var _useModelProps2 = _interopRequireDefault(require("./_use-model-props"));

function usePropBackdrop() {
  var _useModelProps = (0, _useModelProps2.default)(),
      _useModelProps$backdr = _useModelProps.backdrop,
      backdrop = _useModelProps$backdr === void 0 ? true : _useModelProps$backdr;

  return backdrop;
}