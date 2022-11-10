import React from 'react';
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
  ToolWrap,
  ToolButton,
  ToolTooltip
} from '../../rc';
import {
  useTooltipVisible
} from '../../hook';

interface IScProps {
  hovered?: boolean;
  collapsed: boolean;
}

const ScPanelToggle = styled(ToolWrap)<IScProps>`
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
const ScPanelToggleButton = styled(ToolButton)<IScProps>`
  ${props => (props.collapsed && !props.hovered ? css`
    padding-left: 4px;;
    text-align: left;
  ` : null)}
`;

export default function PanelToggle(): JSX.Element {
  const [tooltipVisible, tooltipShow, tooltipHide] = useTooltipVisible();
  const collapsed = useCollapsed();
  const handleToggleCollapsed = useHandleToggleCollapsed();
  
  const title = intl(collapsed ? 'op:toggle_visible' : 'op:toggle_hidden');
  
  return <ScPanelToggle {...{
    hovered: tooltipVisible,
    collapsed,
    onMouseEnter: tooltipShow,
    onMouseLeave: tooltipHide
  }}>
    <ScPanelToggleButton {...{
      hovered: tooltipVisible,
      collapsed,
      active: collapsed,
      title,
      label: <Icon type="angle-right" rotate={collapsed ? 180 : undefined} />,
      onClick: handleToggleCollapsed
    }} />
    <ToolTooltip {...{
      visible: tooltipVisible,
      content: title
    }} />
  </ScPanelToggle>;
}