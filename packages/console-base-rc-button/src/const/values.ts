import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinTextTitle,
  mixinTextPrimary,
  mixinTextSecondary,
  mixinTextAccent,
  mixinTextBrand,
  mixinTextInfo,
  mixinBgBrand,
  mixinBgAccent,
  mixinBgTertiary,
  mixinBgSecondary,
  mixinBorderSecondary,
  mixinBorderAccent,
  mixinBorderBrand
} from '@alicloud/console-base-theme';

import {
  EButtonThemeColor,
  EButtonThemeColorBd,
  EButtonThemeColorBg
} from './enum';

export const FG_MAP: Record<EButtonThemeColor, FlattenSimpleInterpolation> = {
  [EButtonThemeColor.INHERIT]: css`
    color: inherit;
  `,
  [EButtonThemeColor.BLACK]: mixinTextTitle,
  [EButtonThemeColor.NORMAL]: mixinTextPrimary,
  [EButtonThemeColor.GRAY]: mixinTextSecondary,
  [EButtonThemeColor.LINK_GRAY]: mixinTextSecondary,
  [EButtonThemeColor.WHITE]: css`
    color: #fff;
  `,
  [EButtonThemeColor.LINK]: mixinTextAccent,
  [EButtonThemeColor.BRAND]: mixinTextBrand,
  [EButtonThemeColor.PRIMARY]: mixinTextInfo,
  [EButtonThemeColor.PRIMARY_SHADE]: mixinTextInfo // TODO
};

export const BG_MAP: Record<EButtonThemeColorBg, FlattenSimpleInterpolation> = {
  [EButtonThemeColorBg.LIGHTER]: mixinBgSecondary,
  [EButtonThemeColorBg.LIGHT]: mixinBgSecondary,
  [EButtonThemeColorBg.NORMAL]: mixinBgSecondary,
  [EButtonThemeColorBg.DARK]: mixinBgTertiary,
  [EButtonThemeColorBg.DARKER]: mixinBgTertiary,
  [EButtonThemeColorBg.WHITE]: css`
    background-color: #fff;
  `,
  [EButtonThemeColorBg.BRAND]: mixinBgBrand,
  [EButtonThemeColorBg.BRAND_LIGHT]: mixinBgBrand,
  [EButtonThemeColorBg.PRIMARY]: mixinBgAccent,
  [EButtonThemeColorBg.PRIMARY_SHADE]: mixinBgAccent
};

export const BD_MAP: Record<EButtonThemeColorBd, FlattenSimpleInterpolation> = {
  [EButtonThemeColorBd.TRANSPARENT]: css`
    border-color: transparent;
  `,
  [EButtonThemeColorBd.GRAY_ALPHA]: css`
    border-color: rgba(0, 0, 0, 0.1);
  `,
  [EButtonThemeColorBd.GRAY_ALPHA_SHADE]: css`
    border-color: rgba(0, 0, 0, 0.25);
  `,
  [EButtonThemeColorBd.GRAY]: css`
    border-color: rgba(0, 0, 0, 0.25);
  `,
  [EButtonThemeColorBd.SHADE]: mixinBorderSecondary,
  [EButtonThemeColorBd.PRIMARY]: mixinBorderAccent,
  [EButtonThemeColorBd.PRIMARY_SHADE]: mixinBorderAccent,
  [EButtonThemeColorBd.BRAND]: mixinBorderBrand
};
