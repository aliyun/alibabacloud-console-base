import React from 'react';
import styled from 'styled-components';

import Button, {
  ButtonTheme,
  ButtonProps
} from '@alicloud/console-base-rc-button';
import Icon from '@alicloud/console-base-rc-icon';

import {
  ACTION_SIZE
} from '../../../const';

interface IProps extends Omit<ButtonProps, 'theme' | 'label'> {
  icon: 'x' | 'config';
}

const ScIconButton = styled(Button)`
  opacity: 0.6;
  width: ${ACTION_SIZE}px;
  height: ${ACTION_SIZE}px;
  font-size: ${ACTION_SIZE - 4}px;
  
  &:hover {
    opacity: 1;
  }
`;

export default function IconButton({
  icon,
  ...props
}: IProps): JSX.Element {
  return <ScIconButton {...{
    ...props,
    theme: ButtonTheme.NONE,
    label: <Icon type={icon} />
  }} />;
}
