import {
  createGlobalStyle
} from 'styled-components';

import COLOR from './_var/color';
import TYPO from './_var/typo';
import SIZE from './_var/size';
import Z_INDEX from './_var/z-index';

export default createGlobalStyle`
  :root {
    --cb-color-brand-aliyun: ${COLOR.BRAND_ALIYUN};
    --cb-color-text-error: ${COLOR.TEXT_ERROR};
    --cb-color-text-warn: ${COLOR.TEXT_WARN};
    --cb-color-text-success: ${COLOR.TEXT_SUCCESS};
    --cb-color-text-info: ${COLOR.TEXT_INFO};
    --cb-color-text-emphasis: ${COLOR.TEXT_EMPHASIS};
    --cb-color-text-title: ${COLOR.TEXT_TITLE};
    --cb-color-text-primary: ${COLOR.TEXT_PRIMARY};
    --cb-color-text-secondary: ${COLOR.TEXT_SECONDARY};
    --cb-color-text-caption: ${COLOR.TEXT_CAPTION};
    --cb-color-text-disabled: ${COLOR.TEXT_DISABLED};
    --cb-color-link-primary: ${COLOR.LINK_PRIMARY};
    --cb-color-link-primary-hovered: ${COLOR.LINK_PRIMARY_HOVERED};
    --cb-color-link-primary-active: ${COLOR.LINK_PRIMARY_ACTIVE};
    --cb-color-link-primary-visited: ${COLOR.LINK_PRIMARY_VISITED};
    --cb-color-link-primary-disabled: ${COLOR.LINK_PRIMARY_DISABLED};
    --cb-color-link-secondary: ${COLOR.LINK_SECONDARY};
    --cb-color-link-secondary-hovered: ${COLOR.LINK_SECONDARY_HOVERED};
    --cb-color-link-secondary-active: ${COLOR.LINK_SECONDARY_ACTIVE};
    --cb-color-link-secondary-visited: ${COLOR.LINK_SECONDARY_VISITED};
    --cb-color-link-secondary-disabled: ${COLOR.LINK_SECONDARY_DISABLED};
    --cb-color-line-divider: ${COLOR.LINE_DIVIDER};
    --cb-color-line-divider-faded: ${COLOR.LINE_DIVIDER_FADED};
    --cb-color-line-border: ${COLOR.LINE_BORDER};
    --cb-color-line-border-faded: ${COLOR.LINE_BORDER_FADED};
    --cb-color-line-border-hovered: ${COLOR.LINE_BORDER_HOVERED};
    --cb-color-line-border-hovered-faded: ${COLOR.LINE_BORDER_HOVERED_FADED};
    --cb-color-fill-main: ${COLOR.FILL_MAIN};
    --cb-color-fill-nav-level1: ${COLOR.FILL_NAV_LEVEL1};
    --cb-color-fill-nav-level2: ${COLOR.FILL_NAV_LEVEL2};
    --cb-color-fill-table-th: ${COLOR.FILL_TABLE_TH};
    --cb-color-fill-table-td: ${COLOR.FILL_TABLE_TD};
    --cb-color-fill-dialog: ${COLOR.FILL_DIALOG};
    --cb-color-fill-dialog-header: ${COLOR.FILL_DIALOG_HEADER};
    --cb-color-fill-dialog-footer: ${COLOR.FILL_DIALOG_FOOTER};
    --cb-color-fill-dialog-backdrop-faded: ${COLOR.FILL_DIALOG_BACKDROP_FADED};
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
    --cb-typo-font-family-base: ${TYPO.FONT_FAMILY_BASE};
    --cb-typo-font-family-monospace: ${TYPO.FONT_FAMILY_MONOSPACE};
  }
`;

export {
  COLOR,
  TYPO,
  SIZE,
  Z_INDEX
};
