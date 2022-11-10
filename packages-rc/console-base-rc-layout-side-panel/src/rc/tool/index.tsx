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
import ToolWrap from '../tool-wrap';
import ToolButton from '../tool-button';
import ToolUnread from '../tool-unread';
import ToolTooltip from '../tool-tooltip';

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
  onClick,
  onActiveChange,
  ...props
}: IProps): JSX.Element {
  const [tooltipVisible, tooltipShow, tooltipHide] = useTooltipVisible();
  const handleClick = useCallback((e: MouseEvent<HTMLElement>) => {
    onClick?.(e);
    onActiveChange?.(!active);
  }, [active, onClick, onActiveChange]);
  
  const tooltipContent = tooltip || title;
  
  return <ToolWrap {...{
    className,
    style,
    onMouseEnter: tooltipShow,
    onMouseLeave: tooltipHide
  }}>
    <ToolButton {...{
      ...props,
      active,
      title,
      label: getItemIcon(icon) || title,
      onClick: handleClick
    }} />
    <ToolUnread unread={unread} />
    {tooltipContent ? <ToolTooltip {...{
      visible: tooltipVisible,
      content: tooltipContent
    }} /> : null}
  </ToolWrap>;
}