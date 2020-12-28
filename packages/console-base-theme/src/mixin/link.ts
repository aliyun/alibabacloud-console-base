import {
  css
} from 'styled-components';

import {
  COLOR
} from '../theme-default';

const linkCommon = css`
  transition: all linear 0.25s;
  
  &:link {
    text-decoration: none;
  }
  
  &:hover {
    text-decoration: underline;
  }
`;

export const mixinLinkPrimary = css`
  color: ${COLOR.LINK_PRIMARY};
  color: var(--cb-color-link-primary, ${COLOR.LINK_PRIMARY});
  ${linkCommon};
  
  &:visited {
    color: ${COLOR.LINK_PRIMARY_VISITED};
    color: var(--cb-color-link-primary-visited, ${COLOR.LINK_PRIMARY_VISITED});
  }
  
  &:hover {
    color: ${COLOR.LINK_PRIMARY_HOVER};
    color: var(--cb-color-link-primary-hover, ${COLOR.LINK_PRIMARY_HOVER});
  }
  
  &:active {
    color: ${COLOR.LINK_PRIMARY_ACTIVE};
    color: var(--cb-color-link-primary-active, ${COLOR.LINK_PRIMARY_ACTIVE});
  }
  
  &:disabled {
    color: ${COLOR.LINK_PRIMARY_DISABLED};
    color: var(--cb-color-link-primary-disabled, ${COLOR.LINK_PRIMARY_DISABLED});
  }
`;
export const mixinLinkSecondary = css`
  color: ${COLOR.LINK_SECONDARY};
  color: var(--cb-color-link-secondary, ${COLOR.LINK_SECONDARY});
  ${linkCommon};
  
  &:visited {
    color: ${COLOR.LINK_SECONDARY_VISITED};
    color: var(--cb-color-link-secondary-visited, ${COLOR.LINK_SECONDARY_VISITED});
  }
  
  &:hover {
    color: ${COLOR.LINK_SECONDARY_HOVER};
    color: var(--cb-color-link-secondary-hover, ${COLOR.LINK_SECONDARY_HOVER});
  }
  
  &:active {
    color: ${COLOR.LINK_SECONDARY_ACTIVE};
    color: var(--cb-color-link-secondary-active, ${COLOR.LINK_SECONDARY_ACTIVE});
  }
  
  &:disabled {
    color: ${COLOR.LINK_SECONDARY_DISABLED};
    color: var(--cb-color-link-secondary-disabled, ${COLOR.LINK_SECONDARY_DISABLED});
  }
`;
export const mixinLinkTertiary = css`
  color: ${COLOR.LINK_TERTIARY};
  color: var(--cb-color-link-tertiary, ${COLOR.LINK_TERTIARY});
  ${linkCommon};
  
  &:visited {
    color: ${COLOR.LINK_TERTIARY_VISITED};
    color: var(--cb-color-link-tertiary-visited, ${COLOR.LINK_TERTIARY_VISITED});
  }
  
  &:hover {
    color: ${COLOR.LINK_TERTIARY_HOVER};
    color: var(--cb-color-link-tertiary-hover, ${COLOR.LINK_TERTIARY_HOVER});
  }
  
  &:active {
    color: ${COLOR.LINK_TERTIARY_ACTIVE};
    color: var(--cb-color-link-tertiary-active, ${COLOR.LINK_TERTIARY_ACTIVE});
  }
  
  &:disabled {
    color: ${COLOR.LINK_TERTIARY_DISABLED};
    color: var(--cb-color-link-tertiary-disabled, ${COLOR.LINK_TERTIARY_DISABLED});
  }
`;
export const mixinLinkBrand = css`
  color: ${COLOR.LINK_BRAND};
  color: var(--cb-color-link-brand, ${COLOR.LINK_BRAND});
  ${linkCommon};
  
  &:visited {
    color: ${COLOR.LINK_BRAND_VISITED};
    color: var(--cb-color-link-brand-visited, ${COLOR.LINK_BRAND_VISITED});
  }
  
  &:hover {
    color: ${COLOR.LINK_BRAND_HOVER};
    color: var(--cb-color-link-brand-hover, ${COLOR.LINK_BRAND_HOVER});
  }
  
  &:active {
    color: ${COLOR.LINK_BRAND_ACTIVE};
    color: var(--cb-color-link-brand-active, ${COLOR.LINK_BRAND_ACTIVE});
  }
  
  &:disabled {
    color: ${COLOR.LINK_BRAND_DISABLED};
    color: var(--cb-color-link-brand-disabled, ${COLOR.LINK_BRAND_DISABLED});
  }
`;
export const mixinLinkBrandSecondary = css`
  color: ${COLOR.LINK_BRAND_SECONDARY};
  color: var(--cb-color-link-brand-secondary, ${COLOR.LINK_BRAND_SECONDARY});
  ${linkCommon};
  
  &:visited {
    color: ${COLOR.LINK_BRAND_SECONDARY_VISITED};
    color: var(--cb-color-link-brand-secondary-visited, ${COLOR.LINK_BRAND_SECONDARY_VISITED});
  }
  
  &:hover {
    color: ${COLOR.LINK_BRAND_SECONDARY_HOVER};
    color: var(--cb-color-link-brand-secondary-hover, ${COLOR.LINK_BRAND_SECONDARY_HOVER});
  }
  
  &:active {
    color: ${COLOR.LINK_BRAND_SECONDARY_ACTIVE};
    color: var(--cb-color-link-brand-secondary-active, ${COLOR.LINK_BRAND_SECONDARY_ACTIVE});
  }
  
  &:disabled {
    color: ${COLOR.LINK_BRAND_SECONDARY_DISABLED};
    color: var(--cb-color-link-brand-secondary-disabled, ${COLOR.LINK_BRAND_SECONDARY_DISABLED});
  }
`;
