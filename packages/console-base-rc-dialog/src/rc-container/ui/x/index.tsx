import React from 'react';
import styled from 'styled-components';

import {
  SIZE
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';
import Button, {
  EButtonTheme,
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
  top: ${(SIZE.HEIGHT_DIALOG_SLIDE_HEADER - 16) / 2 - 2}px;
  right: ${SIZE.PADDING_X_DIALOG}px;
  z-index: 1;
  width: 24px;
  height: 24px;
  font-size: 16px;
`;

export default function X(): JSX.Element | null {
  const locked = useStateLocked();
  const dispatchClose = useDispatchClose();
  
  return <ScX {...{
    'aria-label': intl('op:close'),
    spm: 'x',
    label: <Icon type="x" />,
    title: intl('op:close'),
    theme: EButtonTheme.TEXT_TERTIARY,
    size: EButtonSize.NONE,
    disabled: locked !== EDialogLockState.NO,
    onClick: dispatchClose
  }} />;
}
