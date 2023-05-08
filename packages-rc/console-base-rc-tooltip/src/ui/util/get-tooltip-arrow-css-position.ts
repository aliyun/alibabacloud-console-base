import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  ARROW_SQUARE_BORDER
} from '../../const';
import {
  TooltipPlacement
} from '../../model';

const POSITION_ADJUSTMENT = -ARROW_SQUARE_BORDER / 2;

const CSS_ARROW_POSITION = {
  /**
   * +-------------------------+
   * |                         |
   * +------------▼------------+
   */
  [TooltipPlacement.TOP]: css`
  bottom: ${POSITION_ADJUSTMENT}px;
  left: 50%;
  margin-left: ${POSITION_ADJUSTMENT}px;
`,
  /**
   * +-------------------------+
   * |                         |
   * +--▼-——-------------------+
   */
  [TooltipPlacement.TOP_LEFT]: css`
  bottom: ${POSITION_ADJUSTMENT}px;
`,
  /**
   * +-------------------------+
   * |                         |
   * +---——-----------------▼--+
   */
  [TooltipPlacement.TOP_RIGHT]: css`
  bottom: ${POSITION_ADJUSTMENT}px;
`,
  /**
   * +------------▲------------+
   * |                         |
   * +---——--------------------+
   */
  [TooltipPlacement.BOTTOM]: css`
  top: ${POSITION_ADJUSTMENT}px;
  left: 50%;
  margin-left: ${POSITION_ADJUSTMENT}px;
`,
  /**
   * +-▲-----------------------+
   * |                         |
   * +---——--------------------+
   */
  [TooltipPlacement.BOTTOM_LEFT]: css`
  top: ${POSITION_ADJUSTMENT}px;
`,
  /**
   * +-----------------------▲-+
   * |                         |
   * +---——--------------------+
   */
  [TooltipPlacement.BOTTOM_RIGHT]: css`
  top: ${POSITION_ADJUSTMENT}px;
`,
  /**
   * +-------------------------+
   * |                         |
   * |                         |▶︎
   * |                         |
   * +---——--------------------+
   */
  [TooltipPlacement.LEFT]: css`
  top: 50%;
  right: ${POSITION_ADJUSTMENT}px;
  margin-top: ${POSITION_ADJUSTMENT}px;
`,
  /**
   * +-------------------------+
   * |                         |▶
   * |                         |
   * |                         |
   * +---——--------------------+
   */
  [TooltipPlacement.LEFT_TOP]: css`
  right: ${POSITION_ADJUSTMENT}px;
`,
  /**
   * +-------------------------+
   * |                         |
   * |                         |
   * |                         |▶
   * +---——--------------------+
   */
  [TooltipPlacement.LEFT_BOTTOM]: css`
  right: ${POSITION_ADJUSTMENT}px;
`,
  /**
   *  +-------------------------+
   *  |                         |
   * ◀︎|                         |
   *  |                         |
   *  +---——--------------------+
   */
  [TooltipPlacement.RIGHT]: css`
  top: 50%;
  left: ${POSITION_ADJUSTMENT}px;
  margin-top: ${POSITION_ADJUSTMENT}px;
`,
  /**
   *  +-------------------------+
   * ◀|                         |
   *  |                         |
   *  |                         |
   *  +---——--------------------+
   */
  [TooltipPlacement.RIGHT_TOP]: css`
  left: ${POSITION_ADJUSTMENT}px;
`,
  /**
   *  +-------------------------+
   *  |                         |
   *  |                         |
   * ◀|                         |
   *  +---——--------------------+
   */
  [TooltipPlacement.RIGHT_BOTTOM]: css`
  left: ${POSITION_ADJUSTMENT}px;
`
};

export default function getTooltipArrowCssPosition(placement: TooltipPlacement): FlattenSimpleInterpolation {
  return CSS_ARROW_POSITION[placement];
}
