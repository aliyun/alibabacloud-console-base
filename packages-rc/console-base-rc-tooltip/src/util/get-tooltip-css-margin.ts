import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  SPACING_WITHOUT_ARROW,
  SPACING_WITH_ARROW
} from '../const';
import {
  TooltipPlacement
} from '../model';

export default function getTooltipCssMargin(placement: TooltipPlacement, arrow: boolean): FlattenSimpleInterpolation | null {
  const spacing = arrow ? SPACING_WITH_ARROW : SPACING_WITHOUT_ARROW;
  
  switch (placement) {
    case TooltipPlacement.TOP:
    case TooltipPlacement.TOP_LEFT:
    case TooltipPlacement.TOP_RIGHT:
      return css`
        margin-bottom: ${spacing}px;
      `;
    case TooltipPlacement.BOTTOM:
    case TooltipPlacement.BOTTOM_LEFT:
    case TooltipPlacement.BOTTOM_RIGHT:
      return css`
        margin-top: ${spacing}px;
      `;
    case TooltipPlacement.LEFT:
    case TooltipPlacement.LEFT_TOP:
    case TooltipPlacement.LEFT_BOTTOM:
      return css`
        margin-right: ${spacing}px;
      `;
    case TooltipPlacement.RIGHT:
    case TooltipPlacement.RIGHT_TOP:
    case TooltipPlacement.RIGHT_BOTTOM:
      return css`
        margin-left: ${spacing}px;
      `;
    default:
      return null;
  }
}