import {
  css
} from 'styled-components';

import {
  COLOR
} from '../var';

export const mixinBgTransparent = css`
  background-color: ${COLOR.BG_TRANSPARENT};
  background-color: var(--cb-color-bg-transparent, ${COLOR.BG_TRANSPARENT});
`;
export const mixinBgWhite = css`
  background-color: ${COLOR.BG_WHITE};
  background-color: var(--cb-color-bg-white, ${COLOR.BG_WHITE});
`;
export const mixinBgBlack = css`
  background-color: ${COLOR.BG_BLACK};
  background-color: var(--cb-color-bg-black, ${COLOR.BG_BLACK});
`;
export const mixinBgInverse = css`
  background-color: ${COLOR.BG_INVERSE};
  background-color: var(--cb-color-bg-inverse, ${COLOR.BG_INVERSE});
`;
export const mixinBgBrand = css`
  background-color: ${COLOR.BG_BRAND};
  background-color: var(--cb-color-bg-brand, ${COLOR.BG_BRAND});
`;
export const mixinBgBrandHover = css`
  background-color: ${COLOR.BG_BRAND_HOVER};
  background-color: var(--cb-color-bg-brand-hover, ${COLOR.BG_BRAND_HOVER});
`;
export const mixinBgBrandActive = css`
  background-color: ${COLOR.BG_BRAND_ACTIVE};
  background-color: var(--cb-color-bg-brand-active, ${COLOR.BG_BRAND_ACTIVE});
`;
export const mixinBgAccent = css`
  background-color: ${COLOR.BG_ACCENT};
  background-color: var(--cb-color-bg-accent, ${COLOR.BG_ACCENT});
`;
export const mixinBgAccentHover = css`
  background-color: ${COLOR.BG_ACCENT_HOVER};
  background-color: var(--cb-color-bg-accent-hover, ${COLOR.BG_ACCENT_HOVER});
`;
export const mixinBgAccentActive = css`
  background-color: ${COLOR.BG_ACCENT_ACTIVE};
  background-color: var(--cb-color-bg-accent-active, ${COLOR.BG_ACCENT_ACTIVE});
`;
export const mixinBgPrimary = css`
  background-color: ${COLOR.BG_PRIMARY};
  background-color: var(--cb-color-bg-primary, ${COLOR.BG_PRIMARY});
`;
export const mixinBgSecondary = css`
  background-color: ${COLOR.BG_SECONDARY};
  background-color: var(--cb-color-bg-secondary, ${COLOR.BG_SECONDARY});
`;
export const mixinBgSecondaryFade = css`
  background-color: ${COLOR.BG_SECONDARY_FADE};
  background-color: var(--cb-color-bg-secondary-fade, ${COLOR.BG_SECONDARY_FADE});
`;
export const mixinBgTertiary = css`
  background-color: ${COLOR.BG_TERTIARY};
  background-color: var(--cb-color-bg-tertiary, ${COLOR.BG_TERTIARY});
`;
export const mixinBgTertiaryFade = css`
  background-color: ${COLOR.BG_TERTIARY_FADE};
  background-color: var(--cb-color-bg-tertiary-fade, ${COLOR.BG_TERTIARY_FADE});
`;
export const mixinBgDisabled = css`
  background-color: ${COLOR.BG_DISABLED};
  background-color: var(--cb-color-bg-disabled, ${COLOR.BG_DISABLED});
`;
export const mixinBgHelp = css`
  background-color: ${COLOR.BG_HELP};
  background-color: var(--cb-color-bg-help, ${COLOR.BG_HELP});
`;
export const mixinBgHelpTint = css`
  background-color: ${COLOR.BG_HELP_TINT};
  background-color: var(--cb-color-bg-help-tint, ${COLOR.BG_HELP_TINT});
`;
export const mixinBgHelpTintFade = css`
  background-color: ${COLOR.BG_HELP_TINT_FADE};
  background-color: var(--cb-color-bg-help-tint-fade, ${COLOR.BG_HELP_TINT_FADE});
`;
export const mixinBgInfo = css`
  background-color: ${COLOR.BG_INFO};
  background-color: var(--cb-color-bg-info, ${COLOR.BG_INFO});
`;
export const mixinBgInfoTint = css`
  background-color: ${COLOR.BG_INFO_TINT};
  background-color: var(--cb-color-bg-info-tint, ${COLOR.BG_INFO_TINT});
`;
export const mixinBgInfoTintFade = css`
  background-color: ${COLOR.BG_INFO_TINT_FADE};
  background-color: var(--cb-color-bg-info-tint-fade, ${COLOR.BG_INFO_TINT_FADE});
`;
export const mixinBgSuccess = css`
  background-color: ${COLOR.BG_SUCCESS};
  background-color: var(--cb-color-bg-success, ${COLOR.BG_SUCCESS});
`;
export const mixinBgSuccessTint = css`
  background-color: ${COLOR.BG_SUCCESS_TINT};
  background-color: var(--cb-color-bg-success-tint, ${COLOR.BG_SUCCESS_TINT});
`;
export const mixinBgSuccessTintFade = css`
  background-color: ${COLOR.BG_SUCCESS_TINT_FADE};
  background-color: var(--cb-color-bg-success-tint-fade, ${COLOR.BG_SUCCESS_TINT_FADE});
`;
export const mixinBgWarning = css`
  background-color: ${COLOR.BG_WARNING};
  background-color: var(--cb-color-bg-warning, ${COLOR.BG_WARNING});
`;
export const mixinBgWarningTint = css`
  background-color: ${COLOR.BG_WARNING_TINT};
  background-color: var(--cb-color-bg-warning-tint, ${COLOR.BG_WARNING_TINT});
`;
export const mixinBgWarningTintFade = css`
  background-color: ${COLOR.BG_WARNING_TINT_FADE};
  background-color: var(--cb-color-bg-warning-tint-fade, ${COLOR.BG_WARNING_TINT_FADE});
`;
export const mixinBgError = css`
  background-color: ${COLOR.BG_ERROR};
  background-color: var(--cb-color-bg-error, ${COLOR.BG_ERROR});
`;
export const mixinBgErrorTint = css`
  background-color: ${COLOR.BG_ERROR_TINT};
  background-color: var(--cb-color-bg-error-tint, ${COLOR.BG_ERROR_TINT});
`;
export const mixinBgErrorTintFade = css`
  background-color: ${COLOR.BG_ERROR_TINT_FADE};
  background-color: var(--cb-color-bg-error-tint-fade, ${COLOR.BG_ERROR_TINT_FADE});
`;
export const mixinBgDanger = css`
  background-color: ${COLOR.BG_DANGER};
  background-color: var(--cb-color-bg-danger, ${COLOR.BG_DANGER});
`;
export const mixinBgBackdrop = css`
  background-color: ${COLOR.BG_BACKDROP};
  background-color: var(--cb-color-bg-backdrop, ${COLOR.BG_BACKDROP});
`;
