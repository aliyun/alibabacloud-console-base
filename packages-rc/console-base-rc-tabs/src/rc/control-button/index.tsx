import React from 'react';
import styled from 'styled-components';

import {
  mixinTextSecondary
} from '@alicloud/console-base-theme';
import Button, {
  ButtonProps,
  ButtonTheme,
  ButtonSize
} from '@alicloud/console-base-rc-button';

import {
  SIZE_CONTROL_BUTTON
} from '../../const';

interface IProps extends Omit<ButtonProps, 'theme' | 'size' | 'cursor'> {}

function getOpacity({
  disabled
}: IProps, hovered?: boolean): number {
  if (disabled) {
    return 0.4;
  }
  
  return hovered ? 1 : 0.6;
}

const ScButton = styled(Button)<IProps>`
  opacity: ${props => getOpacity(props)};
  border-radius: 2px;
  width: ${SIZE_CONTROL_BUTTON}px;
  height: ${SIZE_CONTROL_BUTTON}px;
  ${mixinTextSecondary}
  
  &:hover {
    opacity: ${props => getOpacity(props, true)};
    background: rgba(0, 0, 0, 0.05);
    ${mixinTextSecondary}
  }
  
  i {
    font-size: 12px;
    
    &:before {
      display: block;
    }
  }
`;

export default function ControlButton(props: IProps): JSX.Element {
  return <ScButton {...{
    theme: ButtonTheme.NONE,
    size: ButtonSize.NONE,
    cursor: 'default',
    ...props
  }} />;
}
