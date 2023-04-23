import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinTextSecondary,
  mixinBgSecondaryFade,
  mixinBgTertiaryFade,
  mixinShadowSDown
} from '@alicloud/console-base-theme';
import Button, {
  ButtonSize,
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  ISidePanelItemButtonProps
} from '../../types';
import {
  SIZE_BUTTON,
  SIZE_BUTTON_ICON
} from '../../const';

const ScButton = styled(Button)`
  border-radius: ${SIZE_BUTTON}px;
  width: ${SIZE_BUTTON}px;
  height: ${SIZE_BUTTON}px;
  line-height: ${SIZE_BUTTON}px;
  ${mixinBgSecondaryFade}
  ${mixinTextSecondary}
  
  ${props => (props.active ? css`
    ${mixinBgTertiaryFade}
    ${mixinShadowSDown}
  ` : null)}
  
  i {
    font-size: ${SIZE_BUTTON_ICON}px;
  }
  
  svg,
  img {
    display: inline-block;
    width: ${SIZE_BUTTON_ICON}px;
    height: ${SIZE_BUTTON_ICON}px;
    vertical-align: middle;
  }
  
  &:hover {
    ${mixinBgTertiaryFade}
  }
  
  a:link&,
  a:visited& {
    ${mixinTextSecondary}
  }
`;

/**
 * 工具的按钮
 */
export default function SidePanelItemButton({
  title,
  ...props
}: ISidePanelItemButtonProps): JSX.Element {
  return <ScButton {...{
    'aria-label': title,
    ...props,
    size: ButtonSize.NONE,
    theme: ButtonTheme.NONE
  }} />;
}
