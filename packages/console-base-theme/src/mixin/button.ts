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
  border-radius: 2px;
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

export const mixinButtonSizeXS = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_XS}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_XS}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_XS - 2}px;
`;
export const mixinButtonSizeS = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_S}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_S}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_S - 2}px;
`;
export const mixinButtonSizeM = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_M}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_M}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_M - 2}px;
`;
export const mixinButtonSizeL = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_L}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_L}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_L - 2}px;
`;
export const mixinButtonSizeXL = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_XL}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_XL}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_XL - 2}px;
`;
export const mixinButtonDanger = css`
  border-color: ${COLOR.BUTTON_DANGER_BORDER};
  border-color: var(--cb-color-button-danger-border, ${COLOR.BUTTON_DANGER_BORDER});
  background-color: ${COLOR.BUTTON_DANGER_BG};
  background-color: var(--cb-color-button-danger-bg, ${COLOR.BUTTON_DANGER_BG});
  color: ${COLOR.BUTTON_DANGER_TEXT};
  color: var(--cb-color-button-danger-text, ${COLOR.BUTTON_DANGER_TEXT});
  ${mixinButtonShadow}
  
  &:hover,
  &:focus {
    border-color: ${COLOR.BUTTON_DANGER_BORDER_HOVER};
    border-color: var(--cb-color-button-danger-border-hover, ${COLOR.BUTTON_DANGER_BORDER_HOVER});
    background-color: ${COLOR.BUTTON_DANGER_BG_HOVER};
    background-color: var(--cb-color-button-danger-bg-hover, ${COLOR.BUTTON_DANGER_BG_HOVER});
    color: ${COLOR.BUTTON_DANGER_TEXT_HOVER};
    color: var(--cb-color-button-danger-text-hover, ${COLOR.BUTTON_DANGER_TEXT_HOVER});
  }
  
  &:active {
    border-color: ${COLOR.BUTTON_DANGER_BORDER_ACTIVE};
    border-color: var(--cb-color-button-danger-border-active, ${COLOR.BUTTON_DANGER_BORDER_ACTIVE});
    background-color: ${COLOR.BUTTON_DANGER_BG_ACTIVE};
    background-color: var(--cb-color-button-danger-bg-active, ${COLOR.BUTTON_DANGER_BG_ACTIVE});
    color: ${COLOR.BUTTON_DANGER_TEXT_ACTIVE};
    color: var(--cb-color-button-danger-text-active, ${COLOR.BUTTON_DANGER_TEXT_ACTIVE});
  }
  
  &:disabled {
    border-color: ${COLOR.BUTTON_DANGER_BORDER_DISABLED};
    border-color: var(--cb-color-button-danger-border-disabled, ${COLOR.BUTTON_DANGER_BORDER_DISABLED});
    background-color: ${COLOR.BUTTON_DANGER_BG_DISABLED};
    background-color: var(--cb-color-button-danger-bg-disabled, ${COLOR.BUTTON_DANGER_BG_DISABLED});
    color: ${COLOR.BUTTON_DANGER_TEXT_DISABLED};
    color: var(--cb-color-button-danger-text-disabled, ${COLOR.BUTTON_DANGER_TEXT_DISABLED});
  }
