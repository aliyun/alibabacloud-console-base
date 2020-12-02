import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes
} from 'react';

import {
  IconType
} from '@alicloud/console-base-rc-icon';

import {
  EButtonSize,
  EButtonFontSize,
  EButtonThemeColorBd,
  EButtonThemeColorBg,
  EButtonThemeColor,
  EButtonPreset
} from '../const';

type TPropsForHtmlAnchorNButton = ButtonHTMLAttributes<HTMLElement> & AnchorHTMLAttributes<HTMLElement>;

export interface IButtonThemePack {
  themeColorBd?: EButtonThemeColorBd;
  themeColorBdHover?: EButtonThemeColorBd;
  themeColorBg?: EButtonThemeColorBg;
  themeColorBgHover?: EButtonThemeColorBg;
  themeColor?: EButtonThemeColor;
  themeColorHover?: EButtonThemeColor;
}

export interface IButtonAppearance {
  disabled?: boolean;
  block?: boolean; // whether to display as a block level dom
  ellipsis?: boolean;
  textAlign?: 'left' | 'center' | 'right'; // a button is by default center aligned (`align` is a deprecated HTML attribute)
  size?: EButtonSize;
  fontSize?: EButtonFontSize;
}

export interface IButtonAppearanceAndTheme extends IButtonAppearance, IButtonThemePack {}

export interface IButtonProps extends IButtonAppearanceAndTheme, Omit<TPropsForHtmlAnchorNButton, 'title'> {
  preset?: EButtonPreset;
  component?: 'button' | 'a' | 'span' | 'div'; // 理论上 button 不能包含 button 和 a，a 不能包含 a，当视觉上有这样的场景的时候，可以用该属性（无法搞成 as..）
  // content
  label?: string | JSX.Element; // or you can use `children` instead, but i prefer this way
  title?: string | boolean; // 为 `true` 时，使用 label（如果它是 string 的话）作为 title
  iconLeft?: IconType | JSX.Element; // 左侧 Icon，如果是 string（IconType），则使用 @alicloud/console-base-rc-icon is used
  iconRight?: IconType | JSX.Element; // 右侧 Icon，类上
  // behavior
  spm: string; // force to have a goldlog ghost click attribute
  loading?: boolean;
}

export interface IPropsForSc extends IButtonAppearanceAndTheme, TPropsForHtmlAnchorNButton {}
