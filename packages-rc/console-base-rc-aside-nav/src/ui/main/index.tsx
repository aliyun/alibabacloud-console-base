import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinBgPrimary,
  mixinBorderPrimaryRight,
  mixinShadowMRight
} from '@alicloud/console-base-theme';

import {
  useCollapsed,
  useProps
} from '../../model';
import {
  UiHeader,
  UiBody,
  UiFooter,
  UiKnob
} from '../rc-container';

interface IScProps {
  collapsed: boolean;
}

const ScUi = styled.div<IScProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  transform: translateX(${props => (props.collapsed ? '-100%' : '0')});
  transition: all linear 200ms;
  ${mixinBgPrimary}
  ${mixinBorderPrimaryRight}
  ${props => (props.collapsed ? css`
    transform: translateX(-100%);
    ` : null)}
  
  &:hover {
    ${mixinShadowMRight}
  }
`;

export default function Main(): JSX.Element {
  const {
    onCollapsedChange
  } = useProps();
  const collapsed = useCollapsed();
  
  return <ScUi collapsed={collapsed}>
    <UiHeader />
    <UiBody />
    <UiFooter />
    {onCollapsedChange ? <UiKnob /> : null}
  </ScUi>;
}
