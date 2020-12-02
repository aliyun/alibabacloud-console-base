"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDialogButtons;

var _react = require("react");

var _processButtons = _interopRequireDefault(require("../../util/process-buttons"));

var _useModelProps2 = _interopRequireDefault(require("./_use-model-props"));

var _useModelState2 = _interopRequireDefault(require("./_use-model-state"));

function useDialogButtons() {
  var _useModelProps = (0, _useModelProps2.default)(),
      buttons = _useModelProps.buttons;

  var _useModelState = (0, _useModelState2.default)(),
      data = _useModelState.data,
      locked = _useModelState.locked;

  if (typeof buttons === 'function') {
    buttons = buttons(data);
  }

  return (0, _react.useMemo)(function () {
    return (0, _processButtons.default)(buttons, locked);
  }, [buttons, locked]);
}