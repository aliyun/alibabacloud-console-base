import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin: 0 8px;\n  vertical-align: middle;\n  color: ", ";\n  \n  &:before {\n    content: '/';\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import { COLOR } from '@alicloud/console-base-styled-mixin';
var ScSeparator = styled.span(_templateObject(), COLOR.TEXT_CAPTION);
export default function Separator() {
  return /*#__PURE__*/React.createElement(ScSeparator, null);
}