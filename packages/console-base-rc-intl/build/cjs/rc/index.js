"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Intl;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _makeHtmlProps = _interopRequireDefault(require("../util/make-html-props"));

var _parseLines = _interopRequireDefault(require("../util/parse-lines"));

var _lines = _interopRequireDefault(require("./lines"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  line-height: 1.6;\n  \n  ", ";\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  hr {\n    margin: 16px 0;\n    border: 0;\n    border-bottom: 1px solid ", ";\n    height: 0;\n  }\n  \n  p,\n  ul,\n  ol {\n    margin-top: 0.5em;\n    margin-bottom: 0.5em;\n    line-height: 1.5 !important;\n    font-size: inherit;\n    \n    &:first-child {\n      margin-top: 0;\n    }\n    \n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  \n  ul,\n  ol {\n    margin-left: 2em;\n    padding: 0;\n    \n    li {\n      margin-top: 2px;\n      \n      &:first-child {\n        margin-top: 0;\n      }\n    }\n  }\n  \n  ul {\n    list-style: disc outside;\n  }\n  \n  ol {\n    list-style: decimal outside;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  em {\n    font-style: normal;\n    color: ", ";\n  }\n  \n  code {\n    padding: 0 4px;\n    border-radius: 2px;\n    background-color: rgba(0, 0, 0, 0.04);\n    color: #f25c7f;\n  }\n  \n  strong {\n    font-weight: 600;\n  }\n  \n  kbd {\n    display: inline-block;\n    padding: 3px 5px;\n    border: 1px solid ", ";\n    border-radius: 3px;\n    box-shadow: inset 0 -1px 0 #bbb;\n    background-color: ", ";\n    line-height: 10px;\n    font-size: 11px;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// inline 元素样式
var cssInlineElements = (0, _styledComponents.css)(_templateObject(), _consoleBaseStyledMixin.COLOR.TEXT_EMPHASIS, _consoleBaseStyledMixin.COLOR.LINE, _consoleBaseStyledMixin.COLOR.FILL_LIGHT, _consoleBaseStyledMixin.COLOR.TEXT_SECONDARY); // block 元素样式

var cssBlockElements = (0, _styledComponents.css)(_templateObject2(), _consoleBaseStyledMixin.COLOR.LINE);

var ScSpan = _styledComponents.default.span(_templateObject3(), cssInlineElements);

var ScDiv = _styledComponents.default.div(_templateObject4(), cssInlineElements, cssBlockElements);

function Intl(_ref) {
  var text = _ref.text,
      html = _ref.html,
      lines = _ref.lines;

  if (!lines) {
    return html ? /*#__PURE__*/_react.default.createElement(ScSpan, (0, _makeHtmlProps.default)(text)) : /*#__PURE__*/_react.default.createElement(ScSpan, null, text);
  }

  return /*#__PURE__*/_react.default.createElement(ScDiv, null, (0, _parseLines.default)(text.split('\n')).map(function (_ref2, i) {
    var type = _ref2.type,
        items = _ref2.items;
    return /*#__PURE__*/_react.default.createElement(_lines.default, {
      key: i,
      type: type,
      items: items,
      html: html
    });
  }));
}