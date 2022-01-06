import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinBgPrimary,
  mixinBgAccent,
  mixinBgInverse,
  mixinBorderPrimary,
  mixinBorderPrimaryRight,
  mixinBorderPrimaryBottom,
  mixinTextSecondary,
  mixinTextWhite,
  mixinTextInverse
} from '@alicloud/console-base-theme';

import {
  ETooltipTheme
} from './enum';

type TThemeCssMap = Record<ETooltipTheme, FlattenSimpleInterpolation | null>;

export const CSS_COLORS_TOOLTIP: TThemeCssMap = {
  [ETooltipTheme.NORMAL]: css`
    ${mixinBgPrimary}
    ${mixinBorderPrimary}
    ${mixinTextSecondary}
  `,
  [ETooltipTheme.ACCENT]: css`
    ${mixinBgAccent}
    ${mixinTextWhite}
  `,
  [ETooltipTheme.INVERSE]: css`
    opacity: 0.8;
    ${mixinBgInverse}
    ${mixinTextInverse}
  `
};

export const CSS_ARROW_BORDER: TThemeCssMap = {
  [ETooltipTheme.NORMAL]: css`
    ${mixinBorderPrimaryRight}
    ${mixinBorderPrimaryBottom}
  `,
  [ETooltipTheme.ACCENT]: null,
  [ETooltipTheme.INVERSE]: null
};
