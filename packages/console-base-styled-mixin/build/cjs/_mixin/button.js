"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _color = require("../_var/color");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0;\n  border: none;\n  box-sizing: border-box;\n  outline: medium;\n  background: none;\n  line-height: inherit;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: inherit;\n  text-align: center;\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.3s ease-out;\n  \n  &:hover {\n    text-decoration: none;\n  }\n  \n  &[disabled] {\n    cursor: not-allowed;\n    \n    &,\n    &:hover {\n      color: ", " !important;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * 对按钮样式进行重置：
 * 1. 去掉 padding、background、border，定义 outline 以防止丑陋的 Chrome focus outline 样式
 * 2. 设置字体（family、颜色、大小、行间距等）继承
 * 3. 定义 disabled 的基础样式
 */
var reset = (0, _styledComponents.css)(_templateObject(), _color.TEXT_DISABLED);
exports.reset = reset;