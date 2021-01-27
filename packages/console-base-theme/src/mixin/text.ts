import {
  css
} from 'styled-components';

import {
  COLOR
} from '../var';

export const mixinTextTransparent = css`
  color: ${COLOR.TEXT_TRANSPARENT};
  color: var(--cb-color-text-transparent, ${COLOR.TEXT_TRANSPARENT});
`;
export const mixinTextWhite = css`
  color: ${COLOR.TEXT_WHITE};
  color: var(--cb-color-text-white, ${COLOR.TEXT_WHITE});
`;
export const mixinTextBlack = css`
  color: ${COLOR.TEXT_BLACK};
  color: var(--cb-color-text-black, ${COLOR.TEXT_BLACK});
`;
export const mixinTextInverse = css`
  color: ${COLOR.TEXT_INVERSE};
  color: var(--cb-color-text-inverse, ${COLOR.TEXT_INVERSE});
`;
export const mixinTextBrand = css`
  color: ${COLOR.TEXT_BRAND};
  color: var(--cb-color-text-brand, ${COLOR.TEXT_BRAND});
`;
export const mixinTextBrandHover = css`
  color: ${COLOR.TEXT_BRAND_HOVER};
  color: var(--cb-color-text-brand-hover, ${COLOR.TEXT_BRAND_HOVER});
`;
export const mixinTextBrandActive = css`
  color: ${COLOR.TEXT_BRAND_ACTIVE};
  color: var(--cb-color-text-brand-active, ${COLOR.TEXT_BRAND_ACTIVE});
`;
export const mixinTextAccent = css`
  color: ${COLOR.TEXT_ACCENT};
  color: var(--cb-color-text-accent, ${COLOR.TEXT_ACCENT});
`;
export const mixinTextAccentHover = css`
  color: ${COLOR.TEXT_ACCENT_HOVER};
  color: var(--cb-color-text-accent-hover, ${COLOR.TEXT_ACCENT_HOVER});
`;
export const mixinTextAccentActive = css`
  color: ${COLOR.TEXT_ACCENT_ACTIVE};
  color: var(--cb-color-text-accent-active, ${COLOR.TEXT_ACCENT_ACTIVE});
`;
export const mixinTextPrimary = css`
  color: ${COLOR.TEXT_PRIMARY};
  color: var(--cb-color-text-primary, ${COLOR.TEXT_PRIMARY});
`;
export const mixinTextSecondary = css`
  color: ${COLOR.TEXT_SECONDARY};
  color: var(--cb-color-text-secondary, ${COLOR.TEXT_SECONDARY});
`;
export const mixinTextTertiary = css`
  color: ${COLOR.TEXT_TERTIARY};
  color: var(--cb-color-text-tertiary, ${COLOR.TEXT_TERTIARY});
`;
export const mixinTextDisabled = css`
  color: ${COLOR.TEXT_DISABLED};
  color: var(--cb-color-text-disabled, ${COLOR.TEXT_DISABLED});
`;
export const mixinTextHelp = css`
  color: ${COLOR.TEXT_HELP};
  color: var(--cb-color-text-help, ${COLOR.TEXT_HELP});
`;
export const mixinTextInfo = css`
  color: ${COLOR.TEXT_INFO};
  color: var(--cb-color-text-info, ${COLOR.TEXT_INFO});
`;
export const mixinTextSuccess = css`
  color: ${COLOR.TEXT_SUCCESS};
  color: var(--cb-color-text-success, ${COLOR.TEXT_SUCCESS});
`;
export const mixinTextWarning = css`
  color: ${COLOR.TEXT_WARNING};
  color: var(--cb-color-text-warning, ${COLOR.TEXT_WARNING});
`;
export const mixinTextError = css`
  color: ${COLOR.TEXT_ERROR};
  color: var(--cb-color-text-error, ${COLOR.TEXT_ERROR});
`;
export const mixinTextDanger = css`
  color: ${COLOR.TEXT_DANGER};
  color: var(--cb-color-text-danger, ${COLOR.TEXT_DANGER});
`;
export const mixinTextEmphasis = css`
  color: ${COLOR.TEXT_EMPHASIS};
  color: var(--cb-color-text-emphasis, ${COLOR.TEXT_EMPHASIS});
`;
export const mixinTextCode = css`
  color: ${COLOR.TEXT_CODE};
  color: var(--cb-color-text-code, ${COLOR.TEXT_CODE});
`;