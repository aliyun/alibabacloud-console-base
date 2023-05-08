import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinBgPrimary,
  mixinBgAccent,
  mixinBgInverse,
  mixinBorderSecondary,
  mixinTextSecondary,
  mixinTextWhite,
  mixinTextInverse
} from '@alicloud/console-base-theme';

import {
  TooltipTheme
} from '../../model';

const CSS_COLORS_TOOLTIP = {
  [TooltipTheme.NORMAL]: css`
  ${mixinBgPrimary}
  ${mixinBorderSecondary}
  ${mixinTextSecondary}
`,
  [TooltipTheme.ACCENT]: css`
  ${mixinBgAccent}
  ${mixinTextWhite}
`,
  [TooltipTheme.INVERSE]: css`
  opacity: 0.8;
  ${mixinBgInverse}
  ${mixinTextInverse}
`
};

export default function getTooltipCssColors(theme: TooltipTheme): FlattenSimpleInterpolation {
  return CSS_COLORS_TOOLTIP[theme];
}
