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
import {
  BeaconProps
} from '@alicloud/console-base-rc-beacon';

interface IModelPropsButtonLabel {
  icon?: IconType;
  iconRotate?: number;
  html?: string;
  text?: string | ReactElement;
  count?: number; // 展示个数
  countAsDot?: boolean; // 个数展示为小红点或数字
}

export interface IModelPropsButtonDropdownItem extends Partial<ButtonProps> {
  key?: string;
  inFooter?: boolean;
}

export interface IModelPropsButtonDropdown extends Omit<DropdownProps, 'trigger'> {
  items?: IModelPropsButtonDropdownItem[];
}

export interface IModelPropsButton extends Omit<Partial<ButtonProps>, 'label'> {
  key?: string;
  label?: string | ReactElement | IModelPropsButtonLabel;
  labelHover?: string | ReactElement | IModelPropsButtonLabel;
  responsive?: boolean; // 是否对宽度做自适应
  force?: boolean; // 没有行动点（href、onXx）、也没有 dropdown 的情况下，默认不会展示，如果要展示，设置为 force
  dropdown?: IModelPropsButtonDropdown;
  beacon?: BeaconProps;
}

export interface IModelPropsLogo extends ButtonProps {}

export interface IModelPropsDock extends Partial<ButtonProps> {
  onActiveChange?(active: boolean): void;
}

export interface IModelPropsHelp {
  href: string;
  title?: string;
}

export interface IModelPropsLanguageItem {
  id: string;
  name: string | JSX.Element;
  nameShort?: string | JSX.Element; // 短名字，利用它可以节省 menu 上的展示宽度，不写则展示 name
}

export interface IModelPropsLanguage {
  current: string;
  items: IModelPropsLanguageItem[];
  onChange?(id: string): void;
}

export interface IModelPropsAccount extends IModelPropsButton {
  avatar?: string; // 当前用户头像
  defaultAvatar?: string; // 默认「默认头像」是 ET 大脑
  infoPrimary?: string; // 头像左边展示的主要信息
  infoSecondary?: string; // 头像左边展示的次要信息
  infoWidthMin?: number; // 覆盖默认信息的最小宽度 40
  infoWidthMax?: number; // 覆盖默认信息的最大宽度 80
}

export interface IModelProps extends HTMLAttributes<HTMLDivElement> {
  fixed?: boolean;
  dock?: IModelPropsDock | null; // 程序坞
  logo?: IModelPropsLogo | null;
  menus?: (IModelPropsButton | null)[] | null;
  help?: string | IModelPropsHelp; // 帮助文档配置，menu 的特化配置
  language?: IModelPropsLanguage | null; // 语言，menu 的特化配置
  account?: IModelPropsAccount | null; // 账号，menu 的特化配置
  customLeft?: ReactNode;
  customRight?: ReactNode;
  customLeftClassName?: string; // 为了便于有个样式钩子
  customRightClassName?: string; // 为了便于有个样式钩子
  // 任何菜单有 dropdown 的时候，dropdown 展示时的回调，一般用于打点
  onMenuDropdown?(key: string): void;
}