`;
export const mixinButtonPrimary = css`
  border-color: ${COLOR.BUTTON_PRIMARY_BORDER};
  border-color: var(--cb-color-button-primary-border, ${COLOR.BUTTON_PRIMARY_BORDER});
  background-color: ${COLOR.BUTTON_PRIMARY_BG};
  background-color: var(--cb-color-button-primary-bg, ${COLOR.BUTTON_PRIMARY_BG});
  color: ${COLOR.BUTTON_PRIMARY_TEXT};
  color: var(--cb-color-button-primary-text, ${COLOR.BUTTON_PRIMARY_TEXT});
  ${mixinButtonShadow}
  
  &:hover,
  &:focus {
    border-color: ${COLOR.BUTTON_PRIMARY_BORDER_HOVER};
    border-color: var(--cb-color-button-primary-border-hover, ${COLOR.BUTTON_PRIMARY_BORDER_HOVER});
    background-color: ${COLOR.BUTTON_PRIMARY_BG_HOVER};
    background-color: var(--cb-color-button-primary-bg-hover, ${COLOR.BUTTON_PRIMARY_BG_HOVER});
    color: ${COLOR.BUTTON_PRIMARY_TEXT_HOVER};
    color: var(--cb-color-button-primary-text-hover, ${COLOR.BUTTON_PRIMARY_TEXT_HOVER});
  }
  
  &:active {
    border-color: ${COLOR.BUTTON_PRIMARY_BORDER_ACTIVE};
    border-color: var(--cb-color-button-primary-border-active, ${COLOR.BUTTON_PRIMARY_BORDER_ACTIVE});
    background-color: ${COLOR.BUTTON_PRIMARY_BG_ACTIVE};
    background-color: var(--cb-color-button-primary-bg-active, ${COLOR.BUTTON_PRIMARY_BG_ACTIVE});
    color: ${COLOR.BUTTON_PRIMARY_TEXT_ACTIVE};
    color: var(--cb-color-button-primary-text-active, ${COLOR.BUTTON_PRIMARY_TEXT_ACTIVE});
  }
  
  &:disabled {
    border-color: ${COLOR.BUTTON_PRIMARY_BORDER_DISABLED};
    border-color: var(--cb-color-button-primary-border-disabled, ${COLOR.BUTTON_PRIMARY_BORDER_DISABLED});
    background-color: ${COLOR.BUTTON_PRIMARY_BG_DISABLED};
    background-color: var(--cb-color-button-primary-bg-disabled, ${COLOR.BUTTON_PRIMARY_BG_DISABLED});
    color: ${COLOR.BUTTON_PRIMARY_TEXT_DISABLED};
    color: var(--cb-color-button-primary-text-disabled, ${COLOR.BUTTON_PRIMARY_TEXT_DISABLED});
  }
`;
export const mixinButtonSecondary = css`
  border-color: ${COLOR.BUTTON_SECONDARY_BORDER};
  border-color: var(--cb-color-button-secondary-border, ${COLOR.BUTTON_SECONDARY_BORDER});
  background-color: ${COLOR.BUTTON_SECONDARY_BG};
  background-color: var(--cb-color-button-secondary-bg, ${COLOR.BUTTON_SECONDARY_BG});
  color: ${COLOR.BUTTON_SECONDARY_TEXT};
  color: var(--cb-color-button-secondary-text, ${COLOR.BUTTON_SECONDARY_TEXT});
  ${mixinButtonShadow}
  
  &:hover,
  &:focus {
    border-color: ${COLOR.BUTTON_SECONDARY_BORDER_HOVER};
    border-color: var(--cb-color-button-secondary-border-hover, ${COLOR.BUTTON_SECONDARY_BORDER_HOVER});
    background-color: ${COLOR.BUTTON_SECONDARY_BG_HOVER};
    background-color: var(--cb-color-button-secondary-bg-hover, ${COLOR.BUTTON_SECONDARY_BG_HOVER});
    color: ${COLOR.BUTTON_SECONDARY_TEXT_HOVER};
    color: var(--cb-color-button-secondary-text-hover, ${COLOR.BUTTON_SECONDARY_TEXT_HOVER});
  }
  
  &:active {
    border-color: ${COLOR.BUTTON_SECONDARY_BORDER_ACTIVE};
    border-color: var(--cb-color-button-secondary-border-active, ${COLOR.BUTTON_SECONDARY_BORDER_ACTIVE});
    background-color: ${COLOR.BUTTON_SECONDARY_BG_ACTIVE};
    background-color: var(--cb-color-button-secondary-bg-active, ${COLOR.BUTTON_SECONDARY_BG_ACTIVE});
    color: ${COLOR.BUTTON_SECONDARY_TEXT_ACTIVE};
    color: var(--cb-color-button-secondary-text-active, ${COLOR.BUTTON_SECONDARY_TEXT_ACTIVE});
  }
  
  &:disabled {
    border-color: ${COLOR.BUTTON_SECONDARY_BORDER_DISABLED};
    border-color: var(--cb-color-button-secondary-border-disabled, ${COLOR.BUTTON_SECONDARY_BORDER_DISABLED});
    background-color: ${COLOR.BUTTON_SECONDARY_BG_DISABLED};
    background-color: var(--cb-color-button-secondary-bg-disabled, ${COLOR.BUTTON_SECONDARY_BG_DISABLED});
    color: ${COLOR.BUTTON_SECONDARY_TEXT_DISABLED};
    color: var(--cb-color-button-secondary-text-disabled, ${COLOR.BUTTON_SECONDARY_TEXT_DISABLED});
  }
