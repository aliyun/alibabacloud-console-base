import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinBgPrimary,
  mixinShadowL,
  mixinShadowLUp,
  mixinTextSecondary
} from '@alicloud/console-base-theme';
import Button, {
  ButtonProps,
  ButtonTheme
} from '@alicloud/console-base-rc-button';

interface IScProps {
  visible?: boolean;
}

interface IProps extends Omit<ButtonProps, 'theme' | 'size' | 'iconLeft' | 'iconRight'>, IScProps {}

const ScButton = styled(Button)<IScProps>`
  display: block;
  opacity: 0.85;
  margin-bottom: 8px;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 12px;
  ${mixinBgPrimary}
  ${mixinTextSecondary}
  ${mixinShadowL}
  ${props => (props.visible ? css`
    &:hover {
      opacity: 0.95;
    }
  ` : css`
    opacity: 0;
    pointer-events: none;
  `)}
  
  &:active {
    ${mixinShadowLUp}
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export default function GoButton({
  visible,
  ...props
}: IProps): JSX.Element {
  return <ScButton {...{
    theme: ButtonTheme.NONE,
    visible,
    ...props
  }} />;
}
