import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  line-height: 1.6;\n  \n  ", ";\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  hr {\n    margin: 16px 0;\n    border: 0;\n    border-bottom: 1px solid ", ";\n    height: 0;\n  }\n  \n  p,\n  ul,\n  ol {\n    margin-top: 0.5em;\n    margin-bottom: 0.5em;\n    line-height: 1.5 !important;\n    font-size: inherit;\n    \n    &:first-child {\n      margin-top: 0;\n    }\n    \n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  \n  ul,\n  ol {\n    margin-left: 2em;\n    padding: 0;\n    \n    li {\n      margin-top: 2px;\n      \n      &:first-child {\n        margin-top: 0;\n      }\n    }\n  }\n  \n  ul {\n    list-style: disc outside;\n  }\n  \n  ol {\n    list-style: decimal outside;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  em {\n    font-style: normal;\n    color: ", ";\n  }\n  \n  code {\n    padding: 0 4px;\n    border-radius: 2px;\n    background-color: rgba(0, 0, 0, 0.04);\n    color: #f25c7f;\n  }\n  \n  strong {\n    font-weight: 600;\n  }\n  \n  kbd {\n    display: inline-block;\n    padding: 3px 5px;\n    border: 1px solid ", ";\n    border-radius: 3px;\n    box-shadow: inset 0 -1px 0 #bbb;\n    background-color: ", ";\n    line-height: 10px;\n    font-size: 11px;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled, { css } from 'styled-components';
import { COLOR } from '@alicloud/console-base-styled-mixin';
import makeHtmlProps from '../util/make-html-props';
import parseLines from '../util/parse-lines';
import Lines from './lines'; // inline 元素样式

var cssInlineElements = css(_templateObject(), COLOR.TEXT_EMPHASIS, COLOR.LINE, COLOR.FILL_LIGHT, COLOR.TEXT_SECONDARY); // block 元素样式

var cssBlockElements = css(_templateObject2(), COLOR.LINE);
var ScSpan = styled.span(_templateObject3(), cssInlineElements);
var ScDiv = styled.div(_templateObject4(), cssInlineElements, cssBlockElements);
export default function Intl(_ref) {
  var text = _ref.text,
      html = _ref.html,
      lines = _ref.lines;

  if (!lines) {
    return html ? /*#__PURE__*/React.createElement(ScSpan, makeHtmlProps(text)) : /*#__PURE__*/React.createElement(ScSpan, null, text);
  }

  return /*#__PURE__*/React.createElement(ScDiv, null, parseLines(text.split('\n')).map(function (_ref2, i) {
    var type = _ref2.type,
        items = _ref2.items;
    return /*#__PURE__*/React.createElement(Lines, {
      key: i,
      type: type,
      items: items,
      html: html
    });
  }));
}