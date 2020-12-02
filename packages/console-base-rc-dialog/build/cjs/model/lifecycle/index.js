"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Lifecycle;

var _react = _interopRequireDefault(require("react"));

var _didMount = _interopRequireDefault(require("./did-mount"));

var _stack = _interopRequireDefault(require("./stack"));

var _adjustHeight = _interopRequireDefault(require("./adjust-height"));

function Lifecycle() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_didMount.default, null), /*#__PURE__*/_react.default.createElement(_stack.default, null), /*#__PURE__*/_react.default.createElement(_adjustHeight.default, null));
}