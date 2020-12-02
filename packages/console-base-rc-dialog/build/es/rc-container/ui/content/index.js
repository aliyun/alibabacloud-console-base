import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  position: relative;\n  padding: ", "px ", "px;\n  overflow: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { DIALOG } from '@alicloud/console-base-styled-mixin';
import { usePropMode, useDialogContent, usePropClassNameContent, useDialogMaxContentHeight } from '../../../model';
var ScContent = styled.div(_templateObject(), DIALOG.PADDING * 2 / 3, DIALOG.PADDING);

function Content(props, ref) {
  var mode = usePropMode();
  var content = useDialogContent();
  var classNameOnBody = usePropClassNameContent();
  var maxHeight = useDialogMaxContentHeight();
  return /*#__PURE__*/React.createElement(ScContent, _objectSpread(_objectSpread({}, props), {}, {
    style: maxHeight > 0 ? {
      maxHeight: maxHeight
    } : undefined,
    className: classNameOnBody,
    ref: ref,
    mode: mode
  }), content);
}

export default /*#__PURE__*/forwardRef(Content);