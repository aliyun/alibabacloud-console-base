import React, {
  MouseEvent,
  useState,
  useCallback
} from 'react';

import useMouseEnterLeave from '@alicloud/react-hook-mouse-enter-leave';
import HtmlTrusted from '@alicloud/console-base-rc-html-trusted';

import {
  SidePanelItemProps,
  useCollapsed
} from '../../../model';
import {
  getValueByStatus,
  renderItemIcon
} from '../../util';
import {
  SidePanelItemWrap,
  SidePanelItemButton,
  SidePanelItemBadge,
  SidePanelItemTooltip
} from '../../rc';

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
  mark,
  tooltip,
  tooltipActive,
  tooltipAsHtml,
  tooltipAlign,
  tooltipDefaultVisible = false,
  onClick,
  onActiveChange,
  onMouseEnter,
  onMouseLeave,
  ...props
}: IProps): JSX.Element {
  const collapsed = useCollapsed();
  const [stateTooltipVisible, setStateTooltipVisible] = useState(tooltipDefaultVisible);
  const [handleMouseEnter, handleMouseLeave] = useMouseEnterLeave(useCallback(() => {
    setStateTooltipVisible(true);
    onMouseEnter?.();
  }, [setStateTooltipVisible, onMouseEnter]), useCallback(() => {
    setStateTooltipVisible(false);
    onMouseLeave?.();
  }, [setStateTooltipVisible, onMouseLeave]));
  const handleClick = useCallback((e: MouseEvent<HTMLElement>) => {
    onClick?.(e);
    onActiveChange?.(!active);
  }, [active, onClick, onActiveChange]);
  
  const finalTitle = getValueByStatus({
    valueNormal: title,
    valueActive: titleActive
  }, stateTooltipVisible, active);
  const finalIcon = getValueByStatus({
    valueNormal: icon,
    valueHovered: iconHovered,
    valueActive: iconActive,
    valueActiveHovered: iconActiveHovered
  }, stateTooltipVisible, active);
  const finalTooltip = getValueByStatus({
    valueNormal: tooltip,
    valueActive: tooltipActive
  }, stateTooltipVisible, active);
  
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
    <SidePanelItemBadge unread={unread} mark={mark} />
    {finalTooltip || finalTitle ? <SidePanelItemTooltip {...{
      visible: stateTooltipVisible && !collapsed,
      align: tooltipAlign,
      content: tooltipAsHtml && finalTooltip && typeof finalTooltip === 'string' ? <HtmlTrusted text={finalTooltip} /> : finalTooltip || finalTitle,
      onMouseEnter: handleMouseEnter
    }} /> : null}
  </SidePanelItemWrap>;
}
