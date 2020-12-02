import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n  \n  h4 {\n    flex: 1;\n    margin: 0;\n    padding: 0;\n    line-height: 24px;\n    font-size: 16px;\n    font-weight: 400;\n    ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  height: ", "px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding-top: ", "px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 0 ", "px 0  ", "px;\n  box-sizing: border-box;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled, { css } from 'styled-components';
import { COLOR, DIALOG, typo } from '@alicloud/console-base-styled-mixin';
import { EDialogMode } from '../../../const';
import { usePropMode, useDialogTitle } from '../../../model';
var cssCommon = css(_templateObject(), DIALOG.PADDING * 2 + DIALOG.SIZE_X, DIALOG.PADDING, COLOR.TEXT_TITLE);
var cssNormal = css(_templateObject2(), DIALOG.PADDING * 2 / 3); // slide 和 slide-up 共用

var cssSlide = css(_templateObject3(), COLOR.LINE_LIGHT, DIALOG.SLIDE_HEADER_HEIGHT);
var ScHeader = styled.header(_templateObject4(), cssCommon, function (props) {
  return props.mode !== EDialogMode.NORMAL ? cssSlide : cssNormal;
}, typo.ellipsis);
export default function Header() {
  var title = useDialogTitle();
  var mode = usePropMode();
  return mode !== EDialogMode.NORMAL || title ? /*#__PURE__*/React.createElement(ScHeader, {
    mode: mode
  }, /*#__PURE__*/React.createElement("h4", null, title)) : null;
}