import React from 'react';
import styled, {
  css
} from 'styled-components';

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
    ${mixinTextSecondary};
    
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      ${mixinTextSecondary};
    }
  `)}
  
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
    theme: ButtonTheme.NONE,
    size: ButtonSize.NONE,
    ...props
  }} />;
}
