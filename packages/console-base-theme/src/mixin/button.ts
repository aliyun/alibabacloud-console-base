import {
  css
} from 'styled-components';

import {
  COLOR,
  SIZE
} from '../theme-default';

import {
  mixinShadowLDown
} from './shadow';

/**
 * 对按钮样式进行重置：
 * 1. 去掉 padding、background、border，定义 outline 以防止丑陋的 Chrome focus outline 样式
 * 2. 设置字体（family、颜色、大小、行间距等）继承
 * 3. 定义 disabled 的基础样式
 */
export const mixinButtonReset = css`
  padding: 0;
  border: 1px solid transparent;
  box-sizing: border-box;
  outline: none;
  background: none;
  line-height: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all ease-out 0.2s;
  
  &:hover {
    text-decoration: none;
  }
  
  &[disabled] {
    cursor: not-allowed;
  }
`;

export const mixinButtonShadow = css`
  &:hover,
  &:focus {
    ${mixinShadowLDown}
  }
  
  &:active,
  &:disabled {
    box-shadow: none;
  }
`;

// size mixins
export const mixinButtonSizeXs = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_XS}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_XS}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_XS - 2}px;
  font-size: ${SIZE.FONT_SIZE_FORM_CONTROL_XS}px;
`;
export const mixinButtonSizeS = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_S}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_S}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_S - 2}px;
  font-size: ${SIZE.FONT_SIZE_FORM_CONTROL_S}px;
`;
export const mixinButtonSizeM = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_M}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_M}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_M - 2}px;
  font-size: ${SIZE.FONT_SIZE_FORM_CONTROL_M}px;
`;
export const mixinButtonSizeL = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_L}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_L}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_L - 2}px;
  font-size: ${SIZE.FONT_SIZE_FORM_CONTROL_L}px;
`;
export const mixinButtonSizeXl = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_XL}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_XL}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_XL - 2}px;
  font-size: ${SIZE.FONT_SIZE_FORM_CONTROL_XL}px;
`;

// theme mixins
export const mixinButtonDangerStateNormal = css`
  border-color: ${COLOR.BUTTON_DANGER_BORDER};
  border-color: var(--cb-color-button-danger-border, ${COLOR.BUTTON_DANGER_BORDER});
  background-color: ${COLOR.BUTTON_DANGER_BG};
  background-color: var(--cb-color-button-danger-bg, ${COLOR.BUTTON_DANGER_BG});
  color: ${COLOR.BUTTON_DANGER_TEXT};
  color: var(--cb-color-button-danger-text, ${COLOR.BUTTON_DANGER_TEXT});
`;
export const mixinButtonDangerStateHover = css`
  border-color: ${COLOR.BUTTON_DANGER_BORDER_HOVER};
  border-color: var(--cb-color-button-danger-border-hover, ${COLOR.BUTTON_DANGER_BORDER_HOVER});
  background-color: ${COLOR.BUTTON_DANGER_BG_HOVER};
  background-color: var(--cb-color-button-danger-bg-hover, ${COLOR.BUTTON_DANGER_BG_HOVER});
  color: ${COLOR.BUTTON_DANGER_TEXT_HOVER};
  color: var(--cb-color-button-danger-text-hover, ${COLOR.BUTTON_DANGER_TEXT_HOVER});
`;
export const mixinButtonDangerStateActive = css`
  border-color: ${COLOR.BUTTON_DANGER_BORDER_ACTIVE};
  border-color: var(--cb-color-button-danger-border-active, ${COLOR.BUTTON_DANGER_BORDER_ACTIVE});
  background-color: ${COLOR.BUTTON_DANGER_BG_ACTIVE};
  background-color: var(--cb-color-button-danger-bg-active, ${COLOR.BUTTON_DANGER_BG_ACTIVE});
  color: ${COLOR.BUTTON_DANGER_TEXT_ACTIVE};
  color: var(--cb-color-button-danger-text-active, ${COLOR.BUTTON_DANGER_TEXT_ACTIVE});
`;
export const mixinButtonDangerStateDisabled = css`
  border-color: ${COLOR.BUTTON_DANGER_BORDER_DISABLED};
  border-color: var(--cb-color-button-danger-border-disabled, ${COLOR.BUTTON_DANGER_BORDER_DISABLED});
  background-color: ${COLOR.BUTTON_DANGER_BG_DISABLED};
  background-color: var(--cb-color-button-danger-bg-disabled, ${COLOR.BUTTON_DANGER_BG_DISABLED});
  color: ${COLOR.BUTTON_DANGER_TEXT_DISABLED};
  color: var(--cb-color-button-danger-text-disabled, ${COLOR.BUTTON_DANGER_TEXT_DISABLED});
