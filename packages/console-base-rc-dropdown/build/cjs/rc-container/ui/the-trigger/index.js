"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TheTrigger;

var _react = _interopRequireDefault(require("react"));

var _model = require("../../../model");

function TheTrigger() {
  var _useProps = (0, _model.useProps)(),
      trigger = _useProps.trigger;

  return /*#__PURE__*/_react.default.isValidElement(trigger) ? trigger : /*#__PURE__*/_react.default.createElement("span", null, trigger);
}