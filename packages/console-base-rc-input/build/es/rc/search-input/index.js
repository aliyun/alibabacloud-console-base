import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import { COLOR } from '@alicloud/console-base-styled-mixin';
import Icon from '@alicloud/console-base-rc-icon';
import Input from '../input';
var ScIcon = styled(Icon)(_templateObject(), function (props) {
  return props.highlighted ? COLOR.TEXT_EMPHASIS : COLOR.TEXT_DISABLED;
});

function renderIcon(focused) {
  return /*#__PURE__*/React.createElement(ScIcon, {
    type: "search",
    highlighted: focused
  });
}

export default function SearchInput(props) {
  return /*#__PURE__*/React.createElement(Input, _objectSpread(_objectSpread({
    round: true
  }, props), {}, {
    innerLeft: renderIcon
  }));
}