import {
  css
} from 'styled-components';

import {
  COLOR
} from '../theme-default';

export const mixinBgBrand = css`
  background-color: ${COLOR.BG_BRAND};
  background-color: var(--cb-color-bg-brand, ${COLOR.BG_BRAND});
`;
export const mixinBgAccent = css`
  background-color: ${COLOR.BG_ACCENT};
  background-color: var(--cb-color-bg-accent, ${COLOR.BG_ACCENT});
`;
export const mixinBgPrimary = css`
  background-color: ${COLOR.BG_PRIMARY};
  background-color: var(--cb-color-bg-primary, ${COLOR.BG_PRIMARY});
`;
export const mixinBgSecondary = css`
  background-color: ${COLOR.BG_SECONDARY};
  background-color: var(--cb-color-bg-secondary, ${COLOR.BG_SECONDARY});
`;
export const mixinBgTertiary = css`
  background-color: ${COLOR.BG_TERTIARY};
  background-color: var(--cb-color-bg-tertiary, ${COLOR.BG_TERTIARY});
`;
export const mixinBgDisabled = css`
  background-color: ${COLOR.BG_DISABLED};
  background-color: var(--cb-color-bg-disabled, ${COLOR.BG_DISABLED});
`;
export const mixinBgHelp = css`
  background-color: ${COLOR.BG_HELP};
  background-color: var(--cb-color-bg-help, ${COLOR.BG_HELP});
`;
export const mixinBgInfo = css`
  background-color: ${COLOR.BG_INFO};
  background-color: var(--cb-color-bg-info, ${COLOR.BG_INFO});
`;
export const mixinBgSuccess = css`
  background-color: ${COLOR.BG_SUCCESS};
  background-color: var(--cb-color-bg-success, ${COLOR.BG_SUCCESS});
`;
export const mixinBgWarning = css`
  background-color: ${COLOR.BG_WARNING};
  background-color: var(--cb-color-bg-warning, ${COLOR.BG_WARNING});
`;
export const mixinBgError = css`
  background-color: ${COLOR.BG_ERROR};
  background-color: var(--cb-color-bg-error, ${COLOR.BG_ERROR});
`;
export const mixinBgDanger = css`
  background-color: ${COLOR.BG_DANGER};
  background-color: var(--cb-color-bg-danger, ${COLOR.BG_DANGER});
`;
export const mixinBgBackdrop = css`
  background-color: ${COLOR.BG_BACKDROP};
  background-color: var(--cb-color-bg-backdrop, ${COLOR.BG_BACKDROP});
`;