`;
export const mixinButtonDanger = css`
  ${mixinButtonDangerStateNormal}
  
  &:hover,
  &:focus {
    ${mixinButtonDangerStateHover}
  }
  
  &:active {
    ${mixinButtonDangerStateActive}
  }
  
  &:disabled {
    ${mixinButtonDangerStateDisabled}
  }
`;
export const mixinButtonMenuStateNormal = css`
  border-color: ${COLOR.BUTTON_MENU_BORDER};
  border-color: var(--cb-color-button-menu-border, ${COLOR.BUTTON_MENU_BORDER});
  background-color: ${COLOR.BUTTON_MENU_BG};
  background-color: var(--cb-color-button-menu-bg, ${COLOR.BUTTON_MENU_BG});
  color: ${COLOR.BUTTON_MENU_TEXT};
  color: var(--cb-color-button-menu-text, ${COLOR.BUTTON_MENU_TEXT});
`;
export const mixinButtonMenuStateHover = css`
  border-color: ${COLOR.BUTTON_MENU_BORDER_HOVER};
  border-color: var(--cb-color-button-menu-border-hover, ${COLOR.BUTTON_MENU_BORDER_HOVER});
  background-color: ${COLOR.BUTTON_MENU_BG_HOVER};
  background-color: var(--cb-color-button-menu-bg-hover, ${COLOR.BUTTON_MENU_BG_HOVER});
  color: ${COLOR.BUTTON_MENU_TEXT_HOVER};
  color: var(--cb-color-button-menu-text-hover, ${COLOR.BUTTON_MENU_TEXT_HOVER});
`;
export const mixinButtonMenuStateActive = css`
  border-color: ${COLOR.BUTTON_MENU_BORDER_ACTIVE};
  border-color: var(--cb-color-button-menu-border-active, ${COLOR.BUTTON_MENU_BORDER_ACTIVE});
  background-color: ${COLOR.BUTTON_MENU_BG_ACTIVE};
  background-color: var(--cb-color-button-menu-bg-active, ${COLOR.BUTTON_MENU_BG_ACTIVE});
  color: ${COLOR.BUTTON_MENU_TEXT_ACTIVE};
  color: var(--cb-color-button-menu-text-active, ${COLOR.BUTTON_MENU_TEXT_ACTIVE});
`;
export const mixinButtonMenuStateDisabled = css`
  border-color: ${COLOR.BUTTON_MENU_BORDER_DISABLED};
  border-color: var(--cb-color-button-menu-border-disabled, ${COLOR.BUTTON_MENU_BORDER_DISABLED});
  background-color: ${COLOR.BUTTON_MENU_BG_DISABLED};
  background-color: var(--cb-color-button-menu-bg-disabled, ${COLOR.BUTTON_MENU_BG_DISABLED});
  color: ${COLOR.BUTTON_MENU_TEXT_DISABLED};
  color: var(--cb-color-button-menu-text-disabled, ${COLOR.BUTTON_MENU_TEXT_DISABLED});
`;
export const mixinButtonMenu = css`
  ${mixinButtonMenuStateNormal}
  
  &:hover,
  &:focus {
    ${mixinButtonMenuStateHover}
  }
  
  &:active {
    ${mixinButtonMenuStateActive}
  }
  
  &:disabled {
    ${mixinButtonMenuStateDisabled}
  }
`;
export const mixinButtonPrimaryStateNormal = css`
  border-color: ${COLOR.BUTTON_PRIMARY_BORDER};
  border-color: var(--cb-color-button-primary-border, ${COLOR.BUTTON_PRIMARY_BORDER});
  background-color: ${COLOR.BUTTON_PRIMARY_BG};
  background-color: var(--cb-color-button-primary-bg, ${COLOR.BUTTON_PRIMARY_BG});
  color: ${COLOR.BUTTON_PRIMARY_TEXT};
  color: var(--cb-color-button-primary-text, ${COLOR.BUTTON_PRIMARY_TEXT});
