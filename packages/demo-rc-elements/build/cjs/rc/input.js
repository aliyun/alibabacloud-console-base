"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputTextarea = exports.InputText = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _const = require("../const");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  display: block;\n  padding: 4px 8px;\n  box-sizing: border-box;\n  width: 100%;\n  min-height: 100px;\n  line-height: 20px;\n  resize: vertical;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  padding: 0 8px;\n  line-height: ", "px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin: 1px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  outline: none;\n  transition: all 0.3s ease-in-out;\n  \n  &:hover {\n    border-color: ", ";\n  }\n  \n  &:focus {\n    border-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var cssCommon = (0, _styledComponents.css)(_templateObject(), _const.FORM_INPUT_BDC, _const.FORM_INPUT_BDC_HOVER, _const.FORM_INPUT_BDC_FOCUS);

var InputText = _styledComponents.default.input(_templateObject2(), cssCommon, _const.FORM_INPUT_HEIGHT);

exports.InputText = InputText;

var InputTextarea = _styledComponents.default.textarea(_templateObject3(), cssCommon);

exports.InputTextarea = InputTextarea;