import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinBorderSecondaryRight,
  mixinBorderSecondaryBottom
} from '@alicloud/console-base-theme';

import {
  TooltipTheme
} from '../model';

const CSS_ARROW_BORDER = {
  [TooltipTheme.NORMAL]: css`
  ${mixinBorderSecondaryRight}
  ${mixinBorderSecondaryBottom}
`,
  [TooltipTheme.ACCENT]: null,
  [TooltipTheme.INVERSE]: null
};

export default function getTooltipArrowCssColor(theme: TooltipTheme): FlattenSimpleInterpolation | null {
  return CSS_ARROW_BORDER[theme];
}