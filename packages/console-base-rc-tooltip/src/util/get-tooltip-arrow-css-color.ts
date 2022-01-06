import {
  FlattenSimpleInterpolation
} from 'styled-components';

import {
  ETooltipTheme,
  CSS_ARROW_BORDER
} from '../const';

export default function getTooltipArrowCssColor(theme: ETooltipTheme): FlattenSimpleInterpolation | null {
  return CSS_ARROW_BORDER[theme];
}