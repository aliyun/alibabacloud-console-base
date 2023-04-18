import React, {
  useState,
  useCallback
} from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinBgAccent,
  mixinTextWhite
} from '@alicloud/console-base-theme';
import useMouseEnterLeave from '@alicloud/react-hook-mouse-enter-leave';
import Icon from '@alicloud/console-base-rc-icon';

import {
  SPACING_Y
} from '../../const';
import intl from '../../intl';
import {
  useCollapsed,
  useItemsTop,
  useHandleCollapsedChange
} from '../../../model';
import {
  SidePanelItemWrap,
  SidePanelItemButton,
  SidePanelItemBadge,
  SidePanelItemTooltip
} from '../../rc';

interface IScProps {
  hovered?: boolean;
  collapsed: boolean;
}

const ScCollapseToggle = styled(SidePanelItemWrap)<IScProps>`
  position: absolute;
  right: 0;
  bottom: ${SPACING_Y}px;
  
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
const ScCollapseToggleButton = styled(SidePanelItemButton)<IScProps>`
  ${props => (props.active ? css`
    ${mixinBgAccent}
    ${mixinTextWhite}
    
    &:hover {
      ${mixinBgAccent}
      ${mixinTextWhite}
    }
  ` : null)}
  ${props => (props.collapsed && !props.hovered ? css`
    padding-left: 4px;;
    text-align: left;
  ` : null)}
`;

export default function PanelToggle(): JSX.Element {
  const [stateHovered, setStateHovered] = useState(false);
  const collapsed = useCollapsed();
  const unread = useItemsTop().some(v => v.unread);
  const handleToggleCollapsed = useHandleCollapsedChange();
  const [handleMouseEnter, handleMouseLeave] = useMouseEnterLeave(useCallback(() => {
    setStateHovered(true);
  }, [setStateHovered]), useCallback(() => {
    setStateHovered(false);
  }, [setStateHovered]));
  
  const title = intl(collapsed ? 'op:toggle_visible' : 'op:toggle_hidden');
  
  return <ScCollapseToggle {...{
    hovered: stateHovered,
    collapsed,
    onMouseLeave: handleMouseLeave
  }}>
    <ScCollapseToggleButton {...{
      hovered: stateHovered,
      collapsed,
      active: collapsed,
      title,
      label: <Icon type="angle-right" rotate={collapsed ? 180 : undefined} />,
      onMouseEnter: handleMouseEnter,
      onClick: handleToggleCollapsed
    }} />
    {collapsed && unread ? <SidePanelItemBadge unread alignLeft={!stateHovered} /> : null}
    <SidePanelItemTooltip {...{
      visible: stateHovered,
      content: title
    }} />
  </ScCollapseToggle>;
}
