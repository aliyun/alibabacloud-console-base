"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usePropClosable;

var _useModelProps2 = _interopRequireDefault(require("./_use-model-props"));

function usePropClosable() {
  var _useModelProps = (0, _useModelProps2.default)(),
      _useModelProps$closab = _useModelProps.closable,
      closable = _useModelProps$closab === void 0 ? true : _useModelProps$closab;

  return closable;
}