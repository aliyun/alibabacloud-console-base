"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _const = require("../const");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin: 1px;\n  padding: 0 8px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  background-color: ", ";\n  min-width: 60px;\n  line-height: ", "px;\n  transition: all 0.3s ease-in-out;\n  ", ";\n  \n  &:hover {\n    border-color: ", ";\n    background-color: ", ";\n  }\n  \n  &:active {\n    border-color: ", ";\n    background-color: ", ";\n  }\n  \n  &:focus {\n    border-color: ", ";\n    outline: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = _styledComponents.default.button(_templateObject(), _const.FORM_BUTTON_BDC, _const.FORM_BUTTON_BGC, _const.FORM_INPUT_HEIGHT, _const.CSS_FONT_FAMILY, _const.FORM_BUTTON_BDC_HOVER, _const.FORM_BUTTON_BGC_HOVER, _const.FORM_BUTTON_BDC_ACTIVE, _const.FORM_BUTTON_BGC_ACTIVE, _const.FORM_INPUT_BDC_FOCUS);

exports.default = _default;