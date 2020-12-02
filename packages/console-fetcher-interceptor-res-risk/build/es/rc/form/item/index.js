import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding-right: 16px;\n  box-sizing: border-box;\n  width: 160px;\n  text-align: right;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 12px;\n  line-height: ", "px;\n  font-size: 12px;\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import { COLOR, FORM_CONTROL } from '@alicloud/console-base-styled-mixin';
var ScItem = styled.div(_templateObject(), FORM_CONTROL.HEIGHT.M); // TODO 如果要提到外边用 这边的硬编码需要能设置

var ScLabel = styled.div(_templateObject2(), COLOR.TEXT_SECONDARY);
var ScContent = styled.div(_templateObject3());
export default function Item(_ref) {
  var label = _ref.label,
      content = _ref.content;
  return /*#__PURE__*/React.createElement(ScItem, null, /*#__PURE__*/React.createElement(ScLabel, null, /*#__PURE__*/React.createElement("label", null, label)), /*#__PURE__*/React.createElement(ScContent, null, content));
}