`;
export const mixinButtonTertiary = css`
  border-color: ${COLOR.BUTTON_TERTIARY_BORDER};
  border-color: var(--cb-color-button-tertiary-border, ${COLOR.BUTTON_TERTIARY_BORDER});
  background-color: ${COLOR.BUTTON_TERTIARY_BG};
  background-color: var(--cb-color-button-tertiary-bg, ${COLOR.BUTTON_TERTIARY_BG});
  color: ${COLOR.BUTTON_TERTIARY_TEXT};
  color: var(--cb-color-button-tertiary-text, ${COLOR.BUTTON_TERTIARY_TEXT});
  
  &:hover,
  &:focus {
    border-color: ${COLOR.BUTTON_TERTIARY_BORDER_HOVER};
    border-color: var(--cb-color-button-tertiary-border-hover, ${COLOR.BUTTON_TERTIARY_BORDER_HOVER});
    background-color: ${COLOR.BUTTON_TERTIARY_BG_HOVER};
    background-color: var(--cb-color-button-tertiary-bg-hover, ${COLOR.BUTTON_TERTIARY_BG_HOVER});
    color: ${COLOR.BUTTON_TERTIARY_TEXT_HOVER};
    color: var(--cb-color-button-tertiary-text-hover, ${COLOR.BUTTON_TERTIARY_TEXT_HOVER});
  }
  
  &:active {
    border-color: ${COLOR.BUTTON_TERTIARY_BORDER_ACTIVE};
    border-color: var(--cb-color-button-tertiary-border-active, ${COLOR.BUTTON_TERTIARY_BORDER_ACTIVE});
    background-color: ${COLOR.BUTTON_TERTIARY_BG_ACTIVE};
    background-color: var(--cb-color-button-tertiary-bg-active, ${COLOR.BUTTON_TERTIARY_BG_ACTIVE});
    color: ${COLOR.BUTTON_TERTIARY_TEXT_ACTIVE};
    color: var(--cb-color-button-tertiary-text-active, ${COLOR.BUTTON_TERTIARY_TEXT_ACTIVE});
  }
  
  &:disabled {
    border-color: ${COLOR.BUTTON_TERTIARY_BORDER_DISABLED};
    border-color: var(--cb-color-button-tertiary-border-disabled, ${COLOR.BUTTON_TERTIARY_BORDER_DISABLED});
    background-color: ${COLOR.BUTTON_TERTIARY_BG_DISABLED};
    background-color: var(--cb-color-button-tertiary-bg-disabled, ${COLOR.BUTTON_TERTIARY_BG_DISABLED});
    color: ${COLOR.BUTTON_TERTIARY_TEXT_DISABLED};
    color: var(--cb-color-button-tertiary-text-disabled, ${COLOR.BUTTON_TERTIARY_TEXT_DISABLED});
  }
