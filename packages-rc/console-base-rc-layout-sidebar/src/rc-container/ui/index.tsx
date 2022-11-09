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

import UiHeader from './ui-header';
import UiBody from './ui-body';
import UiFooter from './ui-footer';
import UiKnob from './ui-knob';

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
  ${props => {
    if (props.collapsed) {
      return css`
        transform: translateX(-100%);
      `;
    }
  }}
  
  &:hover {
    ${mixinShadowMRight}
  }
`;

export default function Ui(): JSX.Element {
  const {
    onToggleCollapsed
  } = useProps();
  const collapsed = useCollapsed();
  
  return <ScUi collapsed={collapsed}>
    <UiHeader />
    <UiBody />
    <UiFooter />
    {onToggleCollapsed ? <UiKnob /> : null}
  </ScUi>;
}
