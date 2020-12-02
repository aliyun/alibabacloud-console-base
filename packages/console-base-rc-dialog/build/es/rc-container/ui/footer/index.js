import _extends from "@babel/runtime/helpers/esm/extends";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  justify-content: flex-start;\n  border-top: 1px solid ", ";\n  height: ", "px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  justify-content: flex-end;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n  text-align: right;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 0 ", "px;\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled, { css } from 'styled-components';
import { COLOR, DIALOG } from '@alicloud/console-base-styled-mixin';
import { EDialogMode } from '../../../const';
import { useDialogButtons, usePropMode } from '../../../model';
import FooterButton from './button';
var cssCommon = css(_templateObject(), DIALOG.PADDING);
var cssNormal = css(_templateObject2(), DIALOG.PADDING * 2 / 3, DIALOG.PADDING * 2 / 3);
var cssSlide = css(_templateObject3(), COLOR.LINE_LIGHT, DIALOG.SLIDE_FOOTER_HEIGHT);
var ScFooter = styled.footer(_templateObject4(), cssCommon, function (props) {
  return props.mode === EDialogMode.SLIDE ? cssSlide : cssNormal;
});
export default function Footer() {
  var mode = usePropMode();
  var buttons = useDialogButtons();
  return buttons.length ? /*#__PURE__*/React.createElement(ScFooter, {
    mode: mode
  }, buttons.map(function (v, i) {
    return /*#__PURE__*/React.createElement(FooterButton, _extends({
      key: v.spm || i
    }, v));
  })) : null;
}