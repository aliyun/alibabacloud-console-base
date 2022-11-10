import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinBgTertiary,
  mixinTextSecondary,
  mixinShadowSDown
} from '@alicloud/console-base-theme';
import Button, {
  ButtonSize,
  ButtonTheme,
  ButtonProps
} from '@alicloud/console-base-rc-button';

import {
  SPACING,
  SIZE_BUTTON,
  SIZE_BUTTON_ICON
} from '../../const';

interface IProps extends Omit<ButtonProps, 'size' | 'theme' | 'title'> {
  title?: string;
}

const ScButton = styled(Button)`
  margin: ${SPACING}px;
  border-radius: ${SIZE_BUTTON}px;
  width: ${SIZE_BUTTON}px;
  height: ${SIZE_BUTTON}px;
  font-size: ${SIZE_BUTTON_ICON}px;
  ${mixinTextSecondary}

  ${props => (props.active ? css`
    ${mixinBgTertiary}
    ${mixinShadowSDown}
  ` : null)}
  
  svg,
  img {
    display: inline-block;
    width: ${SIZE_BUTTON_ICON}px;
    height: ${SIZE_BUTTON_ICON}px;
    vertical-align: middle;
  }
  
  &:hover {
    ${mixinBgTertiary}
  }
`;

/**
 * 工具的按钮
 */
export default function ToolButton({
  title,
  ...props
}: IProps): JSX.Element {
  return <ScButton {...{
    'aria-label': title,
    ...props,
    size: ButtonSize.NONE,
    theme: ButtonTheme.NONE
  }} />;
}