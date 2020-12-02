import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  cursor: pointer;\n  vertical-align: middle;\n  text-decoration: none;\n  color: ", ";\n  \n  &:hover {\n    text-decoration: none;\n    color: ", ";\n  }\n  \n  &:link,\n  &:visited {\n    color: ", ";\n  }\n  \n  &:active,\n  &:link:hover {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import { COLOR } from '@alicloud/console-base-styled-mixin';
// 加 :link :visited 是为了防止被最基础的样式所覆盖
var ScItemLink = styled.a(_templateObject(), COLOR.TEXT_SECONDARY, COLOR.LINK, COLOR.TEXT_SECONDARY, COLOR.LINK);
var ScItemPlain = styled.span(_templateObject2(), COLOR.TEXT_CAPTION);
export default function BreadcrumbItem(_ref) {
  var label = _ref.label,
      href = _ref.href,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["label", "href", "onClick"]);

  if (href || onClick) {
    return /*#__PURE__*/React.createElement(ScItemLink, _objectSpread({
      href: href,
      onClick: onClick
    }, props), label);
  }

  return /*#__PURE__*/React.createElement(ScItemPlain, props, label);
}