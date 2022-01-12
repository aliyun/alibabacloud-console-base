import React from 'react';
import styled from 'styled-components';

import {
  ARROW_SIZE
} from '../../../const';
import {
  getTooltipArrowCssColor,
  getTooltipArrowCssPosition,
  getTooltipArrowCssRotate
} from '../../../util';
import {
  TooltipPlacement,
  TooltipTheme,
  useProps
} from '../../../model';

interface IScProps {
  theme: TooltipTheme;
  placement: TooltipPlacement;
}

const ScTooltipArrow = styled.span<IScProps>`
  position: absolute;
  box-sizing: border-box;
  background-color: inherit;
  width: ${ARROW_SIZE}px;
  height: ${ARROW_SIZE}px;
  transition: all ease-in-out 250ms;
  ${props => getTooltipArrowCssPosition(props.placement)}
  ${props => getTooltipArrowCssRotate(props.placement)}
  ${props => getTooltipArrowCssColor(props.theme)}
`;

export default function TooltipArrow(): JSX.Element | null {
  const {
    arrow,
    theme,
    placement
  } = useProps();
  
  return arrow ? <ScTooltipArrow {...{
    theme,
    placement
  }} /> : null;
}