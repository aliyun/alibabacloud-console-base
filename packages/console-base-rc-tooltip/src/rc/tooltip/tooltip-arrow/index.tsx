import React from 'react';
import styled from 'styled-components';

import {
  ETooltipPlacement,
  ETooltipTheme,
  ARROW_SIZE
} from '../../../const';
import {
  getTooltipArrowCssColor,
  getTooltipArrowCssPosition
} from '../../../util';

interface IProps {
  theme: ETooltipTheme;
  placement: ETooltipPlacement;
}

function getRotateDegree(placement: ETooltipPlacement): number {
  switch (placement) {
    case ETooltipPlacement.TOP:
    case ETooltipPlacement.TOP_LEFT:
    case ETooltipPlacement.TOP_RIGHT:
      return 45;
    case ETooltipPlacement.RIGHT:
    case ETooltipPlacement.RIGHT_TOP:
    case ETooltipPlacement.RIGHT_BOTTOM:
      return 135;
    case ETooltipPlacement.BOTTOM:
    case ETooltipPlacement.BOTTOM_LEFT:
    case ETooltipPlacement.BOTTOM_RIGHT:
      return 225;
    case ETooltipPlacement.LEFT:
    case ETooltipPlacement.LEFT_TOP:
    case ETooltipPlacement.LEFT_BOTTOM:
      return 315;
    default:
      return 45;
  }
}

const ScTooltipArrow = styled.span<IProps>`
  position: absolute;
  box-sizing: border-box;
  background-color: inherit;
  width: ${ARROW_SIZE}px;
  height: ${ARROW_SIZE}px;
  transform: rotate(${props => getRotateDegree(props.placement)}deg);
  transition: all ease-in-out 200ms;
  ${props => getTooltipArrowCssPosition(props.placement)}
  ${props => getTooltipArrowCssColor(props.theme)}
`;

export default function TooltipArrow(props: IProps): JSX.Element {
  return <ScTooltipArrow {...props} />;
}