`;
export const mixinButtonPrimaryStateHover = css`
  border-color: ${COLOR.BUTTON_PRIMARY_BORDER_HOVER};
  border-color: var(--cb-color-button-primary-border-hover, ${COLOR.BUTTON_PRIMARY_BORDER_HOVER});
  background-color: ${COLOR.BUTTON_PRIMARY_BG_HOVER};
  background-color: var(--cb-color-button-primary-bg-hover, ${COLOR.BUTTON_PRIMARY_BG_HOVER});
  color: ${COLOR.BUTTON_PRIMARY_TEXT_HOVER};
  color: var(--cb-color-button-primary-text-hover, ${COLOR.BUTTON_PRIMARY_TEXT_HOVER});
`;
export const mixinButtonPrimaryStateActive = css`
  border-color: ${COLOR.BUTTON_PRIMARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-primary-border-active, ${COLOR.BUTTON_PRIMARY_BORDER_ACTIVE});
  background-color: ${COLOR.BUTTON_PRIMARY_BG_ACTIVE};
  background-color: var(--cb-color-button-primary-bg-active, ${COLOR.BUTTON_PRIMARY_BG_ACTIVE});
  color: ${COLOR.BUTTON_PRIMARY_TEXT_ACTIVE};
  color: var(--cb-color-button-primary-text-active, ${COLOR.BUTTON_PRIMARY_TEXT_ACTIVE});
`;
export const mixinButtonPrimaryStateDisabled = css`
  border-color: ${COLOR.BUTTON_PRIMARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-primary-border-disabled, ${COLOR.BUTTON_PRIMARY_BORDER_DISABLED});
  background-color: ${COLOR.BUTTON_PRIMARY_BG_DISABLED};
  background-color: var(--cb-color-button-primary-bg-disabled, ${COLOR.BUTTON_PRIMARY_BG_DISABLED});
  color: ${COLOR.BUTTON_PRIMARY_TEXT_DISABLED};
  color: var(--cb-color-button-primary-text-disabled, ${COLOR.BUTTON_PRIMARY_TEXT_DISABLED});
`;
export const mixinButtonPrimary = css`
  ${mixinButtonPrimaryStateNormal}
  
  &:hover,
  &:focus {
    ${mixinButtonPrimaryStateHover}
  }
  
  &:active {
    ${mixinButtonPrimaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonPrimaryStateDisabled}
  }
`;
export const mixinButtonSecondaryStateNormal = css`
  border-color: ${COLOR.BUTTON_SECONDARY_BORDER};
  border-color: var(--cb-color-button-secondary-border, ${COLOR.BUTTON_SECONDARY_BORDER});
  background-color: ${COLOR.BUTTON_SECONDARY_BG};
  background-color: var(--cb-color-button-secondary-bg, ${COLOR.BUTTON_SECONDARY_BG});
  color: ${COLOR.BUTTON_SECONDARY_TEXT};
  color: var(--cb-color-button-secondary-text, ${COLOR.BUTTON_SECONDARY_TEXT});
`;
export const mixinButtonSecondaryStateHover = css`
  border-color: ${COLOR.BUTTON_SECONDARY_BORDER_HOVER};
  border-color: var(--cb-color-button-secondary-border-hover, ${COLOR.BUTTON_SECONDARY_BORDER_HOVER});
  background-color: ${COLOR.BUTTON_SECONDARY_BG_HOVER};
  background-color: var(--cb-color-button-secondary-bg-hover, ${COLOR.BUTTON_SECONDARY_BG_HOVER});
  color: ${COLOR.BUTTON_SECONDARY_TEXT_HOVER};
  color: var(--cb-color-button-secondary-text-hover, ${COLOR.BUTTON_SECONDARY_TEXT_HOVER});
`;
export const mixinButtonSecondaryStateActive = css`
  border-color: ${COLOR.BUTTON_SECONDARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-secondary-border-active, ${COLOR.BUTTON_SECONDARY_BORDER_ACTIVE});
  background-color: ${COLOR.BUTTON_SECONDARY_BG_ACTIVE};
  background-color: var(--cb-color-button-secondary-bg-active, ${COLOR.BUTTON_SECONDARY_BG_ACTIVE});
  color: ${COLOR.BUTTON_SECONDARY_TEXT_ACTIVE};
  color: var(--cb-color-button-secondary-text-active, ${COLOR.BUTTON_SECONDARY_TEXT_ACTIVE});
`;
export const mixinButtonSecondaryStateDisabled = css`
  border-color: ${COLOR.BUTTON_SECONDARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-secondary-border-disabled, ${COLOR.BUTTON_SECONDARY_BORDER_DISABLED});
  background-color: ${COLOR.BUTTON_SECONDARY_BG_DISABLED};
  background-color: var(--cb-color-button-secondary-bg-disabled, ${COLOR.BUTTON_SECONDARY_BG_DISABLED});
  color: ${COLOR.BUTTON_SECONDARY_TEXT_DISABLED};
  color: var(--cb-color-button-secondary-text-disabled, ${COLOR.BUTTON_SECONDARY_TEXT_DISABLED});
