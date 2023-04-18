import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  useVisible,
  useCollapsed
} from '../model';

import {
  DATA_KEY_J
} from './const';
import {
  Aside,
  GlobalStyleOnBody
} from './rc';
import {
  ItemsTop,
  ItemsBottom,
  CollapseToggle
} from './rc-container';

interface IScProps {
  collapsed: boolean;
}

const ScUi = styled(Aside)<IScProps>`
  ${props => (props.collapsed ? css`
    transform: translateX(100%);
  ` : null)}
`;

export default function Ui(): JSX.Element | null {
  const visible = useVisible();
  const collapsed = useCollapsed();
  
  return visible ? <ScUi {...{
    collapsed,
    [DATA_KEY_J]: ''
  }}>
    <GlobalStyleOnBody />
    <ItemsTop />
    <ItemsBottom />
    <CollapseToggle />
  </ScUi> : null;
}
