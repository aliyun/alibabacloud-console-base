import React from 'react';
import styled from 'styled-components';

import {
  DIALOG
} from '@alicloud/console-base-styled-mixin';
import Icon from '@alicloud/console-base-rc-icon';
import Button, {
  EButtonSize
} from '@alicloud/console-base-rc-button';

import {
  EDialogLockState
} from '../../../const';
import intl from '../../../intl';
import {
  useStateLocked,
  useDispatchClose
} from '../../../model';

// z-index 用于保证在没有 header 的情况下不会被内容遮住
const ScX = styled(Button)`
  position: absolute;
  top: ${(DIALOG.SLIDE_HEADER_HEIGHT - DIALOG.SIZE_X) / 2 - 2}px;
  right: ${DIALOG.PADDING}px;
  z-index: 1;
  font-size: ${DIALOG.SIZE_X}px;
`;

export default function X(): JSX.Element | null {
  const locked = useStateLocked();
  const dispatchClose = useDispatchClose();
  
  return <ScX {...{
    'aria-label': intl('op:close'),
    spm: 'x',
    label: <Icon type="x" />,
    title: intl('op:close'),
    size: EButtonSize.NONE,
    disabled: locked !== EDialogLockState.NO,
    onClick: dispatchClose
  }} />;
}
