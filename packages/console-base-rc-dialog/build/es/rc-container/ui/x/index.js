import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: ", "px;\n  right: ", "px;\n  z-index: 1;\n  font-size: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import { DIALOG } from '@alicloud/console-base-styled-mixin';
import Icon from '@alicloud/console-base-rc-icon';
import Button, { EButtonSize } from '@alicloud/console-base-rc-button';
import { EDialogLockState } from '../../../const';
import intl from '../../../intl';
import { useStateLocked, useDispatchClose } from '../../../model'; // z-index 用于保证在没有 header 的情况下不会被内容遮住

var ScX = styled(Button)(_templateObject(), (DIALOG.SLIDE_HEADER_HEIGHT - DIALOG.SIZE_X) / 2 - 2, DIALOG.PADDING, DIALOG.SIZE_X);
export default function X() {
  var locked = useStateLocked();
  var dispatchClose = useDispatchClose();
  return /*#__PURE__*/React.createElement(ScX, {
    'aria-label': intl('op:close'),
    spm: 'x',
    label: /*#__PURE__*/React.createElement(Icon, {
      type: "x"
    }),
    title: intl('op:close'),
    size: EButtonSize.NONE,
    disabled: locked !== EDialogLockState.NO,
    onClick: dispatchClose
  });
}