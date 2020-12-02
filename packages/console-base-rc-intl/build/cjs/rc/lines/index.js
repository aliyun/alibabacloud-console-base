"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Lines;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _const = require("../../const");

var _makeHtmlProps = _interopRequireDefault(require("../../util/make-html-props"));

/* eslint-disable react/no-array-index-key */
function Lines(_ref) {
  var type = _ref.type,
      items = _ref.items,
      html = _ref.html;

  switch (type) {
    case _const.ETypeLine.OL:
      return /*#__PURE__*/_react.default.createElement("ol", null, items.map(function (v, i) {
        return html ? /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
          key: i
        }, (0, _makeHtmlProps.default)(v))) : /*#__PURE__*/_react.default.createElement("li", {
          key: i
        }, v);
      }));

    case _const.ETypeLine.UL:
      return /*#__PURE__*/_react.default.createElement("ul", null, items.map(function (v, i) {
        return html ? /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
          key: i
        }, (0, _makeHtmlProps.default)(v))) : /*#__PURE__*/_react.default.createElement("li", {
          key: i
        }, v);
      }));

    case _const.ETypeLine.HR:
      return /*#__PURE__*/_react.default.createElement("hr", null);

    default:
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, items.map(function (v, i) {
        return html ? /*#__PURE__*/_react.default.createElement("p", (0, _extends2.default)({
          key: i
        }, (0, _makeHtmlProps.default)(v))) : /*#__PURE__*/_react.default.createElement("p", {
          key: i
        }, v);
      }));
  }
}