import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 1px;\n  padding: 0 8px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  background-color: ", ";\n  min-width: 60px;\n  line-height: ", "px;\n  transition: all 0.3s ease-in-out;\n  ", ";\n  \n  &:hover {\n    border-color: ", ";\n    background-color: ", ";\n  }\n  \n  &:active {\n    border-color: ", ";\n    background-color: ", ";\n  }\n  \n  &:focus {\n    border-color: ", ";\n    outline: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { CSS_FONT_FAMILY, FORM_INPUT_HEIGHT, FORM_BUTTON_BDC, FORM_BUTTON_BDC_HOVER, FORM_BUTTON_BDC_ACTIVE, FORM_BUTTON_BGC, FORM_BUTTON_BGC_HOVER, FORM_BUTTON_BGC_ACTIVE, FORM_INPUT_BDC_FOCUS } from '../const';
export default styled.button(_templateObject(), FORM_BUTTON_BDC, FORM_BUTTON_BGC, FORM_INPUT_HEIGHT, CSS_FONT_FAMILY, FORM_BUTTON_BDC_HOVER, FORM_BUTTON_BGC_HOVER, FORM_BUTTON_BDC_ACTIVE, FORM_BUTTON_BGC_ACTIVE, FORM_INPUT_BDC_FOCUS);