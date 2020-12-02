"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FORM_BUTTON_BGC_ACTIVE = exports.FORM_BUTTON_BGC_HOVER = exports.FORM_BUTTON_BGC = exports.FORM_BUTTON_BDC_ACTIVE = exports.FORM_BUTTON_BDC_HOVER = exports.FORM_BUTTON_BDC = exports.FORM_INPUT_BDC_FOCUS = exports.FORM_INPUT_BDC_HOVER = exports.FORM_INPUT_BDC = exports.FORM_INPUT_HEIGHT = exports.CSS_BLOCK_LEVEL_ELEMENT = exports.CSS_FONT_FAMILY = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin: 1em 0 0.5em 0;\n  line-height: 1.5;\n  ", ";\n  \n  em {\n    font-style: normal;\n    color: #f60;\n  }\n  \n  code {\n    padding: 0 4px;\n    border-radius: 2px;\n    background-color: rgba(0, 0, 0, 0.04);\n    color: #39f;\n  }\n  \n  strong {\n    font-weight: 600;\n  }\n  \n  kbd {\n    display: inline-block;\n    padding: 3px 5px;\n    border: 1px solid #ccc;\n    border-bottom-color: #999;\n    border-radius: 3px;\n    box-shadow: inset 0 -1px 0 #999;\n    background-color: #f3f3f3;\n    line-height: 10px;\n    font-size: 11px;\n    color: #333;\n  }\n  \n  &:first-child {\n    margin-top: 0;\n  }\n  \n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-family: 'PingFang SC', 'Hiragino Sans GB', Helvetica, Arial, sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var CSS_FONT_FAMILY = (0, _styledComponents.css)(_templateObject());
exports.CSS_FONT_FAMILY = CSS_FONT_FAMILY;
var CSS_BLOCK_LEVEL_ELEMENT = (0, _styledComponents.css)(_templateObject2(), CSS_FONT_FAMILY);
exports.CSS_BLOCK_LEVEL_ELEMENT = CSS_BLOCK_LEVEL_ELEMENT;
var FORM_INPUT_HEIGHT = 28;
exports.FORM_INPUT_HEIGHT = FORM_INPUT_HEIGHT;
var FORM_INPUT_BDC = '#eee';
exports.FORM_INPUT_BDC = FORM_INPUT_BDC;
var FORM_INPUT_BDC_HOVER = '#ccc';
exports.FORM_INPUT_BDC_HOVER = FORM_INPUT_BDC_HOVER;
var FORM_INPUT_BDC_FOCUS = '#c9f';
exports.FORM_INPUT_BDC_FOCUS = FORM_INPUT_BDC_FOCUS;
var FORM_BUTTON_BDC = 'transparent';
exports.FORM_BUTTON_BDC = FORM_BUTTON_BDC;
var FORM_BUTTON_BDC_HOVER = FORM_INPUT_BDC_HOVER;
exports.FORM_BUTTON_BDC_HOVER = FORM_BUTTON_BDC_HOVER;
var FORM_BUTTON_BDC_ACTIVE = '#eee';
exports.FORM_BUTTON_BDC_ACTIVE = FORM_BUTTON_BDC_ACTIVE;
var FORM_BUTTON_BGC = '#eee';
exports.FORM_BUTTON_BGC = FORM_BUTTON_BGC;
var FORM_BUTTON_BGC_HOVER = '#f7f7f7';
exports.FORM_BUTTON_BGC_HOVER = FORM_BUTTON_BGC_HOVER;
var FORM_BUTTON_BGC_ACTIVE = '#eee';
exports.FORM_BUTTON_BGC_ACTIVE = FORM_BUTTON_BGC_ACTIVE;