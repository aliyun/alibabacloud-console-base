import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  display: block;\n  padding: 4px 8px;\n  box-sizing: border-box;\n  width: 100%;\n  min-height: 100px;\n  line-height: 20px;\n  resize: vertical;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  padding: 0 8px;\n  line-height: ", "px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 1px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  outline: none;\n  transition: all 0.3s ease-in-out;\n  \n  &:hover {\n    border-color: ", ";\n  }\n  \n  &:focus {\n    border-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { css } from 'styled-components';
import { FORM_INPUT_HEIGHT, FORM_INPUT_BDC, FORM_INPUT_BDC_HOVER, FORM_INPUT_BDC_FOCUS } from '../const';
var cssCommon = css(_templateObject(), FORM_INPUT_BDC, FORM_INPUT_BDC_HOVER, FORM_INPUT_BDC_FOCUS);
export var InputText = styled.input(_templateObject2(), cssCommon, FORM_INPUT_HEIGHT);
export var InputTextarea = styled.textarea(_templateObject3(), cssCommon);