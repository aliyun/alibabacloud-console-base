"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Separator;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  margin: 0 8px;\n  vertical-align: middle;\n  color: ", ";\n  \n  &:before {\n    content: '/';\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScSeparator = _styledComponents.default.span(_templateObject(), _consoleBaseStyledMixin.COLOR.TEXT_CAPTION);

function Separator() {
  return /*#__PURE__*/_react.default.createElement(ScSeparator, null);
}