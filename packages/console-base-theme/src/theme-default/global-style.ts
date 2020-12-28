import {
  createGlobalStyle
} from 'styled-components';

import {
  COLOR,
  TYPO,
  SHADOW
} from './_var';

export default createGlobalStyle`
  :root {
    --cb-color-text-brand: ${COLOR.TEXT_BRAND};
    --cb-color-text-accent: ${COLOR.TEXT_ACCENT};
    --cb-color-text-primary: ${COLOR.TEXT_PRIMARY};
    --cb-color-text-secondary: ${COLOR.TEXT_SECONDARY};
    --cb-color-text-tertiary: ${COLOR.TEXT_TERTIARY};
    --cb-color-text-disabled: ${COLOR.TEXT_DISABLED};
    --cb-color-text-info: ${COLOR.TEXT_INFO};
    --cb-color-text-success: ${COLOR.TEXT_SUCCESS};
    --cb-color-text-warning: ${COLOR.TEXT_WARNING};
    --cb-color-text-error: ${COLOR.TEXT_ERROR};
    --cb-color-text-danger: ${COLOR.TEXT_DANGER};
    --cb-color-text-title: ${COLOR.TEXT_TITLE};
    --cb-color-text-emphasis: ${COLOR.TEXT_EMPHASIS};
    --cb-color-text-code: ${COLOR.TEXT_CODE};
    --cb-color-border-brand: ${COLOR.BORDER_BRAND};
    --cb-color-border-accent: ${COLOR.BORDER_ACCENT};
    --cb-color-border-primary: ${COLOR.BORDER_PRIMARY};
    --cb-color-border-secondary: ${COLOR.BORDER_SECONDARY};
    --cb-color-border-tertiary: ${COLOR.BORDER_TERTIARY};
    --cb-color-border-disabled: ${COLOR.BORDER_DISABLED};
    --cb-color-border-help: ${COLOR.BORDER_HELP};
    --cb-color-border-info: ${COLOR.BORDER_INFO};
    --cb-color-border-success: ${COLOR.BORDER_SUCCESS};
    --cb-color-border-warning: ${COLOR.BORDER_WARNING};
    --cb-color-border-error: ${COLOR.BORDER_ERROR};
    --cb-color-border-danger: ${COLOR.BORDER_DANGER};
    --cb-color-bg-brand: ${COLOR.BG_BRAND};
    --cb-color-bg-accent: ${COLOR.BG_ACCENT};
    --cb-color-bg-primary: ${COLOR.BG_PRIMARY};
    --cb-color-bg-secondary: ${COLOR.BG_SECONDARY};
    --cb-color-bg-tertiary: ${COLOR.BG_TERTIARY};
    --cb-color-bg-disabled: ${COLOR.BG_DISABLED};
    --cb-color-bg-help: ${COLOR.BG_HELP};
    --cb-color-bg-info: ${COLOR.BG_INFO};
    --cb-color-bg-success: ${COLOR.BG_SUCCESS};
    --cb-color-bg-warning: ${COLOR.BG_WARNING};
    --cb-color-bg-error: ${COLOR.BG_ERROR};
    --cb-color-bg-danger: ${COLOR.BG_DANGER};
    --cb-color-link-primary: ${COLOR.LINK_PRIMARY};
    --cb-color-link-primary-visited: ${COLOR.LINK_PRIMARY_VISITED};
    --cb-color-link-primary-hover: ${COLOR.LINK_PRIMARY_HOVER};
    --cb-color-link-primary-active: ${COLOR.LINK_PRIMARY_ACTIVE};
    --cb-color-link-primary-disabled: ${COLOR.LINK_PRIMARY_DISABLED};
    --cb-color-link-secondary: ${COLOR.LINK_SECONDARY};
    --cb-color-link-secondary-visited: ${COLOR.LINK_SECONDARY_VISITED};
    --cb-color-link-secondary-hover: ${COLOR.LINK_SECONDARY_HOVER};
    --cb-color-link-secondary-active: ${COLOR.LINK_SECONDARY_ACTIVE};
    --cb-color-link-secondary-disabled: ${COLOR.LINK_SECONDARY_DISABLED};
    --cb-color-link-tertiary: ${COLOR.LINK_TERTIARY};
    --cb-color-link-tertiary-visited: ${COLOR.LINK_TERTIARY_VISITED};
    --cb-color-link-tertiary-hover: ${COLOR.LINK_TERTIARY_HOVER};
    --cb-color-link-tertiary-active: ${COLOR.LINK_TERTIARY_ACTIVE};
    --cb-color-link-tertiary-disabled: ${COLOR.LINK_TERTIARY_DISABLED};
    --cb-color-link-brand: ${COLOR.LINK_BRAND};
    --cb-color-link-brand-visited: ${COLOR.LINK_BRAND_VISITED};
    --cb-color-link-brand-hover: ${COLOR.LINK_BRAND_HOVER};
    --cb-color-link-brand-active: ${COLOR.LINK_BRAND_ACTIVE};
    --cb-color-link-brand-disabled: ${COLOR.LINK_BRAND_DISABLED};
    --cb-color-link-brand-secondary: ${COLOR.LINK_BRAND_SECONDARY};
    --cb-color-link-brand-secondary-visited: ${COLOR.LINK_BRAND_SECONDARY_VISITED};
    --cb-color-link-brand-secondary-hover: ${COLOR.LINK_BRAND_SECONDARY_HOVER};
    --cb-color-link-brand-secondary-active: ${COLOR.LINK_BRAND_SECONDARY_ACTIVE};
    --cb-color-link-brand-secondary-disabled: ${COLOR.LINK_BRAND_SECONDARY_DISABLED};
    --cb-color-input-placeholder: ${COLOR.INPUT_PLACEHOLDER};
    --cb-color-input-text: ${COLOR.INPUT_TEXT};
    --cb-color-input-border: ${COLOR.INPUT_BORDER};
    --cb-color-input-bg: ${COLOR.INPUT_BG};
    --cb-color-input-text-hover: ${COLOR.INPUT_TEXT_HOVER};
    --cb-color-input-border-hover: ${COLOR.INPUT_BORDER_HOVER};
    --cb-color-input-bg-hover: ${COLOR.INPUT_BG_HOVER};
    --cb-color-input-text-focus: ${COLOR.INPUT_TEXT_FOCUS};
    --cb-color-input-border-focus: ${COLOR.INPUT_BORDER_FOCUS};
    --cb-color-input-bg-focus: ${COLOR.INPUT_BG_FOCUS};
    --cb-color-input-text-disabled: ${COLOR.INPUT_TEXT_DISABLED};
    --cb-color-input-border-disabled: ${COLOR.INPUT_BORDER_DISABLED};
    --cb-color-input-bg-disabled: ${COLOR.INPUT_BG_DISABLED};
    --cb-typo-font-family-base: ${TYPO.FONT_FAMILY_BASE};
    --cb-typo-font-family-monospace: ${TYPO.FONT_FAMILY_MONOSPACE};
    --cb-shadow-m: ${SHADOW.M};
    --cb-shadow-m-up: ${SHADOW.M_UP};
    --cb-shadow-m-right: ${SHADOW.M_RIGHT};
    --cb-shadow-m-down: ${SHADOW.M_DOWN};
    --cb-shadow-m-left: ${SHADOW.M_LEFT};
    --cb-shadow-l: ${SHADOW.L};
    --cb-shadow-l-up: ${SHADOW.L_UP};
    --cb-shadow-l-right: ${SHADOW.L_RIGHT};
    --cb-shadow-l-down: ${SHADOW.L_DOWN};
    --cb-shadow-l-left: ${SHADOW.L_LEFT};
    --cb-shadow-xl: ${SHADOW.XL};
    --cb-shadow-xl-up: ${SHADOW.XL_UP};
    --cb-shadow-xl-right: ${SHADOW.XL_RIGHT};
    --cb-shadow-xl-down: ${SHADOW.XL_DOWN};
    --cb-shadow-xl-left: ${SHADOW.XL_LEFT};
  }
`;
