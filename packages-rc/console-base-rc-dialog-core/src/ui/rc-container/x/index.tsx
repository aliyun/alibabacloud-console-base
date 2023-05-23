import React from 'react';
import styled from 'styled-components';

import {
  SIZE
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';
import Button, {
  ButtonTheme,
  ButtonSize
} from '@alicloud/console-base-rc-button';

import {
  DialogMode,
  DialogLockState,
  useStateLocked,
  useDialogMode,
  useHandleClose
} from '../../../model';
import intl from '../../../intl';

interface IScProps {
  $mode?: DialogMode;
}

// z-index 用于保证在没有 header 的情况下不会被内容遮住
const ScX = styled(Button)<IScProps>`
  position: absolute;
  top: ${props => (props.$mode === DialogMode.NORMAL ? SIZE.PADDING_X_DIALOG : (SIZE.HEIGHT_DIALOG_SLIDE_HEADER - 24) / 2)}px;
  right: ${SIZE.PADDING_X_DIALOG}px;
  z-index: 1;
  width: 24px;
  height: 24px;
  font-size: 16px;
`;

export default function X(): JSX.Element | null {
  const dialogMode = useDialogMode();
  const locked = useStateLocked();
  const dispatchClose = useHandleClose();
  
  return <ScX {...{
    $mode: dialogMode,
    label: <Icon type="x" />,
    title: intl('op:close'),
    theme: ButtonTheme.TEXT_TERTIARY,
    size: ButtonSize.NONE,
    disabled: locked !== DialogLockState.NO,
    onClick: dispatchClose
  }} />;
}
