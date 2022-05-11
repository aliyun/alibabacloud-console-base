import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinBgPrimary,
  mixinBgAccent,
  mixinBgInverse,
  mixinBorderTertiary,
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
  ${mixinBorderTertiary}
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

export default function getTooltipCssColors(theme: TooltipTheme): FlattenSimpleInterpolation | null {
  return CSS_COLORS_TOOLTIP[theme] || null;
}