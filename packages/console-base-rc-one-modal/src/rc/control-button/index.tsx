import React from 'react';
import styled from 'styled-components';

import Button, {
  ButtonProps,
  ButtonSize,
  ButtonTheme
} from '@alicloud/console-base-rc-button';

interface IProps extends ButtonProps {
  active?: boolean;
}

function getOpacity({
  disabled,
  active
}: IProps, hovered?: boolean): number {
  if (disabled) {
    return 0.4;
  }
  
  if (active) {
    return 1;
  }
  
  return hovered ? 1 : 0.8;
}

const ScButton = styled(Button)<IProps>`
  opacity: ${props => getOpacity(props)};
  width: 20px;
  height: 100%;
  color: #fff;
  
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
