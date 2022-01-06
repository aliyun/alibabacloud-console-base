import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  ETooltipPlacement,
  ARROW_SIZE
} from '../const';

const ARROW_OFFSET = -ARROW_SIZE / 2;

export default function getTooltipArrowCssPosition(placement: ETooltipPlacement): FlattenSimpleInterpolation | null {
  switch (placement) {
    case ETooltipPlacement.TOP:
      return css`
        bottom: ${ARROW_OFFSET}px;
        left: 50%;
        margin-left: ${ARROW_OFFSET}px;
      `;
    case ETooltipPlacement.TOP_LEFT:
      return css`
        bottom: ${ARROW_OFFSET}px;
        left: 8px;
      `;
    case ETooltipPlacement.TOP_RIGHT:
      return css`
        right: 8px;
        bottom: ${ARROW_OFFSET}px;
      `;
    case ETooltipPlacement.BOTTOM:
      return css`
        top: ${ARROW_OFFSET}px;
        left: 50%;
        margin-left: ${ARROW_OFFSET}px;
      `;
    case ETooltipPlacement.BOTTOM_LEFT:
      return css`
        top: ${ARROW_OFFSET}px;
        left: 8px;
      `;
    case ETooltipPlacement.BOTTOM_RIGHT:
      return css`
        top: ${ARROW_OFFSET}px;
        right: 8px;
      `;
    case ETooltipPlacement.LEFT:
      return css`
        top: 50%;
        right: ${ARROW_OFFSET}px;
        margin-top: ${ARROW_OFFSET}px;
      `;
    case ETooltipPlacement.LEFT_TOP:
      return css`
        top: 8px;
        right: ${ARROW_OFFSET}px;
      `;
    case ETooltipPlacement.LEFT_BOTTOM:
      return css`
        right: ${ARROW_OFFSET}px;
        bottom: 8px;
      `;
    case ETooltipPlacement.RIGHT:
      return css`
        top: 50%;
        left: ${ARROW_OFFSET}px;
        margin-top: ${ARROW_OFFSET}px;
      `;
    case ETooltipPlacement.RIGHT_TOP:
      return css`
        top: 8px;
        left: ${ARROW_OFFSET}px;
      `;
    case ETooltipPlacement.RIGHT_BOTTOM:
      return css`
        bottom: 8px;
        left: ${ARROW_OFFSET}px;
      `;
    default:
      return null;
  }
}