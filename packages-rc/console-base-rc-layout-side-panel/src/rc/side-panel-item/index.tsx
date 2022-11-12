import React, {
  MouseEvent,
  useCallback
} from 'react';

import {
  SidePanelItemProps
} from '../../model';
import {
  useTooltipVisible
} from '../../hook';
import SidePanelItemWrap from '../side-panel-item-wrap';
import SidePanelItemButton from '../side-panel-item-button';
import SidePanelItemUnread from '../side-panel-item-unread';
import SidePanelItemSidePanelItemtip from '../side-panel-item-tooltip';

import {
  getItemIcon
} from './util';

interface IProps extends SidePanelItemProps {}

export default function SidePanelItem({
  className,
  style,
  active,
  title,
  icon,
  unread,
  tooltip,
  tooltipAlign,
  onClick,
  onActiveChange,
  onMouseEnter,
  onMouseLeave,
  ...props
}: IProps): JSX.Element {
  const [tooltipVisible, tooltipShow, tooltipHide] = useTooltipVisible();
  const handleMouseEnter = useCallback((e: MouseEvent<HTMLElement>) => {
    tooltipShow();
    onMouseEnter?.(e);
  }, [tooltipShow, onMouseEnter]);
  const handleMouseLeave = useCallback((e: MouseEvent<HTMLElement>) => {
    tooltipHide();
    onMouseLeave?.(e);
  }, [tooltipHide, onMouseLeave]);
  const handleClick = useCallback((e: MouseEvent<HTMLElement>) => {
    onClick?.(e);
    onActiveChange?.(!active);
  }, [active, onClick, onActiveChange]);
  
  const tooltipContent = tooltip || title;
  
  return <SidePanelItemWrap {...{
    className,
    style,
    onMouseLeave: handleMouseLeave
  }}>
    <SidePanelItemButton {...{
      ...props,
      active,
      title,
      label: getItemIcon(icon) || title,
      onMouseEnter: handleMouseEnter,
      onClick: handleClick
    }} />
    <SidePanelItemUnread unread={unread} />
    {tooltipContent ? <SidePanelItemSidePanelItemtip {...{
      visible: tooltipVisible,
      align: tooltipAlign,
      content: tooltipContent
    }} /> : null}
  </SidePanelItemWrap>;
}