`;
export const mixinButtonSecondary = css`
  ${mixinButtonSecondaryStateNormal}
  
  &:hover,
  &:focus {
    ${mixinButtonSecondaryStateHover}
  }
  
  &:active {
    ${mixinButtonSecondaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonSecondaryStateDisabled}
  }
`;
export const mixinButtonTertiaryStateNormal = css`
  border-color: ${COLOR.BUTTON_TERTIARY_BORDER};
  border-color: var(--cb-color-button-tertiary-border, ${COLOR.BUTTON_TERTIARY_BORDER});
  background-color: ${COLOR.BUTTON_TERTIARY_BG};
  background-color: var(--cb-color-button-tertiary-bg, ${COLOR.BUTTON_TERTIARY_BG});
  color: ${COLOR.BUTTON_TERTIARY_TEXT};
  color: var(--cb-color-button-tertiary-text, ${COLOR.BUTTON_TERTIARY_TEXT});
`;
export const mixinButtonTertiaryStateHover = css`
  border-color: ${COLOR.BUTTON_TERTIARY_BORDER_HOVER};
  border-color: var(--cb-color-button-tertiary-border-hover, ${COLOR.BUTTON_TERTIARY_BORDER_HOVER});
  background-color: ${COLOR.BUTTON_TERTIARY_BG_HOVER};
  background-color: var(--cb-color-button-tertiary-bg-hover, ${COLOR.BUTTON_TERTIARY_BG_HOVER});
  color: ${COLOR.BUTTON_TERTIARY_TEXT_HOVER};
  color: var(--cb-color-button-tertiary-text-hover, ${COLOR.BUTTON_TERTIARY_TEXT_HOVER});
`;
export const mixinButtonTertiaryStateActive = css`
  border-color: ${COLOR.BUTTON_TERTIARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-tertiary-border-active, ${COLOR.BUTTON_TERTIARY_BORDER_ACTIVE});
  background-color: ${COLOR.BUTTON_TERTIARY_BG_ACTIVE};
  background-color: var(--cb-color-button-tertiary-bg-active, ${COLOR.BUTTON_TERTIARY_BG_ACTIVE});
  color: ${COLOR.BUTTON_TERTIARY_TEXT_ACTIVE};
  color: var(--cb-color-button-tertiary-text-active, ${COLOR.BUTTON_TERTIARY_TEXT_ACTIVE});
`;
export const mixinButtonTertiaryStateDisabled = css`
  border-color: ${COLOR.BUTTON_TERTIARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-tertiary-border-disabled, ${COLOR.BUTTON_TERTIARY_BORDER_DISABLED});
  background-color: ${COLOR.BUTTON_TERTIARY_BG_DISABLED};
  background-color: var(--cb-color-button-tertiary-bg-disabled, ${COLOR.BUTTON_TERTIARY_BG_DISABLED});
  color: ${COLOR.BUTTON_TERTIARY_TEXT_DISABLED};
  color: var(--cb-color-button-tertiary-text-disabled, ${COLOR.BUTTON_TERTIARY_TEXT_DISABLED});
`;
export const mixinButtonTertiary = css`
  ${mixinButtonTertiaryStateNormal}
  
  &:hover,
  &:focus {
    ${mixinButtonTertiaryStateHover}
  }
  
  &:active {
    ${mixinButtonTertiaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonTertiaryStateDisabled}
  }
`;
export const mixinButtonBrandPrimaryStateNormal = css`
  border-color: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER};
  border-color: var(--cb-color-button-brand-primary-border, ${COLOR.BUTTON_BRAND_PRIMARY_BORDER});
  background-color: ${COLOR.BUTTON_BRAND_PRIMARY_BG};
  background-color: var(--cb-color-button-brand-primary-bg, ${COLOR.BUTTON_BRAND_PRIMARY_BG});
  color: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT};
  color: var(--cb-color-button-brand-primary-text, ${COLOR.BUTTON_BRAND_PRIMARY_TEXT});
`;
export const mixinButtonBrandPrimaryStateHover = css`
  border-color: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_HOVER};
  border-color: var(--cb-color-button-brand-primary-border-hover, ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_HOVER});
  background-color: ${COLOR.BUTTON_BRAND_PRIMARY_BG_HOVER};
  background-color: var(--cb-color-button-brand-primary-bg-hover, ${COLOR.BUTTON_BRAND_PRIMARY_BG_HOVER});
  color: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_HOVER};
  color: var(--cb-color-button-brand-primary-text-hover, ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_HOVER});
