import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { IconType } from '@alicloud/console-base-rc-icon';
import { EButtonSize, EButtonFontSize, EButtonThemeColorBd, EButtonThemeColorBg, EButtonThemeColor, EButtonPreset } from '../const';
declare type TPropsForHtmlAnchorNButton = ButtonHTMLAttributes<HTMLElement> & AnchorHTMLAttributes<HTMLElement>;
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
    block?: boolean;
    ellipsis?: boolean;
    textAlign?: 'left' | 'center' | 'right';
    size?: EButtonSize;
    fontSize?: EButtonFontSize;
}
export interface IButtonAppearanceAndTheme extends IButtonAppearance, IButtonThemePack {
}
export interface IButtonProps extends IButtonAppearanceAndTheme, Omit<TPropsForHtmlAnchorNButton, 'title'> {
    preset?: EButtonPreset;
    component?: 'button' | 'a' | 'span' | 'div';
    label?: string | JSX.Element;
    title?: string | boolean;
    iconLeft?: IconType | JSX.Element;
    iconRight?: IconType | JSX.Element;
    spm: string;
    loading?: boolean;
}
export interface IPropsForSc extends IButtonAppearanceAndTheme, TPropsForHtmlAnchorNButton {
}
export {};
