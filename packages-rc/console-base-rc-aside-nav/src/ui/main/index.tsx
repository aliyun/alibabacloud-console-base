import React from 'react';
import styled from 'styled-components';

import {
  mixinBgPrimary,
  mixinBorderPrimaryRight,
  mixinBorderTransparentRight,
  mixinShadowMRight
} from '@alicloud/console-base-theme';

import {
  useCollapsed,
  useHandleToggleHoveredFalse,
  useHandleToggleHoveredTrue,
  useHovered
} from '../../model';
import {
  UiHeader,
  UiBody,
  UiFooter,
  UiKnob
} from '../rc-container';

interface IScPropsMain {
  $hovered: boolean;
  $collapsed: boolean;
}
interface IScPropsTheNav {
  $collapsed: boolean;
}

const ScMain = styled.div<IScPropsMain>`
  height: 100%;
  transform: translateX(${props => (props.$collapsed ? '-100%' : '0')});
  transition: all linear 200ms;
  ${mixinBgPrimary}
  ${props => (props.$hovered ? mixinShadowMRight : null)}
`;
const ScTheNav = styled.div<IScPropsTheNav>`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${props => (props.$collapsed ? mixinBorderTransparentRight : mixinBorderPrimaryRight)}
`;

export default function Main(): JSX.Element {
  const hovered = useHovered();
  const collapsed = useCollapsed();
  const handleToggleHoveredTrue = useHandleToggleHoveredTrue();
  const handleToggleHoveredFalse = useHandleToggleHoveredFalse();
  
  return <ScMain {...{
    $hovered: hovered,
    $collapsed: collapsed,
    onMouseEnter: handleToggleHoveredTrue,
    onMouseLeave: handleToggleHoveredFalse
  }}>
    <ScTheNav $collapsed={collapsed}>
      <UiHeader />
      <UiBody />
      <UiFooter />
    </ScTheNav>
    <UiKnob />
  </ScMain>;
}