`;
export const mixinButtonBrandPrimary = css`
  border-color: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER};
  border-color: var(--cb-color-button-brand-primary-border, ${COLOR.BUTTON_BRAND_PRIMARY_BORDER});
  background-color: ${COLOR.BUTTON_BRAND_PRIMARY_BG};
  background-color: var(--cb-color-button-brand-primary-bg, ${COLOR.BUTTON_BRAND_PRIMARY_BG});
  color: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT};
  color: var(--cb-color-button-brand-primary-text, ${COLOR.BUTTON_BRAND_PRIMARY_TEXT});
  ${mixinButtonShadow}
  
  &:hover,
  &:focus {
    border-color: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_HOVER};
    border-color: var(--cb-color-button-brand-primary-border-hover, ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_HOVER});
    background-color: ${COLOR.BUTTON_BRAND_PRIMARY_BG_HOVER};
    background-color: var(--cb-color-button-brand-primary-bg-hover, ${COLOR.BUTTON_BRAND_PRIMARY_BG_HOVER});
    color: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_HOVER};
    color: var(--cb-color-button-brand-primary-text-hover, ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_HOVER});
  }
  
  &:active {
    border-color: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_ACTIVE};
    border-color: var(--cb-color-button-brand-primary-border-active, ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_ACTIVE});
    background-color: ${COLOR.BUTTON_BRAND_PRIMARY_BG_ACTIVE};
    background-color: var(--cb-color-button-brand-primary-bg-active, ${COLOR.BUTTON_BRAND_PRIMARY_BG_ACTIVE});
    color: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_ACTIVE};
    color: var(--cb-color-button-brand-primary-text-active, ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_ACTIVE});
  }
  
  &:disabled {
    border-color: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_DISABLED};
    border-color: var(--cb-color-button-brand-primary-border-disabled, ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_DISABLED});
    background-color: ${COLOR.BUTTON_BRAND_PRIMARY_BG_DISABLED};
    background-color: var(--cb-color-button-brand-primary-bg-disabled, ${COLOR.BUTTON_BRAND_PRIMARY_BG_DISABLED});
    color: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_DISABLED};
    color: var(--cb-color-button-brand-primary-text-disabled, ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_DISABLED});
  }
`;
export const mixinButtonBrandSecondary = css`
  border-color: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER};
  border-color: var(--cb-color-button-brand-secondary-border, ${COLOR.BUTTON_BRAND_SECONDARY_BORDER});
  background-color: ${COLOR.BUTTON_BRAND_SECONDARY_BG};
  background-color: var(--cb-color-button-brand-secondary-bg, ${COLOR.BUTTON_BRAND_SECONDARY_BG});
  color: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT};
  color: var(--cb-color-button-brand-secondary-text, ${COLOR.BUTTON_BRAND_SECONDARY_TEXT});
  ${mixinButtonShadow}
  
  &:hover,
  &:focus {
    border-color: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_HOVER};
    border-color: var(--cb-color-button-brand-secondary-border-hover, ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_HOVER});
    background-color: ${COLOR.BUTTON_BRAND_SECONDARY_BG_HOVER};
    background-color: var(--cb-color-button-brand-secondary-bg-hover, ${COLOR.BUTTON_BRAND_SECONDARY_BG_HOVER});
    color: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_HOVER};
    color: var(--cb-color-button-brand-secondary-text-hover, ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_HOVER});
  }
  
  &:active {
    border-color: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_ACTIVE};
    border-color: var(--cb-color-button-brand-secondary-border-active, ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_ACTIVE});
    background-color: ${COLOR.BUTTON_BRAND_SECONDARY_BG_ACTIVE};
    background-color: var(--cb-color-button-brand-secondary-bg-active, ${COLOR.BUTTON_BRAND_SECONDARY_BG_ACTIVE});
    color: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_ACTIVE};
    color: var(--cb-color-button-brand-secondary-text-active, ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_ACTIVE});
  }
  
  &:disabled {
    border-color: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_DISABLED};
    border-color: var(--cb-color-button-brand-secondary-border-disabled, ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_DISABLED});
    background-color: ${COLOR.BUTTON_BRAND_SECONDARY_BG_DISABLED};
    background-color: var(--cb-color-button-brand-secondary-bg-disabled, ${COLOR.BUTTON_BRAND_SECONDARY_BG_DISABLED});
    color: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_DISABLED};
    color: var(--cb-color-button-brand-secondary-text-disabled, ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_DISABLED});
  }
