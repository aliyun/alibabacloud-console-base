"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _const = require("../const");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  background-color: #eee;\n  font-size: 12px;\n   \n  &:before {\n    content: 'H4';\n    background-color: #666;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  background-color: #eee;\n  font-size: 12px;\n   \n  &:before {\n    content: 'H3';\n    background-color: #666;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  background-color: #333;\n  font-size: 14px;\n  color: #fff;\n  \n  &:before {\n    content: 'H2';\n    background-color: #c0f;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  background-color: #000;\n  font-size: 18px;\n  color: #fff;\n   \n  &:before {\n    content: 'H1';\n    background-color: #0cf;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  margin: 2em 0 1em 0;\n  padding: 0 0 0 40px;\n  line-height: 2;\n  ", ";\n  \n  &:first-child {\n    margin-top: 0;\n  }\n      \n  &:before {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 32px;\n    font-weight: 100;\n    text-align: center;\n    color: #fff;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var cssHeading = (0, _styledComponents.css)(_templateObject(), _const.CSS_FONT_FAMILY);

var H1 = _styledComponents.default.h1(_templateObject2(), cssHeading);

exports.H1 = H1;

var H2 = _styledComponents.default.h2(_templateObject3(), cssHeading);

exports.H2 = H2;

var H3 = _styledComponents.default.h3(_templateObject4(), cssHeading);

exports.H3 = H3;

var H4 = _styledComponents.default.h4(_templateObject5(), cssHeading);

exports.H4 = H4;