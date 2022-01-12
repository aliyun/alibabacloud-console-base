import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  ARROW_SIZE
} from '../const';
import {
  TooltipPlacement
} from '../model';

const ARROW_OFFSET = -ARROW_SIZE / 2;

const CSS_ARROW_POSITION = {
  [TooltipPlacement.TOP]: css`
  bottom: ${ARROW_OFFSET}px;
  left: 50%;
  margin-left: ${ARROW_OFFSET}px;
`,
  [TooltipPlacement.TOP_LEFT]: css`
  bottom: ${ARROW_OFFSET}px;
  left: 8px;
`,
  [TooltipPlacement.TOP_RIGHT]: css`
  right: 8px;
  bottom: ${ARROW_OFFSET}px;
`,
  [TooltipPlacement.BOTTOM]: css`
  top: ${ARROW_OFFSET}px;
  left: 50%;
  margin-left: ${ARROW_OFFSET}px;
`,
  [TooltipPlacement.BOTTOM_LEFT]: css`
  top: ${ARROW_OFFSET}px;
  left: 8px;
`,
  [TooltipPlacement.BOTTOM_RIGHT]: css`
  top: ${ARROW_OFFSET}px;
  right: 8px;
`,
  [TooltipPlacement.LEFT]: css`
  top: 50%;
  right: ${ARROW_OFFSET}px;
  margin-top: ${ARROW_OFFSET}px;
`,
  [TooltipPlacement.LEFT_TOP]: css`
  top: 8px;
  right: ${ARROW_OFFSET}px;
`,
  [TooltipPlacement.LEFT_BOTTOM]: css`
  right: ${ARROW_OFFSET}px;
  bottom: 8px;
`,
  [TooltipPlacement.RIGHT]: css`
  top: 50%;
  left: ${ARROW_OFFSET}px;
  margin-top: ${ARROW_OFFSET}px;
`,
  [TooltipPlacement.RIGHT_TOP]: css`
  top: 8px;
  left: ${ARROW_OFFSET}px;
`,
  [TooltipPlacement.RIGHT_BOTTOM]: css`
  bottom: 8px;
  left: ${ARROW_OFFSET}px;
`
};

export default function getTooltipArrowCssPosition(placement: TooltipPlacement): FlattenSimpleInterpolation | null {
  return CSS_ARROW_POSITION[placement] || null;
}