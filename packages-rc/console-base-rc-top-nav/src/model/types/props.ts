import {
  HTMLAttributes,
  ReactNode
} from 'react';

import {
  ITopNavButtonProps,
  ITopNavLogoProps,
  ITopNavDockProps,
  ITopNavHelpProps,
  ITopNavLanguageProps,
  ITopNavAccountProps
} from './common';

export interface IModelProps extends HTMLAttributes<HTMLDivElement> {
  fixed?: boolean;
  dock?: ITopNavDockProps | null; // 程序坞
  logo?: ITopNavLogoProps | null;
  /**
   * 贴近 logo 的较固定的部分，与 logo 之间会有一条小竖线分隔，当没有 logo 的时候，它也不会有
   */
  logoExtra?: JSX.Element | null;
  menus?: (ITopNavButtonProps | null)[] | null;
  help?: string | ITopNavHelpProps; // 帮助文档配置，menu 的特化配置
  language?: ITopNavLanguageProps | null; // 语言，menu 的特化配置
  account?: ITopNavAccountProps | null; // 账号，menu 的特化配置
  customLeft?: ReactNode;
  customRight?: ReactNode;
  customLeftClassName?: string; // 为了便于有个样式钩子
  customRightClassName?: string; // 为了便于有个样式钩子
  // 任何菜单有 dropdown 的时候，dropdown 展示时的回调，一般用于打点
  onMenuDropdown?(key: string): void;
}
