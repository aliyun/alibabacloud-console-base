import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  useCollapsed
} from '../model';
import {
  Aside
} from '../rc';
import {
  GlobalStyleOnBody,
  PanelItemsTop,
  PanelItemsBottom,
  PanelToggle
} from '../rc-container';

interface IScProps {
  collapsed: boolean;
}

const ScUi = styled(Aside)<IScProps>`
  ${props => (props.collapsed ? css`
    transform: translateX(100%);
  ` : null)}
`;

export default function Ui(): JSX.Element {
  const collapsed = useCollapsed();
  
  return <ScUi collapsed={collapsed}>
    <GlobalStyleOnBody />
    <PanelItemsTop />
    <PanelItemsBottom />
    <PanelToggle />
  </ScUi>;
}
