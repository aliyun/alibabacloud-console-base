"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Lifecycle;

var _react = _interopRequireDefault(require("react"));

var _onKeydown = _interopRequireDefault(require("./on-keydown"));

function Lifecycle() {
  return /*#__PURE__*/_react.default.createElement(_onKeydown.default, null);
}