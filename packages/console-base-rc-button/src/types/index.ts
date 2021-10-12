import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes
} from 'react';

import {
  IconType
} from '@alicloud/console-base-rc-icon';

import {
  EButtonTheme,
  EButtonSize
} from '../const';

export interface IButtonPropsForSc extends ButtonHTMLAttributes<HTMLElement>, Omit<AnchorHTMLAttributes<HTMLElement>, 'type'> {
  theme?: EButtonTheme;
  size?: EButtonSize;
  textAlign?: 'left' | 'center' | 'right'; // a button is by default center aligned (`align` is a deprecated HTML attribute)
  cursor?: string;
  /**
   * 在有边框的时候，按钮默认会有个很小的圆角（2px），可以设置
   * - true 默认
   * - false 没有圆角
   * - 'full' 两头圆角
   */
  borderRadius?: boolean | 'full';
  noShadow?: boolean; // 去掉 hover 及 active 时的 shadow（对非 tertiary 和 text）
  block?: boolean; // whether to display as a block level dom
  ellipsis?: boolean;
  loading?: boolean;
  active?: boolean; // 将状态锁定在 active
  [dataName: `data-${string}`]: unknown;
}

export interface IButtonProps extends Omit<IButtonPropsForSc, 'title'> {
  component?: 'button' | 'a' | 'span' | 'div'; // 理论上 button 不能包含 button 和 a，a 不能包含 a，当视觉上有这样的场景的时候，可以用该属性（无法搞成 as..）
  // content
  label?: string | JSX.Element; // or you can use `children` instead, but i prefer this way
  title?: string | boolean; // 为 `true` 时，使用 label（如果它是 string 的话）作为 title
  iconLeft?: IconType | JSX.Element; // 左侧 Icon，如果是 string（IconType），则使用 @alicloud/console-base-rc-icon
  iconRight?: IconType | JSX.Element; // 右侧 Icon，类上
  // behavior
  spm?: string; // force to have a goldlog ghost click attribute
  // class 钩子，以便有需要自定义样式（比如 responsive 的情况，隐藏图标的需求）
  classNameForIconLeft?: string;
  classNameForIconRight?: string;
}
