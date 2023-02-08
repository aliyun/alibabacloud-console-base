import React, {
  MouseEvent,
  useState,
  useCallback
} from 'react';

import useMouseEnterLeave from '@alicloud/react-hook-mouse-enter-leave';

import {
  SidePanelItemProps
} from '../../../model';
import {
  getValueByStatus,
  renderItemIcon
} from '../../util';
import SidePanelItemWrap from '../side-panel-item-wrap';
import SidePanelItemButton from '../side-panel-item-button';
import SidePanelItemUnread from '../side-panel-item-unread';
import SidePanelItemTooltip from '../side-panel-item-tooltip';

interface IProps extends SidePanelItemProps {}

export default function SidePanelItem({
  // id style className 在外层
  id,
  className,
  style,
  active,
  title,
  titleActive,
  icon,
  iconHovered,
  iconActive,
  iconActiveHovered,
  unread,
  tooltip,
  tooltipActive,
  tooltipAsHtml,
  tooltipAlign,
  onClick,
  onActiveChange,
  onMouseEnter,
  onMouseLeave,
  ...props
}: IProps): JSX.Element {
  const [stateHovered, setStateHovered] = useState(false);
  const [handleMouseEnter, handleMouseLeave] = useMouseEnterLeave(useCallback(() => {
    setStateHovered(true);
    onMouseEnter?.();
  }, [setStateHovered, onMouseEnter]), useCallback(() => {
    setStateHovered(false);
    onMouseLeave?.();
  }, [setStateHovered, onMouseLeave]));
  const handleClick = useCallback((e: MouseEvent<HTMLElement>) => {
    onClick?.(e);
    onActiveChange?.(!active);
  }, [active, onClick, onActiveChange]);
  
  const finalTitle = getValueByStatus({
    valueNormal: title,
    valueActive: titleActive
  }, stateHovered, active);
  const finalIcon = getValueByStatus({
    valueNormal: icon,
    valueHovered: iconHovered,
    valueActive: iconActive,
    valueActiveHovered: iconActiveHovered
  }, stateHovered, active);
  const finalTooltip = getValueByStatus({
    valueNormal: tooltip,
    valueActive: tooltipActive
  }, stateHovered, active);
  
  return <SidePanelItemWrap {...{
    id,
    className,
    style,
    onMouseLeave: handleMouseLeave
  }}>
    <SidePanelItemButton {...{
      ...props,
      active,
      title,
      label: renderItemIcon(finalIcon) || title,
      onMouseEnter: handleMouseEnter,
      onClick: handleClick
    }} />
    <SidePanelItemUnread unread={unread} />
    {finalTooltip || finalTitle ? <SidePanelItemTooltip {...{
      visible: stateHovered,
      align: tooltipAlign,
      content: tooltipAsHtml && finalTooltip && typeof finalTooltip === 'string' ? <span dangerouslySetInnerHTML={{
        __html: finalTooltip
      }} /> : finalTooltip || finalTitle,
      onMouseEnter: handleMouseEnter
    }} /> : null}
  </SidePanelItemWrap>;
}