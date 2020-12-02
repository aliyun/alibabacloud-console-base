import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  opacity: ", ";\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 3px 4px 2px rgba(0, 0, 0, 0.1);\n  outline: none;\n  background-color: #fff;\n  min-width: 320px;\n  max-width: 100%;\n  font-size: 12px;\n  transition: all ease-in 200ms;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  right: 0;\n  bottom: 0;\n  left: 0;\n  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);\n  transform: translateY(", ");\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  transform: translateX(", ");\n  \n  .hasTopbar & {\n    top: ", "px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  top: ", ";\n  left: 50%;\n  min-height: 80px;\n  transform: translate(-50%, -50%);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled, { css } from 'styled-components';
import { LAYOUT } from '@alicloud/console-base-styled-mixin';
import { EDialogMode } from '../../const';
import { useRefDialog, usePropMode, useDialogWidth, useDialogZIndex, usePropClosable, usePropClassName, useRefContent, useStateActive } from '../../model';
import Header from './header';
import Content from './content';
import Footer from './footer';
import X from './x';
var cssNormal = css(_templateObject(), function (props) {
  return props.active ? '50%' : '35%';
});
var cssSlide = css(_templateObject2(), function (props) {
  return props.active ? '0' : '100%';
}, LAYOUT.TOP_BAR_HEIGHT);
var cssSlideUp = css(_templateObject3(), function (props) {
  return props.active ? '0' : '100%';
}); // 其实 HTML 有 dialog 元素，但浏览器支持不佳，目前只好用 div

var ScDialog = styled.div(_templateObject4(), function (props) {
  return props.active ? 1 : 0.66;
}, function (props) {
  switch (props.mode) {
    case EDialogMode.SLIDE:
      return cssSlide;

    case EDialogMode.SLIDE_UP:
      return cssSlideUp;

    default:
      return cssNormal;
  }
});
/**
 * Dialog 本 Dialog
 */

export default function DialogUi() {
  var refDialog = useRefDialog();
  var refContent = useRefContent();
  var className = usePropClassName();
  var closable = usePropClosable();
  var mode = usePropMode();
  var width = useDialogWidth();
  var active = useStateActive();
  var zIndex = useDialogZIndex();
  return /*#__PURE__*/React.createElement(ScDialog, {
    ref: refDialog,
    'aria-modal': true,
    role: 'dialog',
    className: className,
    tabIndex: 0,
    mode: mode,
    active: active,
    style: {
      zIndex: zIndex,
      width: width
    }
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Content, {
    ref: refContent
  }), /*#__PURE__*/React.createElement(Footer, null), closable ? /*#__PURE__*/React.createElement(X, null) : null);
}