`;
export const mixinButtonBrandTertiary = css`
  border-color: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER};
  border-color: var(--cb-color-button-brand-tertiary-border, ${COLOR.BUTTON_BRAND_TERTIARY_BORDER});
  background-color: ${COLOR.BUTTON_BRAND_TERTIARY_BG};
  background-color: var(--cb-color-button-brand-tertiary-bg, ${COLOR.BUTTON_BRAND_TERTIARY_BG});
  color: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT};
  color: var(--cb-color-button-brand-tertiary-text, ${COLOR.BUTTON_BRAND_TERTIARY_TEXT});
  
  &:hover,
  &:focus {
    border-color: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_HOVER};
    border-color: var(--cb-color-button-brand-tertiary-border-hover, ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_HOVER});
    background-color: ${COLOR.BUTTON_BRAND_TERTIARY_BG_HOVER};
    background-color: var(--cb-color-button-brand-tertiary-bg-hover, ${COLOR.BUTTON_BRAND_TERTIARY_BG_HOVER});
    color: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_HOVER};
    color: var(--cb-color-button-brand-tertiary-text-hover, ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_HOVER});
  }
  
  &:active {
    border-color: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_ACTIVE};
    border-color: var(--cb-color-button-brand-tertiary-border-active, ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_ACTIVE});
    background-color: ${COLOR.BUTTON_BRAND_TERTIARY_BG_ACTIVE};
    background-color: var(--cb-color-button-brand-tertiary-bg-active, ${COLOR.BUTTON_BRAND_TERTIARY_BG_ACTIVE});
    color: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_ACTIVE};
    color: var(--cb-color-button-brand-tertiary-text-active, ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_ACTIVE});
  }
  
  &:disabled {
    border-color: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_DISABLED};
    border-color: var(--cb-color-button-brand-tertiary-border-disabled, ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_DISABLED});
    background-color: ${COLOR.BUTTON_BRAND_TERTIARY_BG_DISABLED};
    background-color: var(--cb-color-button-brand-tertiary-bg-disabled, ${COLOR.BUTTON_BRAND_TERTIARY_BG_DISABLED});
    color: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_DISABLED};
    color: var(--cb-color-button-brand-tertiary-text-disabled, ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_DISABLED});
  }
`;
export const mixinButtonTextPrimary = css`
  border-color: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER};
  border-color: var(--cb-color-button-text-primary-border, ${COLOR.BUTTON_TEXT_PRIMARY_BORDER});
  background-color: ${COLOR.BUTTON_TEXT_PRIMARY_BG};
  background-color: var(--cb-color-button-text-primary-bg, ${COLOR.BUTTON_TEXT_PRIMARY_BG});
  color: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT};
  color: var(--cb-color-button-text-primary-text, ${COLOR.BUTTON_TEXT_PRIMARY_TEXT});
  
  &:hover,
  &:focus {
    border-color: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_HOVER};
    border-color: var(--cb-color-button-text-primary-border-hover, ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_HOVER});
    background-color: ${COLOR.BUTTON_TEXT_PRIMARY_BG_HOVER};
    background-color: var(--cb-color-button-text-primary-bg-hover, ${COLOR.BUTTON_TEXT_PRIMARY_BG_HOVER});
    color: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_HOVER};
    color: var(--cb-color-button-text-primary-text-hover, ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_HOVER});
  }
  
  &:active {
    border-color: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_ACTIVE};
    border-color: var(--cb-color-button-text-primary-border-active, ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_ACTIVE});
    background-color: ${COLOR.BUTTON_TEXT_PRIMARY_BG_ACTIVE};
    background-color: var(--cb-color-button-text-primary-bg-active, ${COLOR.BUTTON_TEXT_PRIMARY_BG_ACTIVE});
    color: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_ACTIVE};
    color: var(--cb-color-button-text-primary-text-active, ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_ACTIVE});
  }
  
  &:disabled {
    border-color: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_DISABLED};
    border-color: var(--cb-color-button-text-primary-border-disabled, ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_DISABLED});
    background-color: ${COLOR.BUTTON_TEXT_PRIMARY_BG_DISABLED};
    background-color: var(--cb-color-button-text-primary-bg-disabled, ${COLOR.BUTTON_TEXT_PRIMARY_BG_DISABLED});
    color: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_DISABLED};
    color: var(--cb-color-button-text-primary-text-disabled, ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_DISABLED});
  }
