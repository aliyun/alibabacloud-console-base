import React from 'react';
import styled from 'styled-components';
import {
  CSSTransition
} from 'react-transition-group';

import {
  Z_INDEX,
  mixinBorderRadiusXs,
  mixinShadowLDown
} from '@alicloud/console-base-theme';

import {
  getTooltipCssColors
} from '../../util';
import {
  TooltipPlacement,
  TooltipTheme,
  useProps,
  useVisible,
  useTooltipStyle
} from '../../model';

import TooltipTitle from './tooltip-title';
import TooltipContent from './tooltip-content';
import TooltipAutoClosing from './tooltip-auto-closing';
import TooltipActions from './tooltip-actions';
import TooltipArrow from './tooltip-arrow';

interface IPropsScTooltip {
  arrow: boolean;
  placement: TooltipPlacement;
  theme: TooltipTheme;
}

const ScTooltip = styled.div<IPropsScTooltip>`
  position: absolute;
  z-index: ${Z_INDEX.POPUP};
  padding: 8px 16px;
  box-sizing: border-box;
  width: max-content;
  min-width: 120px;
  max-width: 400px;
  font-size: 12px;
  transition: all ease-in-out 250ms;
  ${mixinShadowLDown}
  ${mixinBorderRadiusXs}
  ${props => getTooltipCssColors(props.theme)}
  
  &.enter,
  &.exit-active {
    opacity: 0.5;
    margin: 0;
  }
`;

export default function Tooltip(): JSX.Element {
  const [{
    placement,
    theme,
    arrow
  }, propsDom] = useProps();
  const visible = useVisible();
  const tooltipStyle = useTooltipStyle();
  
  return <CSSTransition {...{
    in: visible,
    unmountOnExit: true,
    timeout: {
      enter: 16,
      exit: 200
    }
  }}>
    <ScTooltip {...{
      arrow,
      placement,
      theme,
      ...propsDom,
      style: tooltipStyle
    }}>
      <TooltipTitle />
      <TooltipContent />
      <TooltipAutoClosing />
      <TooltipActions />
      <TooltipArrow />
    </ScTooltip>
  </CSSTransition>;
}
