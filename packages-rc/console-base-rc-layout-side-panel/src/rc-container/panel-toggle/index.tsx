import React, {
  useState
} from 'react';
import styled, {
  css
} from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';

import intl from '../../intl';
import {
  useCollapsed,
  useHandleToggleCollapsed
} from '../../model';
import {
  SidePanelItemWrap,
  SidePanelItemButton,
  SidePanelItemTooltip
} from '../../rc';

interface IScProps {
  hovered?: boolean;
  collapsed: boolean;
}

const ScPanelToggle = styled(SidePanelItemWrap)<IScProps>`
  position: absolute;
  right: 0;
  bottom: 0;
  
  ${props => {
    if (!props.collapsed) {
      return null;
    }
    
    return props.hovered ? css`
      transform: translateX(-100%);
    ` : css`
      transform: translateX(-50%);
    `;
  }}
`;
const ScPanelToggleButton = styled(SidePanelItemButton)<IScProps>`
  ${props => (props.collapsed && !props.hovered ? css`
    padding-left: 4px;;
    text-align: left;
  ` : null)}
`;

export default function PanelToggle(): JSX.Element {
  const [stateHovered, setStateHovered] = useState(false);
  const collapsed = useCollapsed();
  const handleToggleCollapsed = useHandleToggleCollapsed();
  
  const title = intl(collapsed ? 'op:toggle_visible' : 'op:toggle_hidden');
  
  return <ScPanelToggle {...{
    hovered: stateHovered,
    collapsed
  }}>
    <ScPanelToggleButton {...{
      hovered: stateHovered,
      collapsed,
      active: collapsed,
      title,
      label: <Icon type="angle-right" rotate={collapsed ? 180 : undefined} />,
      onMouseEnter: () => setStateHovered(true),
      onMouseLeave: () => setStateHovered(false),
      onClick: handleToggleCollapsed
    }} />
    <SidePanelItemTooltip {...{
      visible: stateHovered,
      content: title
    }} />
  </ScPanelToggle>;
}