`;
export const mixinButtonTextSecondary = css`
  border-color: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER};
  border-color: var(--cb-color-button-text-secondary-border, ${COLOR.BUTTON_TEXT_SECONDARY_BORDER});
  background-color: ${COLOR.BUTTON_TEXT_SECONDARY_BG};
  background-color: var(--cb-color-button-text-secondary-bg, ${COLOR.BUTTON_TEXT_SECONDARY_BG});
  color: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT};
  color: var(--cb-color-button-text-secondary-text, ${COLOR.BUTTON_TEXT_SECONDARY_TEXT});
  
  &:hover,
  &:focus {
    border-color: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_HOVER};
    border-color: var(--cb-color-button-text-secondary-border-hover, ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_HOVER});
    background-color: ${COLOR.BUTTON_TEXT_SECONDARY_BG_HOVER};
    background-color: var(--cb-color-button-text-secondary-bg-hover, ${COLOR.BUTTON_TEXT_SECONDARY_BG_HOVER});
    color: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_HOVER};
    color: var(--cb-color-button-text-secondary-text-hover, ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_HOVER});
  }
  
  &:active {
    border-color: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_ACTIVE};
    border-color: var(--cb-color-button-text-secondary-border-active, ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_ACTIVE});
    background-color: ${COLOR.BUTTON_TEXT_SECONDARY_BG_ACTIVE};
    background-color: var(--cb-color-button-text-secondary-bg-active, ${COLOR.BUTTON_TEXT_SECONDARY_BG_ACTIVE});
    color: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_ACTIVE};
    color: var(--cb-color-button-text-secondary-text-active, ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_ACTIVE});
  }
  
  &:disabled {
    border-color: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_DISABLED};
    border-color: var(--cb-color-button-text-secondary-border-disabled, ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_DISABLED});
    background-color: ${COLOR.BUTTON_TEXT_SECONDARY_BG_DISABLED};
    background-color: var(--cb-color-button-text-secondary-bg-disabled, ${COLOR.BUTTON_TEXT_SECONDARY_BG_DISABLED});
    color: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_DISABLED};
    color: var(--cb-color-button-text-secondary-text-disabled, ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_DISABLED});
  }
`;
export const mixinButtonTextTertiary = css`
  border-color: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER};
  border-color: var(--cb-color-button-text-tertiary-border, ${COLOR.BUTTON_TEXT_TERTIARY_BORDER});
  background-color: ${COLOR.BUTTON_TEXT_TERTIARY_BG};
  background-color: var(--cb-color-button-text-tertiary-bg, ${COLOR.BUTTON_TEXT_TERTIARY_BG});
  color: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT};
  color: var(--cb-color-button-text-tertiary-text, ${COLOR.BUTTON_TEXT_TERTIARY_TEXT});
  
  &:hover,
  &:focus {
    border-color: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_HOVER};
    border-color: var(--cb-color-button-text-tertiary-border-hover, ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_HOVER});
    background-color: ${COLOR.BUTTON_TEXT_TERTIARY_BG_HOVER};
    background-color: var(--cb-color-button-text-tertiary-bg-hover, ${COLOR.BUTTON_TEXT_TERTIARY_BG_HOVER});
    color: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_HOVER};
    color: var(--cb-color-button-text-tertiary-text-hover, ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_HOVER});
  }
  
  &:active {
    border-color: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_ACTIVE};
    border-color: var(--cb-color-button-text-tertiary-border-active, ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_ACTIVE});
    background-color: ${COLOR.BUTTON_TEXT_TERTIARY_BG_ACTIVE};
    background-color: var(--cb-color-button-text-tertiary-bg-active, ${COLOR.BUTTON_TEXT_TERTIARY_BG_ACTIVE});
    color: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_ACTIVE};
    color: var(--cb-color-button-text-tertiary-text-active, ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_ACTIVE});
  }
  
  &:disabled {
    border-color: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_DISABLED};
    border-color: var(--cb-color-button-text-tertiary-border-disabled, ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_DISABLED});
    background-color: ${COLOR.BUTTON_TEXT_TERTIARY_BG_DISABLED};
    background-color: var(--cb-color-button-text-tertiary-bg-disabled, ${COLOR.BUTTON_TEXT_TERTIARY_BG_DISABLED});
    color: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_DISABLED};
    color: var(--cb-color-button-text-tertiary-text-disabled, ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_DISABLED});
  }
`;