`;
export const mixinButtonBrandPrimaryStateActive = css`
  border-color: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-brand-primary-border-active, ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_ACTIVE});
  background-color: ${COLOR.BUTTON_BRAND_PRIMARY_BG_ACTIVE};
  background-color: var(--cb-color-button-brand-primary-bg-active, ${COLOR.BUTTON_BRAND_PRIMARY_BG_ACTIVE});
  color: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_ACTIVE};
  color: var(--cb-color-button-brand-primary-text-active, ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_ACTIVE});
`;
export const mixinButtonBrandPrimaryStateDisabled = css`
  border-color: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-brand-primary-border-disabled, ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_DISABLED});
  background-color: ${COLOR.BUTTON_BRAND_PRIMARY_BG_DISABLED};
  background-color: var(--cb-color-button-brand-primary-bg-disabled, ${COLOR.BUTTON_BRAND_PRIMARY_BG_DISABLED});
  color: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_DISABLED};
  color: var(--cb-color-button-brand-primary-text-disabled, ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_DISABLED});
`;
export const mixinButtonBrandPrimary = css`
  ${mixinButtonBrandPrimaryStateNormal}
  
  &:hover,
  &:focus {
    ${mixinButtonBrandPrimaryStateHover}
  }
  
  &:active {
    ${mixinButtonBrandPrimaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonBrandPrimaryStateDisabled}
  }
`;
export const mixinButtonBrandSecondaryStateNormal = css`
  border-color: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER};
  border-color: var(--cb-color-button-brand-secondary-border, ${COLOR.BUTTON_BRAND_SECONDARY_BORDER});
  background-color: ${COLOR.BUTTON_BRAND_SECONDARY_BG};
  background-color: var(--cb-color-button-brand-secondary-bg, ${COLOR.BUTTON_BRAND_SECONDARY_BG});
  color: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT};
  color: var(--cb-color-button-brand-secondary-text, ${COLOR.BUTTON_BRAND_SECONDARY_TEXT});
`;
export const mixinButtonBrandSecondaryStateHover = css`
  border-color: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_HOVER};
  border-color: var(--cb-color-button-brand-secondary-border-hover, ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_HOVER});
  background-color: ${COLOR.BUTTON_BRAND_SECONDARY_BG_HOVER};
  background-color: var(--cb-color-button-brand-secondary-bg-hover, ${COLOR.BUTTON_BRAND_SECONDARY_BG_HOVER});
  color: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_HOVER};
  color: var(--cb-color-button-brand-secondary-text-hover, ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_HOVER});
`;
export const mixinButtonBrandSecondaryStateActive = css`
  border-color: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-brand-secondary-border-active, ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_ACTIVE});
  background-color: ${COLOR.BUTTON_BRAND_SECONDARY_BG_ACTIVE};
  background-color: var(--cb-color-button-brand-secondary-bg-active, ${COLOR.BUTTON_BRAND_SECONDARY_BG_ACTIVE});
  color: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_ACTIVE};
  color: var(--cb-color-button-brand-secondary-text-active, ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_ACTIVE});
`;
export const mixinButtonBrandSecondaryStateDisabled = css`
  border-color: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-brand-secondary-border-disabled, ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_DISABLED});
  background-color: ${COLOR.BUTTON_BRAND_SECONDARY_BG_DISABLED};
  background-color: var(--cb-color-button-brand-secondary-bg-disabled, ${COLOR.BUTTON_BRAND_SECONDARY_BG_DISABLED});
  color: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_DISABLED};
  color: var(--cb-color-button-brand-secondary-text-disabled, ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_DISABLED});
`;
export const mixinButtonBrandSecondary = css`
  ${mixinButtonBrandSecondaryStateNormal}
  
  &:hover,
  &:focus {
    ${mixinButtonBrandSecondaryStateHover}
  }
  
  &:active {
    ${mixinButtonBrandSecondaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonBrandSecondaryStateDisabled}
  }
`;
export const mixinButtonBrandTertiaryStateNormal = css`
  border-color: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER};
  border-color: var(--cb-color-button-brand-tertiary-border, ${COLOR.BUTTON_BRAND_TERTIARY_BORDER});
  background-color: ${COLOR.BUTTON_BRAND_TERTIARY_BG};
  background-color: var(--cb-color-button-brand-tertiary-bg, ${COLOR.BUTTON_BRAND_TERTIARY_BG});
  color: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT};
  color: var(--cb-color-button-brand-tertiary-text, ${COLOR.BUTTON_BRAND_TERTIARY_TEXT});
