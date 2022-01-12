import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  TooltipPlacement
} from '../model';

function getRotateDegree(placement: TooltipPlacement): number {
  switch (placement) {
    case TooltipPlacement.TOP:
    case TooltipPlacement.TOP_LEFT:
    case TooltipPlacement.TOP_RIGHT:
      return 45;
    case TooltipPlacement.RIGHT:
    case TooltipPlacement.RIGHT_TOP:
    case TooltipPlacement.RIGHT_BOTTOM:
      return 135;
    case TooltipPlacement.BOTTOM:
    case TooltipPlacement.BOTTOM_LEFT:
    case TooltipPlacement.BOTTOM_RIGHT:
      return 225;
    case TooltipPlacement.LEFT:
    case TooltipPlacement.LEFT_TOP:
    case TooltipPlacement.LEFT_BOTTOM:
      return 315;
    default:
      return 45;
  }
}

export default function getTooltipArrowCssRotate(placement: TooltipPlacement): FlattenSimpleInterpolation {
  return css`
    transform: rotate(${getRotateDegree(placement)}deg);
  `;
}