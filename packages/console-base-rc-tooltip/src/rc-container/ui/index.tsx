import React from 'react';
import styled from 'styled-components';
import {
  CSSTransition
} from 'react-transition-group';

import {
  mixinBorderRadiusXs,
  mixinShadowLDown
} from '@alicloud/console-base-theme';

import {
  getTooltipCssColors,
  getTooltipCssMargin
} from '../../util';
import {
  TooltipPlacement,
  TooltipTheme,
  useProps
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
  padding: 8px 16px;
  box-sizing: border-box;
  width: max-content;
  min-width: 120px;
  max-width: 400px;
  font-size: 12px;
  transition: all ease-in-out 250ms;
  ${mixinShadowLDown}
  ${mixinBorderRadiusXs}
  ${props => getTooltipCssMargin(props.placement, props.arrow)}
  ${props => getTooltipCssColors(props.theme)}
  
  &.enter,
  &.exit-active {
    opacity: 0.5;
    margin: 0;
  }
`;

export default function Tooltip(): JSX.Element {
  const [{
    visible,
    placement,
    theme,
    arrow
  }, propsDom] = useProps();
  
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
      ...propsDom
    }}>
      <TooltipTitle />
      <TooltipContent />
      <TooltipAutoClosing />
      <TooltipActions />
      <TooltipArrow />
    </ScTooltip>
  </CSSTransition>;
}
