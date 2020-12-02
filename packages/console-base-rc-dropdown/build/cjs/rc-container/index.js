"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ToolkitWithProvider;

var _react = _interopRequireDefault(require("react"));

var _model = _interopRequireDefault(require("../model"));

var _ui = _interopRequireDefault(require("./ui"));

function ToolkitWithProvider(props) {
  return /*#__PURE__*/_react.default.createElement(_model.default, {
    props: props
  }, /*#__PURE__*/_react.default.createElement(_ui.default, null));
}