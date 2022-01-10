import React, {
  CSSProperties
} from 'react';
import styled from 'styled-components';
import {
  CSSTransition
} from 'react-transition-group';

import {
  mixinBorderRadiusXs,
  mixinShadowLDown
} from '@alicloud/console-base-theme';

import {
  IPropsRcTooltip
} from '../../types';
import {
  ACTION_OFFSET_FROM_RIGHT,
  ACTION_SIZE,
  ETooltipPlacement,
  ETooltipTheme
} from '../../const';
import {
  getTooltipCssColors
} from '../../util';

import TooltipTitle from './tooltip-title';
import TooltipContent from './tooltip-content';
import TooltipArrow from './tooltip-arrow';
import TooltipActions from './tooltip-actions';

interface IPropsScTooltip {
  placement: ETooltipPlacement;
  theme: ETooltipTheme;
}

const ScTooltip = styled.div<IPropsScTooltip>`
  position: absolute;
  padding: 8px 16px;
  box-sizing: border-box;
  font-size: 12px;
  transition: all ease-in-out 200ms;
  ${mixinShadowLDown}
  ${mixinBorderRadiusXs}
  ${props => getTooltipCssColors(props.theme)}

  &.enter,
  &.exit-active {
    opacity: 0.33;
    transform: scale(0.95);
  }
`;

/**
 * 纯展示，无逻辑
 */
export default function Tooltip({
  style,
  title,
  content,
  visible,
  placement = ETooltipPlacement.TOP,
  theme = ETooltipTheme.NORMAL,
  arrow = true,
  width,
  onConfig,
  onClose,
  ...props
}: IPropsRcTooltip): JSX.Element {
  const finalStyle: CSSProperties = {
    ...style
  };
  const contentStyle: CSSProperties = width && width > 0 ? {
    width
  } : {
    whiteSpace: 'nowrap'
  };
  
  if (onConfig || onClose) {
    const n = onConfig && onClose ? 2 : 1;
    
    finalStyle.paddingRight = ACTION_OFFSET_FROM_RIGHT * 2 + ACTION_SIZE * n;
  }
  
  return <CSSTransition {...{
    in: visible,
    unmountOnExit: true,
    timeout: {
      enter: 16,
      exit: 200
    }
  }}>
    <ScTooltip {...{
      placement,
      theme,
      ...props,
      style: finalStyle
    }}>
      {title ? <TooltipTitle>{title}</TooltipTitle> : null}
      <TooltipContent style={contentStyle}>{content}</TooltipContent>
      {arrow ? <TooltipArrow {...{
        placement,
        theme
      }} /> : null}
      <TooltipActions {...{
        onConfig,
        onClose
      }} />
    </ScTooltip>
  </CSSTransition>;
}
