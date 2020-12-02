"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Item;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  flex: 1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding-right: 16px;\n  box-sizing: border-box;\n  width: 160px;\n  text-align: right;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  margin-bottom: 12px;\n  line-height: ", "px;\n  font-size: 12px;\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScItem = _styledComponents.default.div(_templateObject(), _consoleBaseStyledMixin.FORM_CONTROL.HEIGHT.M); // TODO 如果要提到外边用 这边的硬编码需要能设置


var ScLabel = _styledComponents.default.div(_templateObject2(), _consoleBaseStyledMixin.COLOR.TEXT_SECONDARY);

var ScContent = _styledComponents.default.div(_templateObject3());

function Item(_ref) {
  var label = _ref.label,
      content = _ref.content;
  return /*#__PURE__*/_react.default.createElement(ScItem, null, /*#__PURE__*/_react.default.createElement(ScLabel, null, /*#__PURE__*/_react.default.createElement("label", null, label)), /*#__PURE__*/_react.default.createElement(ScContent, null, content));
}