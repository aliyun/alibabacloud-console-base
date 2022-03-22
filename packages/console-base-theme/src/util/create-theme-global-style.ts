// generated by generate-code-global-style.ts

import {
  DefaultTheme,
  GlobalStyleComponent,
  createGlobalStyle
} from 'styled-components';

import {
  ThemeColors,
  ThemeTypo,
  ThemeSize
} from '../var';

interface ITheme {
  COLOR: ThemeColors;
  TYPO: ThemeTypo;
  SIZE: ThemeSize;
}

export default function createThemeGlobalStyle({
  COLOR,
  TYPO,
  SIZE
}: ITheme): GlobalStyleComponent<any, DefaultTheme> { // eslint-disable-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return createGlobalStyle<any>`
    :root {
      --cb-color-text-transparent: ${COLOR.TEXT_TRANSPARENT};
      --cb-color-text-white: ${COLOR.TEXT_WHITE};
      --cb-color-text-black: ${COLOR.TEXT_BLACK};
      --cb-color-text-inverse: ${COLOR.TEXT_INVERSE};
      --cb-color-text-brand: ${COLOR.TEXT_BRAND};
      --cb-color-text-brand-hover: ${COLOR.TEXT_BRAND_HOVER};
      --cb-color-text-brand-active: ${COLOR.TEXT_BRAND_ACTIVE};
      --cb-color-text-accent: ${COLOR.TEXT_ACCENT};
      --cb-color-text-accent-hover: ${COLOR.TEXT_ACCENT_HOVER};
      --cb-color-text-accent-active: ${COLOR.TEXT_ACCENT_ACTIVE};
      --cb-color-text-primary: ${COLOR.TEXT_PRIMARY};
      --cb-color-text-secondary: ${COLOR.TEXT_SECONDARY};
      --cb-color-text-tertiary: ${COLOR.TEXT_TERTIARY};
      --cb-color-text-disabled: ${COLOR.TEXT_DISABLED};
      --cb-color-text-help: ${COLOR.TEXT_HELP};
      --cb-color-text-info: ${COLOR.TEXT_INFO};
      --cb-color-text-success: ${COLOR.TEXT_SUCCESS};
      --cb-color-text-warning: ${COLOR.TEXT_WARNING};
      --cb-color-text-error: ${COLOR.TEXT_ERROR};
      --cb-color-text-danger: ${COLOR.TEXT_DANGER};
      --cb-color-text-emphasis: ${COLOR.TEXT_EMPHASIS};
      --cb-color-text-code: ${COLOR.TEXT_CODE};
      --cb-color-bg-transparent: ${COLOR.BG_TRANSPARENT};
      --cb-color-bg-white: ${COLOR.BG_WHITE};
      --cb-color-bg-black: ${COLOR.BG_BLACK};
      --cb-color-bg-inverse: ${COLOR.BG_INVERSE};
      --cb-color-bg-brand: ${COLOR.BG_BRAND};
      --cb-color-bg-brand-hover: ${COLOR.BG_BRAND_HOVER};
      --cb-color-bg-brand-active: ${COLOR.BG_BRAND_ACTIVE};
      --cb-color-bg-accent: ${COLOR.BG_ACCENT};
      --cb-color-bg-accent-hover: ${COLOR.BG_ACCENT_HOVER};
      --cb-color-bg-accent-active: ${COLOR.BG_ACCENT_ACTIVE};
      --cb-color-bg-primary: ${COLOR.BG_PRIMARY};
      --cb-color-bg-secondary: ${COLOR.BG_SECONDARY};
      --cb-color-bg-secondary-fade: ${COLOR.BG_SECONDARY_FADE};
      --cb-color-bg-tertiary: ${COLOR.BG_TERTIARY};
      --cb-color-bg-tertiary-fade: ${COLOR.BG_TERTIARY_FADE};
      --cb-color-bg-disabled: ${COLOR.BG_DISABLED};
      --cb-color-bg-help: ${COLOR.BG_HELP};
      --cb-color-bg-help-tint: ${COLOR.BG_HELP_TINT};
      --cb-color-bg-help-tint-fade: ${COLOR.BG_HELP_TINT_FADE};
      --cb-color-bg-info: ${COLOR.BG_INFO};
      --cb-color-bg-info-tint: ${COLOR.BG_INFO_TINT};
      --cb-color-bg-info-tint-fade: ${COLOR.BG_INFO_TINT_FADE};
      --cb-color-bg-success: ${COLOR.BG_SUCCESS};
      --cb-color-bg-success-tint: ${COLOR.BG_SUCCESS_TINT};
      --cb-color-bg-success-tint-fade: ${COLOR.BG_SUCCESS_TINT_FADE};
      --cb-color-bg-warning: ${COLOR.BG_WARNING};
      --cb-color-bg-warning-tint: ${COLOR.BG_WARNING_TINT};
      --cb-color-bg-warning-tint-fade: ${COLOR.BG_WARNING_TINT_FADE};
      --cb-color-bg-error: ${COLOR.BG_ERROR};
      --cb-color-bg-error-tint: ${COLOR.BG_ERROR_TINT};
      --cb-color-bg-error-tint-fade: ${COLOR.BG_ERROR_TINT_FADE};
      --cb-color-bg-danger: ${COLOR.BG_DANGER};
      --cb-color-bg-backdrop: ${COLOR.BG_BACKDROP};
      --cb-color-border-transparent: ${COLOR.BORDER_TRANSPARENT};
      --cb-color-border-white: ${COLOR.BORDER_WHITE};
      --cb-color-border-brand: ${COLOR.BORDER_BRAND};
      --cb-color-border-brand-hover: ${COLOR.BORDER_BRAND_HOVER};
      --cb-color-border-brand-active: ${COLOR.BORDER_BRAND_ACTIVE};
      --cb-color-border-accent: ${COLOR.BORDER_ACCENT};
      --cb-color-border-accent-hover: ${COLOR.BORDER_ACCENT_HOVER};
      --cb-color-border-accent-active: ${COLOR.BORDER_ACCENT_ACTIVE};
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
      --cb-color-shadow: ${COLOR.SHADOW};
      --cb-color-link-primary: ${COLOR.LINK_PRIMARY};
      --cb-color-link-primary-visited: ${COLOR.LINK_PRIMARY_VISITED};
      --cb-color-link-primary-hover: ${COLOR.LINK_PRIMARY_HOVER};
      --cb-color-link-primary-active: ${COLOR.LINK_PRIMARY_ACTIVE};
      --cb-color-link-secondary: ${COLOR.LINK_SECONDARY};
      --cb-color-link-secondary-visited: ${COLOR.LINK_SECONDARY_VISITED};
      --cb-color-link-secondary-hover: ${COLOR.LINK_SECONDARY_HOVER};
      --cb-color-link-secondary-active: ${COLOR.LINK_SECONDARY_ACTIVE};
      --cb-color-link-tertiary: ${COLOR.LINK_TERTIARY};
      --cb-color-link-tertiary-visited: ${COLOR.LINK_TERTIARY_VISITED};
      --cb-color-link-tertiary-hover: ${COLOR.LINK_TERTIARY_HOVER};
      --cb-color-link-tertiary-active: ${COLOR.LINK_TERTIARY_ACTIVE};
      --cb-color-link-brand: ${COLOR.LINK_BRAND};
      --cb-color-link-brand-visited: ${COLOR.LINK_BRAND_VISITED};
      --cb-color-link-brand-hover: ${COLOR.LINK_BRAND_HOVER};
      --cb-color-link-brand-active: ${COLOR.LINK_BRAND_ACTIVE};
      --cb-color-link-brand-secondary: ${COLOR.LINK_BRAND_SECONDARY};
      --cb-color-link-brand-secondary-visited: ${COLOR.LINK_BRAND_SECONDARY_VISITED};
      --cb-color-link-brand-secondary-hover: ${COLOR.LINK_BRAND_SECONDARY_HOVER};
      --cb-color-link-brand-secondary-active: ${COLOR.LINK_BRAND_SECONDARY_ACTIVE};
      --cb-color-link-disabled: ${COLOR.LINK_DISABLED};
      --cb-color-input-text: ${COLOR.INPUT_TEXT};
      --cb-color-input-bg: ${COLOR.INPUT_BG};
      --cb-color-input-border: ${COLOR.INPUT_BORDER};
      --cb-color-input-text-hover: ${COLOR.INPUT_TEXT_HOVER};
      --cb-color-input-bg-hover: ${COLOR.INPUT_BG_HOVER};
      --cb-color-input-border-hover: ${COLOR.INPUT_BORDER_HOVER};
      --cb-color-input-text-focus: ${COLOR.INPUT_TEXT_FOCUS};
      --cb-color-input-bg-focus: ${COLOR.INPUT_BG_FOCUS};
      --cb-color-input-border-focus: ${COLOR.INPUT_BORDER_FOCUS};
      --cb-color-input-border-focus-brand: ${COLOR.INPUT_BORDER_FOCUS_BRAND};
      --cb-color-input-text-disabled: ${COLOR.INPUT_TEXT_DISABLED};
      --cb-color-input-bg-disabled: ${COLOR.INPUT_BG_DISABLED};
      --cb-color-input-border-disabled: ${COLOR.INPUT_BORDER_DISABLED};
      --cb-color-input-placeholder: ${COLOR.INPUT_PLACEHOLDER};
      --cb-color-button-menu-text: ${COLOR.BUTTON_MENU_TEXT};
      --cb-color-button-menu-bg: ${COLOR.BUTTON_MENU_BG};
      --cb-color-button-menu-border: ${COLOR.BUTTON_MENU_BORDER};
      --cb-color-button-menu-text-hover: ${COLOR.BUTTON_MENU_TEXT_HOVER};
      --cb-color-button-menu-bg-hover: ${COLOR.BUTTON_MENU_BG_HOVER};
      --cb-color-button-menu-border-hover: ${COLOR.BUTTON_MENU_BORDER_HOVER};
      --cb-color-button-menu-text-active: ${COLOR.BUTTON_MENU_TEXT_ACTIVE};
      --cb-color-button-menu-bg-active: ${COLOR.BUTTON_MENU_BG_ACTIVE};
      --cb-color-button-menu-border-active: ${COLOR.BUTTON_MENU_BORDER_ACTIVE};
      --cb-color-button-menu-text-disabled: ${COLOR.BUTTON_MENU_TEXT_DISABLED};
      --cb-color-button-menu-bg-disabled: ${COLOR.BUTTON_MENU_BG_DISABLED};
      --cb-color-button-menu-border-disabled: ${COLOR.BUTTON_MENU_BORDER_DISABLED};
      --cb-color-button-danger-text: ${COLOR.BUTTON_DANGER_TEXT};
      --cb-color-button-danger-bg: ${COLOR.BUTTON_DANGER_BG};
      --cb-color-button-danger-border: ${COLOR.BUTTON_DANGER_BORDER};
      --cb-color-button-danger-text-hover: ${COLOR.BUTTON_DANGER_TEXT_HOVER};
      --cb-color-button-danger-bg-hover: ${COLOR.BUTTON_DANGER_BG_HOVER};
      --cb-color-button-danger-border-hover: ${COLOR.BUTTON_DANGER_BORDER_HOVER};
      --cb-color-button-danger-text-active: ${COLOR.BUTTON_DANGER_TEXT_ACTIVE};
      --cb-color-button-danger-bg-active: ${COLOR.BUTTON_DANGER_BG_ACTIVE};
      --cb-color-button-danger-border-active: ${COLOR.BUTTON_DANGER_BORDER_ACTIVE};
      --cb-color-button-danger-text-disabled: ${COLOR.BUTTON_DANGER_TEXT_DISABLED};
      --cb-color-button-danger-bg-disabled: ${COLOR.BUTTON_DANGER_BG_DISABLED};
      --cb-color-button-danger-border-disabled: ${COLOR.BUTTON_DANGER_BORDER_DISABLED};
      --cb-color-button-primary-text: ${COLOR.BUTTON_PRIMARY_TEXT};
      --cb-color-button-primary-bg: ${COLOR.BUTTON_PRIMARY_BG};
      --cb-color-button-primary-border: ${COLOR.BUTTON_PRIMARY_BORDER};
      --cb-color-button-primary-text-hover: ${COLOR.BUTTON_PRIMARY_TEXT_HOVER};
      --cb-color-button-primary-bg-hover: ${COLOR.BUTTON_PRIMARY_BG_HOVER};
      --cb-color-button-primary-border-hover: ${COLOR.BUTTON_PRIMARY_BORDER_HOVER};
      --cb-color-button-primary-text-active: ${COLOR.BUTTON_PRIMARY_TEXT_ACTIVE};
      --cb-color-button-primary-bg-active: ${COLOR.BUTTON_PRIMARY_BG_ACTIVE};
      --cb-color-button-primary-border-active: ${COLOR.BUTTON_PRIMARY_BORDER_ACTIVE};
      --cb-color-button-primary-text-disabled: ${COLOR.BUTTON_PRIMARY_TEXT_DISABLED};
      --cb-color-button-primary-bg-disabled: ${COLOR.BUTTON_PRIMARY_BG_DISABLED};
      --cb-color-button-primary-border-disabled: ${COLOR.BUTTON_PRIMARY_BORDER_DISABLED};
      --cb-color-button-secondary-text: ${COLOR.BUTTON_SECONDARY_TEXT};
      --cb-color-button-secondary-bg: ${COLOR.BUTTON_SECONDARY_BG};
      --cb-color-button-secondary-border: ${COLOR.BUTTON_SECONDARY_BORDER};
      --cb-color-button-secondary-text-hover: ${COLOR.BUTTON_SECONDARY_TEXT_HOVER};
      --cb-color-button-secondary-bg-hover: ${COLOR.BUTTON_SECONDARY_BG_HOVER};
      --cb-color-button-secondary-border-hover: ${COLOR.BUTTON_SECONDARY_BORDER_HOVER};
      --cb-color-button-secondary-text-active: ${COLOR.BUTTON_SECONDARY_TEXT_ACTIVE};
      --cb-color-button-secondary-bg-active: ${COLOR.BUTTON_SECONDARY_BG_ACTIVE};
      --cb-color-button-secondary-border-active: ${COLOR.BUTTON_SECONDARY_BORDER_ACTIVE};
      --cb-color-button-secondary-text-disabled: ${COLOR.BUTTON_SECONDARY_TEXT_DISABLED};
      --cb-color-button-secondary-bg-disabled: ${COLOR.BUTTON_SECONDARY_BG_DISABLED};
      --cb-color-button-secondary-border-disabled: ${COLOR.BUTTON_SECONDARY_BORDER_DISABLED};
      --cb-color-button-secondary-alt-text: ${COLOR.BUTTON_SECONDARY_ALT_TEXT};
      --cb-color-button-secondary-alt-bg: ${COLOR.BUTTON_SECONDARY_ALT_BG};
      --cb-color-button-secondary-alt-border: ${COLOR.BUTTON_SECONDARY_ALT_BORDER};
      --cb-color-button-secondary-alt-text-hover: ${COLOR.BUTTON_SECONDARY_ALT_TEXT_HOVER};
      --cb-color-button-secondary-alt-bg-hover: ${COLOR.BUTTON_SECONDARY_ALT_BG_HOVER};
      --cb-color-button-secondary-alt-border-hover: ${COLOR.BUTTON_SECONDARY_ALT_BORDER_HOVER};
      --cb-color-button-secondary-alt-text-active: ${COLOR.BUTTON_SECONDARY_ALT_TEXT_ACTIVE};
      --cb-color-button-secondary-alt-bg-active: ${COLOR.BUTTON_SECONDARY_ALT_BG_ACTIVE};
      --cb-color-button-secondary-alt-border-active: ${COLOR.BUTTON_SECONDARY_ALT_BORDER_ACTIVE};
      --cb-color-button-secondary-alt-text-disabled: ${COLOR.BUTTON_SECONDARY_ALT_TEXT_DISABLED};
      --cb-color-button-secondary-alt-bg-disabled: ${COLOR.BUTTON_SECONDARY_ALT_BG_DISABLED};
      --cb-color-button-secondary-alt-border-disabled: ${COLOR.BUTTON_SECONDARY_ALT_BORDER_DISABLED};
      --cb-color-button-tertiary-text: ${COLOR.BUTTON_TERTIARY_TEXT};
      --cb-color-button-tertiary-bg: ${COLOR.BUTTON_TERTIARY_BG};
      --cb-color-button-tertiary-border: ${COLOR.BUTTON_TERTIARY_BORDER};
      --cb-color-button-tertiary-text-hover: ${COLOR.BUTTON_TERTIARY_TEXT_HOVER};
      --cb-color-button-tertiary-bg-hover: ${COLOR.BUTTON_TERTIARY_BG_HOVER};
      --cb-color-button-tertiary-border-hover: ${COLOR.BUTTON_TERTIARY_BORDER_HOVER};
      --cb-color-button-tertiary-text-active: ${COLOR.BUTTON_TERTIARY_TEXT_ACTIVE};
      --cb-color-button-tertiary-bg-active: ${COLOR.BUTTON_TERTIARY_BG_ACTIVE};
      --cb-color-button-tertiary-border-active: ${COLOR.BUTTON_TERTIARY_BORDER_ACTIVE};
      --cb-color-button-tertiary-text-disabled: ${COLOR.BUTTON_TERTIARY_TEXT_DISABLED};
      --cb-color-button-tertiary-bg-disabled: ${COLOR.BUTTON_TERTIARY_BG_DISABLED};
      --cb-color-button-tertiary-border-disabled: ${COLOR.BUTTON_TERTIARY_BORDER_DISABLED};
      --cb-color-button-tertiary-alt-text: ${COLOR.BUTTON_TERTIARY_ALT_TEXT};
      --cb-color-button-tertiary-alt-bg: ${COLOR.BUTTON_TERTIARY_ALT_BG};
      --cb-color-button-tertiary-alt-border: ${COLOR.BUTTON_TERTIARY_ALT_BORDER};
      --cb-color-button-tertiary-alt-text-hover: ${COLOR.BUTTON_TERTIARY_ALT_TEXT_HOVER};
      --cb-color-button-tertiary-alt-bg-hover: ${COLOR.BUTTON_TERTIARY_ALT_BG_HOVER};
      --cb-color-button-tertiary-alt-border-hover: ${COLOR.BUTTON_TERTIARY_ALT_BORDER_HOVER};
      --cb-color-button-tertiary-alt-text-active: ${COLOR.BUTTON_TERTIARY_ALT_TEXT_ACTIVE};
      --cb-color-button-tertiary-alt-bg-active: ${COLOR.BUTTON_TERTIARY_ALT_BG_ACTIVE};
      --cb-color-button-tertiary-alt-border-active: ${COLOR.BUTTON_TERTIARY_ALT_BORDER_ACTIVE};
      --cb-color-button-tertiary-alt-text-disabled: ${COLOR.BUTTON_TERTIARY_ALT_TEXT_DISABLED};
      --cb-color-button-tertiary-alt-bg-disabled: ${COLOR.BUTTON_TERTIARY_ALT_BG_DISABLED};
      --cb-color-button-tertiary-alt-border-disabled: ${COLOR.BUTTON_TERTIARY_ALT_BORDER_DISABLED};
      --cb-color-button-brand-primary-text: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT};
      --cb-color-button-brand-primary-bg: ${COLOR.BUTTON_BRAND_PRIMARY_BG};
      --cb-color-button-brand-primary-border: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER};
      --cb-color-button-brand-primary-text-hover: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_HOVER};
      --cb-color-button-brand-primary-bg-hover: ${COLOR.BUTTON_BRAND_PRIMARY_BG_HOVER};
      --cb-color-button-brand-primary-border-hover: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_HOVER};
      --cb-color-button-brand-primary-text-active: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_ACTIVE};
      --cb-color-button-brand-primary-bg-active: ${COLOR.BUTTON_BRAND_PRIMARY_BG_ACTIVE};
      --cb-color-button-brand-primary-border-active: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_ACTIVE};
      --cb-color-button-brand-primary-text-disabled: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_DISABLED};
      --cb-color-button-brand-primary-bg-disabled: ${COLOR.BUTTON_BRAND_PRIMARY_BG_DISABLED};
      --cb-color-button-brand-primary-border-disabled: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_DISABLED};
      --cb-color-button-brand-secondary-text: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT};
      --cb-color-button-brand-secondary-bg: ${COLOR.BUTTON_BRAND_SECONDARY_BG};
      --cb-color-button-brand-secondary-border: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER};
      --cb-color-button-brand-secondary-text-hover: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_HOVER};
      --cb-color-button-brand-secondary-bg-hover: ${COLOR.BUTTON_BRAND_SECONDARY_BG_HOVER};
      --cb-color-button-brand-secondary-border-hover: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_HOVER};
      --cb-color-button-brand-secondary-text-active: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_ACTIVE};
      --cb-color-button-brand-secondary-bg-active: ${COLOR.BUTTON_BRAND_SECONDARY_BG_ACTIVE};
      --cb-color-button-brand-secondary-border-active: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_ACTIVE};
      --cb-color-button-brand-secondary-text-disabled: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_DISABLED};
      --cb-color-button-brand-secondary-bg-disabled: ${COLOR.BUTTON_BRAND_SECONDARY_BG_DISABLED};
      --cb-color-button-brand-secondary-border-disabled: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_DISABLED};
      --cb-color-button-brand-secondary-alt-text: ${COLOR.BUTTON_BRAND_SECONDARY_ALT_TEXT};
      --cb-color-button-brand-secondary-alt-bg: ${COLOR.BUTTON_BRAND_SECONDARY_ALT_BG};
      --cb-color-button-brand-secondary-alt-border: ${COLOR.BUTTON_BRAND_SECONDARY_ALT_BORDER};
      --cb-color-button-brand-secondary-alt-text-hover: ${COLOR.BUTTON_BRAND_SECONDARY_ALT_TEXT_HOVER};
      --cb-color-button-brand-secondary-alt-bg-hover: ${COLOR.BUTTON_BRAND_SECONDARY_ALT_BG_HOVER};
      --cb-color-button-brand-secondary-alt-border-hover: ${COLOR.BUTTON_BRAND_SECONDARY_ALT_BORDER_HOVER};
      --cb-color-button-brand-secondary-alt-text-active: ${COLOR.BUTTON_BRAND_SECONDARY_ALT_TEXT_ACTIVE};
      --cb-color-button-brand-secondary-alt-bg-active: ${COLOR.BUTTON_BRAND_SECONDARY_ALT_BG_ACTIVE};
      --cb-color-button-brand-secondary-alt-border-active: ${COLOR.BUTTON_BRAND_SECONDARY_ALT_BORDER_ACTIVE};
      --cb-color-button-brand-secondary-alt-text-disabled: ${COLOR.BUTTON_BRAND_SECONDARY_ALT_TEXT_DISABLED};
      --cb-color-button-brand-secondary-alt-bg-disabled: ${COLOR.BUTTON_BRAND_SECONDARY_ALT_BG_DISABLED};
      --cb-color-button-brand-secondary-alt-border-disabled: ${COLOR.BUTTON_BRAND_SECONDARY_ALT_BORDER_DISABLED};
      --cb-color-button-brand-tertiary-text: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT};
      --cb-color-button-brand-tertiary-bg: ${COLOR.BUTTON_BRAND_TERTIARY_BG};
      --cb-color-button-brand-tertiary-border: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER};
      --cb-color-button-brand-tertiary-text-hover: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_HOVER};
      --cb-color-button-brand-tertiary-bg-hover: ${COLOR.BUTTON_BRAND_TERTIARY_BG_HOVER};
      --cb-color-button-brand-tertiary-border-hover: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_HOVER};
      --cb-color-button-brand-tertiary-text-active: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_ACTIVE};
      --cb-color-button-brand-tertiary-bg-active: ${COLOR.BUTTON_BRAND_TERTIARY_BG_ACTIVE};
      --cb-color-button-brand-tertiary-border-active: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_ACTIVE};
      --cb-color-button-brand-tertiary-text-disabled: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_DISABLED};
      --cb-color-button-brand-tertiary-bg-disabled: ${COLOR.BUTTON_BRAND_TERTIARY_BG_DISABLED};
      --cb-color-button-brand-tertiary-border-disabled: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_DISABLED};
      --cb-color-button-text-primary-text: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT};
      --cb-color-button-text-primary-bg: ${COLOR.BUTTON_TEXT_PRIMARY_BG};
      --cb-color-button-text-primary-border: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER};
      --cb-color-button-text-primary-text-hover: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_HOVER};
      --cb-color-button-text-primary-bg-hover: ${COLOR.BUTTON_TEXT_PRIMARY_BG_HOVER};
      --cb-color-button-text-primary-border-hover: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_HOVER};
      --cb-color-button-text-primary-text-active: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_ACTIVE};
      --cb-color-button-text-primary-bg-active: ${COLOR.BUTTON_TEXT_PRIMARY_BG_ACTIVE};
      --cb-color-button-text-primary-border-active: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_ACTIVE};
      --cb-color-button-text-primary-text-disabled: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_DISABLED};
      --cb-color-button-text-primary-bg-disabled: ${COLOR.BUTTON_TEXT_PRIMARY_BG_DISABLED};
      --cb-color-button-text-primary-border-disabled: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_DISABLED};
      --cb-color-button-text-secondary-text: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT};
      --cb-color-button-text-secondary-bg: ${COLOR.BUTTON_TEXT_SECONDARY_BG};
      --cb-color-button-text-secondary-border: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER};
      --cb-color-button-text-secondary-text-hover: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_HOVER};
      --cb-color-button-text-secondary-bg-hover: ${COLOR.BUTTON_TEXT_SECONDARY_BG_HOVER};
      --cb-color-button-text-secondary-border-hover: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_HOVER};
      --cb-color-button-text-secondary-text-active: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_ACTIVE};
      --cb-color-button-text-secondary-bg-active: ${COLOR.BUTTON_TEXT_SECONDARY_BG_ACTIVE};
      --cb-color-button-text-secondary-border-active: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_ACTIVE};
      --cb-color-button-text-secondary-text-disabled: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_DISABLED};
      --cb-color-button-text-secondary-bg-disabled: ${COLOR.BUTTON_TEXT_SECONDARY_BG_DISABLED};
      --cb-color-button-text-secondary-border-disabled: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_DISABLED};
      --cb-color-button-text-tertiary-text: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT};
      --cb-color-button-text-tertiary-bg: ${COLOR.BUTTON_TEXT_TERTIARY_BG};
      --cb-color-button-text-tertiary-border: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER};
      --cb-color-button-text-tertiary-text-hover: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_HOVER};
      --cb-color-button-text-tertiary-bg-hover: ${COLOR.BUTTON_TEXT_TERTIARY_BG_HOVER};
      --cb-color-button-text-tertiary-border-hover: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_HOVER};
      --cb-color-button-text-tertiary-text-active: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_ACTIVE};
      --cb-color-button-text-tertiary-bg-active: ${COLOR.BUTTON_TEXT_TERTIARY_BG_ACTIVE};
      --cb-color-button-text-tertiary-border-active: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_ACTIVE};
      --cb-color-button-text-tertiary-text-disabled: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_DISABLED};
      --cb-color-button-text-tertiary-bg-disabled: ${COLOR.BUTTON_TEXT_TERTIARY_BG_DISABLED};
      --cb-color-button-text-tertiary-border-disabled: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_DISABLED};
      --cb-color-button-text-brand-primary-text: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT};
      --cb-color-button-text-brand-primary-bg: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG};
      --cb-color-button-text-brand-primary-border: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER};
      --cb-color-button-text-brand-primary-text-hover: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_HOVER};
      --cb-color-button-text-brand-primary-bg-hover: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_HOVER};
      --cb-color-button-text-brand-primary-border-hover: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_HOVER};
      --cb-color-button-text-brand-primary-text-active: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_ACTIVE};
      --cb-color-button-text-brand-primary-bg-active: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_ACTIVE};
      --cb-color-button-text-brand-primary-border-active: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_ACTIVE};
      --cb-color-button-text-brand-primary-text-disabled: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_DISABLED};
      --cb-color-button-text-brand-primary-bg-disabled: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_DISABLED};
      --cb-color-button-text-brand-primary-border-disabled: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_DISABLED};
      --cb-color-button-text-brand-secondary-text: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT};
      --cb-color-button-text-brand-secondary-bg: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG};
      --cb-color-button-text-brand-secondary-border: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER};
      --cb-color-button-text-brand-secondary-text-hover: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_HOVER};
      --cb-color-button-text-brand-secondary-bg-hover: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_HOVER};
      --cb-color-button-text-brand-secondary-border-hover: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_HOVER};
      --cb-color-button-text-brand-secondary-text-active: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_ACTIVE};
      --cb-color-button-text-brand-secondary-bg-active: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_ACTIVE};
      --cb-color-button-text-brand-secondary-border-active: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_ACTIVE};
      --cb-color-button-text-brand-secondary-text-disabled: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_DISABLED};
      --cb-color-button-text-brand-secondary-bg-disabled: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_DISABLED};
      --cb-color-button-text-brand-secondary-border-disabled: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_DISABLED};
      --cb-typo-font-family-base: ${TYPO.FONT_FAMILY_BASE};
      --cb-typo-font-family-monospace: ${TYPO.FONT_FAMILY_MONOSPACE};
      --cb-size-border-radius-xs: ${SIZE.BORDER_RADIUS_XS}px;
      --cb-size-border-radius-s: ${SIZE.BORDER_RADIUS_S}px;
      --cb-size-border-radius-m: ${SIZE.BORDER_RADIUS_M}px;
      --cb-size-border-radius-l: ${SIZE.BORDER_RADIUS_L}px;
      --cb-size-border-radius-xl: ${SIZE.BORDER_RADIUS_XL}px;
    }
  `;
}
