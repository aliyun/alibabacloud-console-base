"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usePropMode;

var _const = require("../../const");

var _useModelProps2 = _interopRequireDefault(require("./_use-model-props"));

function usePropMode() {
  var _useModelProps = (0, _useModelProps2.default)(),
      mode = _useModelProps.mode;

  return mode || _const.EDialogMode.NORMAL;
}