import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 4px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 0 8px 0;\n  padding: 0;\n  font-size: 16px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 ", "px 0 ", "px;\n  line-height: 1.6;\n  white-space: normal;\n  word-wrap: break-word;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 4px;\n  left: 0;\n  font-size: ", "px;\n  \n  &:before {\n    display: block;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin-top: 16px;\n  padding-top: 2px;\n  min-height: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import Icon from '@alicloud/console-base-rc-icon';
import { COLOR } from '@alicloud/console-base-styled-mixin';
var ICON_SIZE = 20;
var SPACING = 12;
var ScWrap = styled.div(_templateObject(), ICON_SIZE + SPACING * 2);
var ScIcon = styled(Icon)(_templateObject2(), ICON_SIZE);
var ScMessage = styled.div(_templateObject3(), SPACING, ICON_SIZE + SPACING);
var ScTitle = styled.h5(_templateObject4(), COLOR.TEXT_TITLE);
var ScContent = styled.div(_templateObject5());
/**
 * alert / confirm 的包裹
 */

export default function AltWrap(_ref) {
  var type = _ref.type,
      title = _ref.title,
      content = _ref.content;
  return /*#__PURE__*/React.createElement(ScWrap, null, /*#__PURE__*/React.createElement(ScIcon, {
    type: type === 'confirm' ? 'question-fill' : 'alert-fill',
    style: {
      color: type === 'confirm' ? COLOR.TEXT_CAPTION : COLOR.WARN
    }
  }), /*#__PURE__*/React.createElement(ScMessage, null, title ? /*#__PURE__*/React.createElement(ScTitle, null, title) : null, /*#__PURE__*/React.createElement(ScContent, null, content)));
}