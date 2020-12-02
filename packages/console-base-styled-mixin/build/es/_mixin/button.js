import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  border: none;\n  box-sizing: border-box;\n  outline: medium;\n  background: none;\n  line-height: inherit;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: inherit;\n  text-align: center;\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.3s ease-out;\n  \n  &:hover {\n    text-decoration: none;\n  }\n  \n  &[disabled] {\n    cursor: not-allowed;\n    \n    &,\n    &:hover {\n      color: ", " !important;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { css } from 'styled-components';
import { TEXT_DISABLED } from '../_var/color';
/**
 * 对按钮样式进行重置：
 * 1. 去掉 padding、background、border，定义 outline 以防止丑陋的 Chrome focus outline 样式
 * 2. 设置字体（family、颜色、大小、行间距等）继承
 * 3. 定义 disabled 的基础样式
 */

export var reset = css(_templateObject(), TEXT_DISABLED);