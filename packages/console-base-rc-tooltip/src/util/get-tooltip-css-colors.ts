import {
  FlattenSimpleInterpolation
} from 'styled-components';

import {
  ETooltipTheme,
  CSS_COLORS_TOOLTIP
} from '../const';

export default function getTooltipCssColors(theme: ETooltipTheme): FlattenSimpleInterpolation | null {
  return CSS_COLORS_TOOLTIP[theme] || null;
}