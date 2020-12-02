import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useProps, useRefDropdown, useDispatchToggleVisibleWithDebounce } from '../../model';
import TheTrigger from './the-trigger';
import TheDrop from './the-drop';
var ScDropdown = styled.div(_templateObject(), function (props) {
  return props.block ? 'block' : 'inline-block';
});
export default function Dropdown() {
  var _useProps = useProps(),
      block = _useProps.block;

  var refDropdown = useRefDropdown();
  var dispatchToggleVisibleWithDebounce = useDispatchToggleVisibleWithDebounce();
  var handleMouseEnter = useCallback(function () {
    return dispatchToggleVisibleWithDebounce(true);
  }, [dispatchToggleVisibleWithDebounce]);
  var handleMouseLeave = useCallback(function () {
    return dispatchToggleVisibleWithDebounce(false);
  }, [dispatchToggleVisibleWithDebounce]);
  return /*#__PURE__*/React.createElement(ScDropdown, {
    ref: refDropdown,
    block: block,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/React.createElement(TheTrigger, null), /*#__PURE__*/React.createElement(TheDrop, null));
}