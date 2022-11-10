import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinBgPrimary,
  mixinBgAccent,
  mixinBgInverse,
  mixinBorderPrimary,
  mixinTextSecondary,
  mixinTextWhite,
  mixinTextInverse
} from '@alicloud/console-base-theme';

import {
  TooltipTheme
} from '../model';

const CSS_COLORS_TOOLTIP = {
  [TooltipTheme.NORMAL]: css`
  ${mixinBgPrimary}
  ${mixinBorderPrimary}
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