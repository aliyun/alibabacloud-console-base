import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  SIZE,
  Z_INDEX,
  mixinBgPrimary,
  mixinShadowLLeft
} from '@alicloud/console-base-theme';

import {
  useVisible,
  useCollapsed
} from '../model';

import {
  SIZE_BUTTON_WRAP_HEIGHT,
  SPACING_Y,
  DATA_KEY_J
} from './const';
import {
  GlobalStyleOnBody
} from './rc';
import {
  ItemsTop,
  ItemsBottom,
  CollapseToggle
} from './rc-container';

interface IScProps {
  $collapsed: boolean;
}

const ScAside = styled.aside<IScProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: ${Z_INDEX.SIDE_PANEL};
  padding: ${SPACING_Y * 1.5}px 0 ${SIZE_BUTTON_WRAP_HEIGHT + SPACING_Y}px 0;
  width: ${SIZE.WIDTH_SIDE_PANEL}px;
  transition: transform ease-in-out 250ms;
  ${mixinBgPrimary}
  ${mixinShadowLLeft}
  
  .theme-dark & {
    box-shadow: inset 1px 0 0 0 rgba(255, 255, 255, 0.1), -4px 0 8px 0 rgba(0, 0, 0, 0.3);
  }
  
  /* stylelint-disable order/order */
  ${props => (props.$collapsed ? css`
    transform: translateX(100%);
    box-shadow: none !important;
  ` : mixinShadowLLeft)}
  
  /* stylelint-disable selector-class-pattern */
  .hasTopbar & {
    top: ${SIZE.HEIGHT_TOP_NAV}px;
  }
`;

export default function Ui(): JSX.Element | null {
  const visible = useVisible();
  const collapsed = useCollapsed();
  
  return visible ? <ScAside {...{
    $collapsed: collapsed,
    className: 'J_fixed_right_will_be_pushed_left',
    [DATA_KEY_J]: ''
  }}>
    <GlobalStyleOnBody />
    <ItemsTop />
    <ItemsBottom />
    <CollapseToggle />
  </ScAside> : null;
}
