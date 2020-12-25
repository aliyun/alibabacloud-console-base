import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-theme';
import Button, {
  EButtonSize,
  EButtonThemeColor,
  ButtonProps
} from '@alicloud/console-base-rc-button';

import {
  SIZE_CONTROL_BUTTON
} from '../../const';

interface IProps extends ButtonProps {
  light?: boolean;
}

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
  width: ${SIZE_CONTROL_BUTTON}px;
  height: ${SIZE_CONTROL_BUTTON}px;
  
  ${props => (props.light ? css`
    color: #fff;
  ` : css`
    border-radius: 2px;
    color: ${COLOR.TEXT_SECONDARY};
    color: var(--cb-color-text-secondary, ${COLOR.TEXT_SECONDARY});
    
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      color: ${COLOR.TEXT_SECONDARY};
      color: var(--cb-color-text-secondary, ${COLOR.TEXT_SECONDARY});
    }
  `)};
  
  i {
    font-size: 12px;
    
    &:before {
      display: block;
    }
  }
  
  &:hover {
    opacity: ${props => getOpacity(props, true)};
  }
`;

export default function ControlButton(props: IProps): JSX.Element {
  return <ScButton {...{
    color: EButtonThemeColor.NONE,
    colorHover: EButtonThemeColor.NONE,
    size: EButtonSize.NONE,
    ...props
  }} />;
}
