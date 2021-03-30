import {
  HTMLAttributes,
  ReactElement,
  ReactNode
} from 'react';

import {
  ButtonProps
} from '@alicloud/console-base-rc-button';
import {
  IconType
} from '@alicloud/console-base-rc-icon';
import {
  DropdownProps
} from '@alicloud/console-base-rc-dropdown';

interface IPropsTopNavButtonLabel {
  icon?: IconType;
  iconRotate?: number;
  html?: string;
  text?: string | ReactElement;
  count?: number; // 展示个数
  countAsDot?: boolean; // 个数展示为小红点或数字
}

export interface IPropsTopNavButtonDropdownItem extends Partial<ButtonProps> {
  key?: string;
  inFooter?: boolean;
}

export interface IPropsTopNavButtonDropdown extends Omit<DropdownProps, 'trigger'> {
  items?: IPropsTopNavButtonDropdownItem[];
}

export interface IPropsTopNavButton extends Omit<Partial<ButtonProps>, 'label'> {
  key?: string;
  label?: string | ReactElement | IPropsTopNavButtonLabel;
  labelHover?: string | ReactElement | IPropsTopNavButtonLabel;
  responsive?: boolean; // 是否对宽度做自适应
  force?: boolean; // 没有行动点（href、onXx）、也没有 dropdown 的情况下，默认不会展示，如果要展示，设置为 force
  dropdown?: IPropsTopNavButtonDropdown;
}

export interface IPropsTopNavLogo extends IPropsTopNavButton {}

export interface IPropsTopNavDock extends Partial<ButtonProps> {}

export interface IPropsTopNavLanguageItem {
  id: string;
  name: string | JSX.Element;
  nameShort?: string | JSX.Element; // 短名字，利用它可以节省 menu 上的展示宽度，不写则展示 name
}

export interface IPropsTopNavLanguage {
  current: string;
  items: IPropsTopNavLanguageItem[];
  onChange?(id: string): void;
}

export interface IPropsTopNavAccount extends IPropsTopNavButton {
  defaultAvatar?: string; // 默认「默认头像」是 ET 大脑
  avatar?: string; // 当前用户头像
}

export interface IPropsTopNavPure {
  dock?: IPropsTopNavDock | null; // 程序坞
  logo?: IPropsTopNavLogo | null;
  menus?: (IPropsTopNavButton | null)[] | null;
  language?: IPropsTopNavLanguage | null; // 也属于 menu 但比较特殊，所以单独拎出定义
  account?: IPropsTopNavAccount | null; // 也属于 menu 但比较特殊，所以单独拎出定义
  customLeft?: ReactNode;
  customRight?: ReactNode;
  // 任何菜单有 dropdown 的时候，dropdown 展示时的回调，一般用于打点
  onMenuDropdown?(key: string): void;
}

export interface IPropsTopNav extends IPropsTopNavPure, HTMLAttributes<HTMLDivElement> {}
