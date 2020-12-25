import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  COLOR,
  typo
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
  [EButtonThemeColor.BLACK]: typo.textTitle,
  [EButtonThemeColor.NORMAL]: typo.textPrimary,
  [EButtonThemeColor.GRAY]: typo.textSecondary,
  [EButtonThemeColor.LINK_GRAY]: typo.textSecondary,
  [EButtonThemeColor.WHITE]: css`
    color: #fff;
  `,
  [EButtonThemeColor.LINK]: typo.textAccent,
  [EButtonThemeColor.BRAND]: css`
    color: ${COLOR.BRAND_ALIYUN};
    color: var(--cb-color-brand-aliyun, ${COLOR.BRAND_ALIYUN});
  `,
  [EButtonThemeColor.PRIMARY]: typo.textInfo,
  [EButtonThemeColor.PRIMARY_SHADE]: typo.textInfo // TODO
};

export const BG_MAP: Record<EButtonThemeColorBg, FlattenSimpleInterpolation> = {
  [EButtonThemeColorBg.LIGHTER]: css`
    background-color: ${COLOR.FILL_LIGHT};
    background-color: var(--cb-color-fill-light, ${COLOR.FILL_LIGHT});
  `,
  [EButtonThemeColorBg.LIGHT]: css`
    background-color: ${COLOR.FILL_LIGHT};
    background-color: var(--cb-color-fill-light, ${COLOR.FILL_LIGHT});
  `,
  [EButtonThemeColorBg.NORMAL]: css`
    background-color: ${COLOR.FILL_NAV_LEVEL2};
    background-color: var(--cb-color-fill-nav-level2, ${COLOR.FILL_NAV_LEVEL2});
  `,
  [EButtonThemeColorBg.DARK]: css`
    background-color: ${COLOR.FILL_DARK};
    background-color: var(--cb-color-fill-dark, ${COLOR.FILL_DARK});
  `,
  [EButtonThemeColorBg.DARKER]: css`
    background-color: ${COLOR.FILL_DARKER};
    background-color: var(--cb-color-fill-darker, ${COLOR.FILL_DARKER});
  `,
  [EButtonThemeColorBg.WHITE]: css`
    background-color: #fff;
  `,
  [EButtonThemeColorBg.BRAND]: css`
    background-color: ${COLOR.FILL_BRAND};
    background-color: var(--cb-color-fill-brand, ${COLOR.FILL_BRAND});
  `,
  [EButtonThemeColorBg.BRAND_LIGHT]: css`
    background-color: ${COLOR.FILL_BRAND};
    background-color: var(--cb-color-fill-brand, ${COLOR.FILL_BRAND});
  `,
  [EButtonThemeColorBg.PRIMARY]: css`
    background-color: ${COLOR.FILL_ACCENT};
    background-color: var(--cb-color-fill-accent, ${COLOR.FILL_ACCENT});
  `,
  [EButtonThemeColorBg.PRIMARY_SHADE]: css`
    background-color: ${COLOR.FILL_ACCENT};
    background-color: var(--cb-color-fill-accent, ${COLOR.FILL_ACCENT});
  `
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
  [EButtonThemeColorBd.SHADE]: css`
    border-color: ${COLOR.LINE_BORDER};
    border-color: var(--cb-color-line-border, ${COLOR.LINE_BORDER});
  `,
  [EButtonThemeColorBd.PRIMARY]: css`
    border-color: ${COLOR.LINE_ACCENT};
    border-color: var(--cb-color-line-accent, ${COLOR.LINE_ACCENT});
  `,
  [EButtonThemeColorBd.PRIMARY_SHADE]: css`
    border-color: ${COLOR.LINE_ACCENT};
    border-color: var(--cb-color-line-accent, ${COLOR.LINE_ACCENT});
  `,
  [EButtonThemeColorBd.BRAND]: css`
    border-color: ${COLOR.LINE_BRAND};
    border-color: var(--cb-color-line-brand, ${COLOR.LINE_BRAND});
  `
};
