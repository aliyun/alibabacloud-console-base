import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  SIZE,
  mixinBgBrand,
  mixinTextWhite
} from '@alicloud/console-base-theme';
import Button, {
  ButtonProps,
  ButtonSize,
  ButtonTheme
} from '@alicloud/console-base-rc-button';

const STRIPE_WIDTH = SIZE.HEIGHT_TOP_NAV * 0.4;
const STRIPE_HEIGHT = 2;

const STRIPE_LEFT = (SIZE.HEIGHT_TOP_NAV - STRIPE_WIDTH) / 2;
const STRIPE_TOP1 = STRIPE_LEFT + 2; // 第一条线的 top
const STRIPE_LEFT_ACTIVE = Math.round(STRIPE_LEFT + 0.1464466 * STRIPE_WIDTH); // 为了 active 后仍可居中，需要加上 (1 - 1/√2) / 2 * 原宽
const STRIPE_SPACING = (SIZE.HEIGHT_TOP_NAV - STRIPE_HEIGHT * 3 - STRIPE_TOP1 * 2) / 2;
const STRIPE_TOP2 = STRIPE_TOP1 + STRIPE_HEIGHT + STRIPE_SPACING;
const STRIPE_TOP3 = STRIPE_TOP1 + (STRIPE_HEIGHT + STRIPE_SPACING) * 2;

const ScDockButton = styled(Button)`
  position: relative;
  width: ${SIZE.HEIGHT_TOP_NAV}px;
  height: ${SIZE.HEIGHT_TOP_NAV}px;
  ${mixinBgBrand}
  ${mixinTextWhite}
  
  span {
    display: block;
    position: absolute;
    left: ${STRIPE_LEFT}px;
    width: ${STRIPE_WIDTH}px;
    height: ${STRIPE_HEIGHT}px;
    background: #fff;
    transition: all 0.3s ease-out;
    
    &:first-child {
      top: ${STRIPE_TOP1}px;
      transform-origin: left center;
      transform: rotate(0);
    }
    
    &:nth-child(2) {
      top: ${STRIPE_TOP2}px;;
    }
    
    &:nth-child(3) {
      top: ${STRIPE_TOP3}px;;
      transform-origin: left center;
      transform: rotate(0);
    }
  }
  
  ${props => (props.active ? css`
    span {
      left: ${STRIPE_LEFT_ACTIVE}px;
    }
    
    span:first-child {
      transform: rotate(45deg);
    }
    
    span:nth-child(2) {
      opacity: 0
    }
    
    span:nth-child(3) {
      transform: rotate(-45deg);
    }
  ` : null)}
`;

/**
 * 程序坞按钮，这种三道杠有个学名叫「汉堡包菜单图标」hamburger-menu-icon，可以有很多动效
 * 
 * - https://freefrontend.com/css-hamburger-menu-icons/
 * - https://codemyui.com/tag/hamburger-menu/
 * - https://codepen.io/designcouch/pen/Atyop
 */
export default function DockButton(props: ButtonProps): JSX.Element {
  return <ScDockButton {...{
    spm: 'dock',
    ...props,
    label: <>
      <span />
      <span />
      <span />
    </>,
    size: ButtonSize.NONE,
    theme: ButtonTheme.NONE,
    borderRadius: false,
    noShadow: true
  }} />;
}