`;
export const mixinButtonBrandTertiaryStateHover = css`
  border-color: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_HOVER};
  border-color: var(--cb-color-button-brand-tertiary-border-hover, ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_HOVER});
  background-color: ${COLOR.BUTTON_BRAND_TERTIARY_BG_HOVER};
  background-color: var(--cb-color-button-brand-tertiary-bg-hover, ${COLOR.BUTTON_BRAND_TERTIARY_BG_HOVER});
  color: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_HOVER};
  color: var(--cb-color-button-brand-tertiary-text-hover, ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_HOVER});
`;
export const mixinButtonBrandTertiaryStateActive = css`
  border-color: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-brand-tertiary-border-active, ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_ACTIVE});
  background-color: ${COLOR.BUTTON_BRAND_TERTIARY_BG_ACTIVE};
  background-color: var(--cb-color-button-brand-tertiary-bg-active, ${COLOR.BUTTON_BRAND_TERTIARY_BG_ACTIVE});
  color: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_ACTIVE};
  color: var(--cb-color-button-brand-tertiary-text-active, ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_ACTIVE});
`;
export const mixinButtonBrandTertiaryStateDisabled = css`
  border-color: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-brand-tertiary-border-disabled, ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_DISABLED});
  background-color: ${COLOR.BUTTON_BRAND_TERTIARY_BG_DISABLED};
  background-color: var(--cb-color-button-brand-tertiary-bg-disabled, ${COLOR.BUTTON_BRAND_TERTIARY_BG_DISABLED});
  color: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_DISABLED};
  color: var(--cb-color-button-brand-tertiary-text-disabled, ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_DISABLED});
`;
export const mixinButtonBrandTertiary = css`
  ${mixinButtonBrandTertiaryStateNormal}
  
  &:hover,
  &:focus {
    ${mixinButtonBrandTertiaryStateHover}
  }
  
  &:active {
    ${mixinButtonBrandTertiaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonBrandTertiaryStateDisabled}
  }
`;
export const mixinButtonTextPrimaryStateNormal = css`
  border-color: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER};
  border-color: var(--cb-color-button-text-primary-border, ${COLOR.BUTTON_TEXT_PRIMARY_BORDER});
  background-color: ${COLOR.BUTTON_TEXT_PRIMARY_BG};
  background-color: var(--cb-color-button-text-primary-bg, ${COLOR.BUTTON_TEXT_PRIMARY_BG});
  color: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT};
  color: var(--cb-color-button-text-primary-text, ${COLOR.BUTTON_TEXT_PRIMARY_TEXT});
`;
export const mixinButtonTextPrimaryStateHover = css`
  border-color: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_HOVER};
  border-color: var(--cb-color-button-text-primary-border-hover, ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_HOVER});
  background-color: ${COLOR.BUTTON_TEXT_PRIMARY_BG_HOVER};
  background-color: var(--cb-color-button-text-primary-bg-hover, ${COLOR.BUTTON_TEXT_PRIMARY_BG_HOVER});
  color: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_HOVER};
  color: var(--cb-color-button-text-primary-text-hover, ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_HOVER});
`;
export const mixinButtonTextPrimaryStateActive = css`
  border-color: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-text-primary-border-active, ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_ACTIVE});
  background-color: ${COLOR.BUTTON_TEXT_PRIMARY_BG_ACTIVE};
  background-color: var(--cb-color-button-text-primary-bg-active, ${COLOR.BUTTON_TEXT_PRIMARY_BG_ACTIVE});
  color: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_ACTIVE};
  color: var(--cb-color-button-text-primary-text-active, ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_ACTIVE});
`;
export const mixinButtonTextPrimaryStateDisabled = css`
  border-color: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-text-primary-border-disabled, ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_DISABLED});
  background-color: ${COLOR.BUTTON_TEXT_PRIMARY_BG_DISABLED};
  background-color: var(--cb-color-button-text-primary-bg-disabled, ${COLOR.BUTTON_TEXT_PRIMARY_BG_DISABLED});
  color: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_DISABLED};
  color: var(--cb-color-button-text-primary-text-disabled, ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_DISABLED});
