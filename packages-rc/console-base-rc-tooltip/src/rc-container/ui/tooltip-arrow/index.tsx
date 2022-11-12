import React from 'react';
import styled from 'styled-components';

import {
  ARROW_SQUARE_BORDER
} from '../../../const';
import {
  getTooltipArrowCssColor,
  getTooltipArrowCssPosition,
  getTooltipArrowCssRotate
} from '../../../util';
import {
  TooltipPlacement,
  TooltipTheme,
  useProps,
  useTooltipArrowStyleOffset
} from '../../../model';

interface IScProps {
  theme: TooltipTheme;
  placement: TooltipPlacement;
}

const ScTooltipArrow = styled.span<IScProps>`
  position: absolute;
  box-sizing: border-box;
  background-color: inherit;
  width: ${ARROW_SQUARE_BORDER}px;
  height: ${ARROW_SQUARE_BORDER}px;
  transition: all ease-in-out 250ms;
  ${props => getTooltipArrowCssPosition(props.placement)}
  ${props => getTooltipArrowCssRotate(props.placement)}
  ${props => getTooltipArrowCssColor(props.theme)}
`;

export default function TooltipArrow(): JSX.Element | null {
  const [{
    arrow,
    theme,
    placement
  }] = useProps();
  const tooltipArrowStyleOffset = useTooltipArrowStyleOffset();
  
  return arrow ? <ScTooltipArrow {...{
    theme,
    placement,
    style: tooltipArrowStyleOffset
  }} /> : null;
}