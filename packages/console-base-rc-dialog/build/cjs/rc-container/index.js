"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DialogWithProvider;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _model = require("../model");

var _ui = _interopRequireDefault(require("./ui"));

/**
 * 带 context 的 dialog
 */
function DialogWithProvider(props) {
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement(_model.Provider, {
    props: props
  }, /*#__PURE__*/_react.default.createElement(_ui.default, null)), document.body);
}