`;
export const mixinButtonTextPrimary = css`
  ${mixinButtonTextPrimaryStateNormal}
  
  &:hover,
  &:focus {
    ${mixinButtonTextPrimaryStateHover}
  }
  
  &:active {
    ${mixinButtonTextPrimaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonTextPrimaryStateDisabled}
  }
`;
export const mixinButtonTextSecondaryStateNormal = css`
  border-color: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER};
  border-color: var(--cb-color-button-text-secondary-border, ${COLOR.BUTTON_TEXT_SECONDARY_BORDER});
  background-color: ${COLOR.BUTTON_TEXT_SECONDARY_BG};
  background-color: var(--cb-color-button-text-secondary-bg, ${COLOR.BUTTON_TEXT_SECONDARY_BG});
  color: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT};
  color: var(--cb-color-button-text-secondary-text, ${COLOR.BUTTON_TEXT_SECONDARY_TEXT});
`;
export const mixinButtonTextSecondaryStateHover = css`
  border-color: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_HOVER};
  border-color: var(--cb-color-button-text-secondary-border-hover, ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_HOVER});
  background-color: ${COLOR.BUTTON_TEXT_SECONDARY_BG_HOVER};
  background-color: var(--cb-color-button-text-secondary-bg-hover, ${COLOR.BUTTON_TEXT_SECONDARY_BG_HOVER});
  color: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_HOVER};
  color: var(--cb-color-button-text-secondary-text-hover, ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_HOVER});
`;
export const mixinButtonTextSecondaryStateActive = css`
  border-color: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-text-secondary-border-active, ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_ACTIVE});
  background-color: ${COLOR.BUTTON_TEXT_SECONDARY_BG_ACTIVE};
  background-color: var(--cb-color-button-text-secondary-bg-active, ${COLOR.BUTTON_TEXT_SECONDARY_BG_ACTIVE});
  color: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_ACTIVE};
  color: var(--cb-color-button-text-secondary-text-active, ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_ACTIVE});
`;
export const mixinButtonTextSecondaryStateDisabled = css`
  border-color: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-text-secondary-border-disabled, ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_DISABLED});
  background-color: ${COLOR.BUTTON_TEXT_SECONDARY_BG_DISABLED};
  background-color: var(--cb-color-button-text-secondary-bg-disabled, ${COLOR.BUTTON_TEXT_SECONDARY_BG_DISABLED});
  color: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_DISABLED};
  color: var(--cb-color-button-text-secondary-text-disabled, ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_DISABLED});
`;
export const mixinButtonTextSecondary = css`
  ${mixinButtonTextSecondaryStateNormal}
  
  &:hover,
  &:focus {
    ${mixinButtonTextSecondaryStateHover}
  }
  
  &:active {
    ${mixinButtonTextSecondaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonTextSecondaryStateDisabled}
  }
`;
export const mixinButtonTextTertiaryStateNormal = css`
  border-color: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER};
  border-color: var(--cb-color-button-text-tertiary-border, ${COLOR.BUTTON_TEXT_TERTIARY_BORDER});
  background-color: ${COLOR.BUTTON_TEXT_TERTIARY_BG};
  background-color: var(--cb-color-button-text-tertiary-bg, ${COLOR.BUTTON_TEXT_TERTIARY_BG});
  color: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT};
  color: var(--cb-color-button-text-tertiary-text, ${COLOR.BUTTON_TEXT_TERTIARY_TEXT});
`;
export const mixinButtonTextTertiaryStateHover = css`
  border-color: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_HOVER};
  border-color: var(--cb-color-button-text-tertiary-border-hover, ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_HOVER});
  background-color: ${COLOR.BUTTON_TEXT_TERTIARY_BG_HOVER};
  background-color: var(--cb-color-button-text-tertiary-bg-hover, ${COLOR.BUTTON_TEXT_TERTIARY_BG_HOVER});
  color: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_HOVER};
  color: var(--cb-color-button-text-tertiary-text-hover, ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_HOVER});
`;
export const mixinButtonTextTertiaryStateActive = css`
  border-color: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-text-tertiary-border-active, ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_ACTIVE});
  background-color: ${COLOR.BUTTON_TEXT_TERTIARY_BG_ACTIVE};
  background-color: var(--cb-color-button-text-tertiary-bg-active, ${COLOR.BUTTON_TEXT_TERTIARY_BG_ACTIVE});
  color: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_ACTIVE};
  color: var(--cb-color-button-text-tertiary-text-active, ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_ACTIVE});
