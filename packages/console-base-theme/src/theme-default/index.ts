import {
  createGlobalStyle
} from 'styled-components';

import COLOR from './_var/color';
import TYPO from './_var/typo';
import SIZE from './_var/size';
import Z_INDEX from './_var/z-index';
import BORDER from './_var/border';
import SHADOW from './_var/shadow';

export default createGlobalStyle`
  :root {
    --cb-color-brand-aliyun: ${COLOR.BRAND_ALIYUN};
    --cb-color-text-error: ${COLOR.TEXT_ERROR};
    --cb-color-text-warn: ${COLOR.TEXT_WARN};
    --cb-color-text-success: ${COLOR.TEXT_SUCCESS};
    --cb-color-text-info: ${COLOR.TEXT_INFO};
    --cb-color-text-emphasis: ${COLOR.TEXT_EMPHASIS};
    --cb-color-text-code: ${COLOR.TEXT_CODE};
    --cb-color-text-title: ${COLOR.TEXT_TITLE};
    --cb-color-text-primary: ${COLOR.TEXT_PRIMARY};
    --cb-color-text-secondary: ${COLOR.TEXT_SECONDARY};
    --cb-color-text-caption: ${COLOR.TEXT_CAPTION};
    --cb-color-text-disabled: ${COLOR.TEXT_DISABLED};
    --cb-color-link-primary: ${COLOR.LINK_PRIMARY};
    --cb-color-link-primary-hover: ${COLOR.LINK_PRIMARY_HOVER};
    --cb-color-link-primary-active: ${COLOR.LINK_PRIMARY_ACTIVE};
    --cb-color-link-primary-visited: ${COLOR.LINK_PRIMARY_VISITED};
    --cb-color-link-primary-disabled: ${COLOR.LINK_PRIMARY_DISABLED};
    --cb-color-link-secondary: ${COLOR.LINK_SECONDARY};
    --cb-color-link-secondary-hover: ${COLOR.LINK_SECONDARY_HOVER};
    --cb-color-link-secondary-active: ${COLOR.LINK_SECONDARY_ACTIVE};
    --cb-color-link-secondary-visited: ${COLOR.LINK_SECONDARY_VISITED};
    --cb-color-link-secondary-disabled: ${COLOR.LINK_SECONDARY_DISABLED};
    --cb-color-line-accent: ${COLOR.LINE_ACCENT};
    --cb-color-line-error: ${COLOR.LINE_ERROR};
    --cb-color-line-divider: ${COLOR.LINE_DIVIDER};
    --cb-color-line-divider-faded: ${COLOR.LINE_DIVIDER_FADED};
    --cb-color-line-border: ${COLOR.LINE_BORDER};
    --cb-color-line-border-faded: ${COLOR.LINE_BORDER_FADED};
    --cb-color-line-border-hover: ${COLOR.LINE_BORDER_HOVER};
    --cb-color-line-border-hover-faded: ${COLOR.LINE_BORDER_HOVER_FADED};
    --cb-color-fill-light: ${COLOR.FILL_LIGHT};
    --cb-color-fill-light-faded: ${COLOR.FILL_LIGHT_FADED};
    --cb-color-fill-dark: ${COLOR.FILL_DARK};
    --cb-color-fill-dark-faded: ${COLOR.FILL_DARK_FADED};
    --cb-color-fill-darker: ${COLOR.FILL_DARKER};
    --cb-color-fill-darker-faded: ${COLOR.FILL_DARKER_FADED};
    --cb-color-fill-success: ${COLOR.FILL_SUCCESS};
    --cb-color-fill-success-faded: ${COLOR.FILL_SUCCESS_FADED};
    --cb-color-fill-warn: ${COLOR.FILL_WARN};
    --cb-color-fill-warn-faded: ${COLOR.FILL_WARN_FADED};
    --cb-color-fill-error: ${COLOR.FILL_ERROR};
    --cb-color-fill-error-faded: ${COLOR.FILL_ERROR_FADED};
    --cb-color-fill-info: ${COLOR.FILL_INFO};
    --cb-color-fill-info-faded: ${COLOR.FILL_INFO_FADED};
    --cb-color-fill-help: ${COLOR.FILL_HELP};
    --cb-color-fill-help-faded: ${COLOR.FILL_HELP_FADED};
    --cb-color-fill-main: ${COLOR.FILL_MAIN};
    --cb-color-fill-nav-level1: ${COLOR.FILL_NAV_LEVEL1};
    --cb-color-fill-nav-level2: ${COLOR.FILL_NAV_LEVEL2};
    --cb-color-fill-table-th: ${COLOR.FILL_TABLE_TH};
    --cb-color-fill-table-td: ${COLOR.FILL_TABLE_TD};
    --cb-color-fill-dialog: ${COLOR.FILL_DIALOG};
    --cb-color-fill-dialog-header: ${COLOR.FILL_DIALOG_HEADER};
    --cb-color-fill-dialog-footer: ${COLOR.FILL_DIALOG_FOOTER};
    --cb-color-fill-dialog-backdrop-faded: ${COLOR.FILL_DIALOG_BACKDROP_FADED};
    --cb-color-fill-input: ${COLOR.FILL_INPUT};
    --cb-color-fill-input-disabled: ${COLOR.FILL_INPUT_DISABLED};
    --cb-color-fill-dropdown: ${COLOR.FILL_DROPDOWN};
    --cb-typo-font-family-base: ${TYPO.FONT_FAMILY_BASE};
    --cb-typo-font-family-monospace: ${TYPO.FONT_FAMILY_MONOSPACE};
    --cb-border-normal: ${BORDER.NORMAL};
    --cb-border-normal-fade: ${BORDER.NORMAL_FADE};
    --cb-border-input-normal: ${BORDER.INPUT_NORMAL};
    --cb-border-input-hover: ${BORDER.INPUT_HOVER};
    --cb-border-input-focus: ${BORDER.INPUT_FOCUS};
    --cb-border-input-error: ${BORDER.INPUT_ERROR};
    --cb-border-input-disabled: ${BORDER.INPUT_DISABLED};
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

export {
  COLOR,
  TYPO,
  SIZE,
  Z_INDEX,
  BORDER,
  SHADOW
};
