import React from 'react';
import styled from 'styled-components';

import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Icon from '@alicloud/console-base-rc-icon';

import {
  useProps,
  useHandleClose
} from '../../../model';

interface IScProps {
  $dense?: boolean;
}

const ACTION_SIZE = 16;

const ScAlertX = styled(Button)<IScProps>`
  position: absolute;
  top: ${props => (props.$dense ? 6 : 8)}px;
  right: 8px;
  opacity: 0.6;
  width: ${ACTION_SIZE}px;
  height: ${ACTION_SIZE}px;
  font-size: ${ACTION_SIZE - 4}px;
  
  &:hover {
    opacity: 1;
  }
`;

export default function AlertX(): JSX.Element | null {
  const {
    closable,
    dense
  } = useProps();
  const handleClose = useHandleClose();
  
  return closable ? <ScAlertX {...{
    $dense: dense,
    theme: ButtonTheme.NONE,
    label: <Icon type="x" />,
    onClick: handleClose
  }} /> : null;
}