`;
export const mixinButtonTextTertiaryStateDisabled = css`
  border-color: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-text-tertiary-border-disabled, ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_DISABLED});
  background-color: ${COLOR.BUTTON_TEXT_TERTIARY_BG_DISABLED};
  background-color: var(--cb-color-button-text-tertiary-bg-disabled, ${COLOR.BUTTON_TEXT_TERTIARY_BG_DISABLED});
  color: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_DISABLED};
  color: var(--cb-color-button-text-tertiary-text-disabled, ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_DISABLED});
`;
export const mixinButtonTextTertiary = css`
  ${mixinButtonTextTertiaryStateNormal}
  
  &:hover,
  &:focus {
    ${mixinButtonTextTertiaryStateHover}
  }
  
  &:active {
    ${mixinButtonTextTertiaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonTextTertiaryStateDisabled}
  }
`;
export const mixinButtonTextBrandPrimaryStateNormal = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER};
  border-color: var(--cb-color-button-text-brand-primary-border, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER});
  background-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG};
  background-color: var(--cb-color-button-text-brand-primary-bg, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG});
  color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT};
  color: var(--cb-color-button-text-brand-primary-text, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT});
`;
export const mixinButtonTextBrandPrimaryStateHover = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_HOVER};
  border-color: var(--cb-color-button-text-brand-primary-border-hover, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_HOVER});
  background-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_HOVER};
  background-color: var(--cb-color-button-text-brand-primary-bg-hover, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_HOVER});
  color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_HOVER};
  color: var(--cb-color-button-text-brand-primary-text-hover, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_HOVER});
`;
export const mixinButtonTextBrandPrimaryStateActive = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-text-brand-primary-border-active, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_ACTIVE});
  background-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_ACTIVE};
  background-color: var(--cb-color-button-text-brand-primary-bg-active, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_ACTIVE});
  color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_ACTIVE};
  color: var(--cb-color-button-text-brand-primary-text-active, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_ACTIVE});
`;
export const mixinButtonTextBrandPrimaryStateDisabled = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-text-brand-primary-border-disabled, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_DISABLED});
  background-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_DISABLED};
  background-color: var(--cb-color-button-text-brand-primary-bg-disabled, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_DISABLED});
  color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_DISABLED};
  color: var(--cb-color-button-text-brand-primary-text-disabled, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_DISABLED});
`;
export const mixinButtonTextBrandPrimary = css`
  ${mixinButtonTextBrandPrimaryStateNormal}
  
  &:hover,
  &:focus {
    ${mixinButtonTextBrandPrimaryStateHover}
  }
  
  &:active {
    ${mixinButtonTextBrandPrimaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonTextBrandPrimaryStateDisabled}
  }
`;
export const mixinButtonTextBrandSecondaryStateNormal = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER};
  border-color: var(--cb-color-button-text-brand-secondary-border, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER});
  background-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG};
  background-color: var(--cb-color-button-text-brand-secondary-bg, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG});
  color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT};
  color: var(--cb-color-button-text-brand-secondary-text, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT});
`;
export const mixinButtonTextBrandSecondaryStateHover = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_HOVER};
  border-color: var(--cb-color-button-text-brand-secondary-border-hover, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_HOVER});
  background-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_HOVER};
  background-color: var(--cb-color-button-text-brand-secondary-bg-hover, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_HOVER});
  color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_HOVER};
  color: var(--cb-color-button-text-brand-secondary-text-hover, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_HOVER});
`;
export const mixinButtonTextBrandSecondaryStateActive = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-text-brand-secondary-border-active, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_ACTIVE});
  background-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_ACTIVE};
  background-color: var(--cb-color-button-text-brand-secondary-bg-active, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_ACTIVE});
  color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_ACTIVE};
  color: var(--cb-color-button-text-brand-secondary-text-active, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_ACTIVE});
`;
export const mixinButtonTextBrandSecondaryStateDisabled = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-text-brand-secondary-border-disabled, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_DISABLED});
  background-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_DISABLED};
  background-color: var(--cb-color-button-text-brand-secondary-bg-disabled, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_DISABLED});
  color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_DISABLED};
  color: var(--cb-color-button-text-brand-secondary-text-disabled, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_DISABLED});
`;
export const mixinButtonTextBrandSecondary = css`
  ${mixinButtonTextBrandSecondaryStateNormal}
  
  &:hover,
  &:focus {
    ${mixinButtonTextBrandSecondaryStateHover}
  }
  
  &:active {
    ${mixinButtonTextBrandSecondaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonTextBrandSecondaryStateDisabled}
  }
`;
