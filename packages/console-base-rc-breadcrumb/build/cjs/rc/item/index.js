"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BreadcrumbItem;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  vertical-align: middle;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  cursor: pointer;\n  vertical-align: middle;\n  text-decoration: none;\n  color: ", ";\n  \n  &:hover {\n    text-decoration: none;\n    color: ", ";\n  }\n  \n  &:link,\n  &:visited {\n    color: ", ";\n  }\n  \n  &:active,\n  &:link:hover {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// 加 :link :visited 是为了防止被最基础的样式所覆盖
var ScItemLink = _styledComponents.default.a(_templateObject(), _consoleBaseStyledMixin.COLOR.TEXT_SECONDARY, _consoleBaseStyledMixin.COLOR.LINK, _consoleBaseStyledMixin.COLOR.TEXT_SECONDARY, _consoleBaseStyledMixin.COLOR.LINK);

var ScItemPlain = _styledComponents.default.span(_templateObject2(), _consoleBaseStyledMixin.COLOR.TEXT_CAPTION);

function BreadcrumbItem(_ref) {
  var label = _ref.label,
      href = _ref.href,
      onClick = _ref.onClick,
      props = (0, _objectWithoutProperties2.default)(_ref, ["label", "href", "onClick"]);

  if (href || onClick) {
    return /*#__PURE__*/_react.default.createElement(ScItemLink, _objectSpread({
      href: href,
      onClick: onClick
    }, props), label);
  }

  return /*#__PURE__*/_react.default.createElement(ScItemPlain, props, label);
}