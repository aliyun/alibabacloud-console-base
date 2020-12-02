import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  background-color: #eee;\n  font-size: 12px;\n   \n  &:before {\n    content: 'H4';\n    background-color: #666;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  background-color: #eee;\n  font-size: 12px;\n   \n  &:before {\n    content: 'H3';\n    background-color: #666;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  background-color: #333;\n  font-size: 14px;\n  color: #fff;\n  \n  &:before {\n    content: 'H2';\n    background-color: #c0f;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  background-color: #000;\n  font-size: 18px;\n  color: #fff;\n   \n  &:before {\n    content: 'H1';\n    background-color: #0cf;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 2em 0 1em 0;\n  padding: 0 0 0 40px;\n  line-height: 2;\n  ", ";\n  \n  &:first-child {\n    margin-top: 0;\n  }\n      \n  &:before {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 32px;\n    font-weight: 100;\n    text-align: center;\n    color: #fff;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
import { CSS_FONT_FAMILY } from '../const';
var cssHeading = css(_templateObject(), CSS_FONT_FAMILY);
export var H1 = styled.h1(_templateObject2(), cssHeading);
export var H2 = styled.h2(_templateObject3(), cssHeading);
export var H3 = styled.h3(_templateObject4(), cssHeading);
export var H4 = styled.h4(_templateObject5(), cssHeading);