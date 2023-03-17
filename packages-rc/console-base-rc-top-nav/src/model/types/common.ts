import {
  ReactElement
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

interface ITopNavButtonPropsLabel {
  icon?: IconType | ReactElement; // TODO 废弃 IconType 耦合太大
  html?: string;
  text?: string | ReactElement;
  count?: number; // 展示个数
  countAsDot?: boolean; // 个数展示为小红点或数字
}

export interface ITopNavButtonDropdownItemProps extends Partial<ButtonProps> {
  key?: string;
  inFooter?: boolean;
}

export interface ITopNavButtonDropdownProps extends Omit<DropdownProps, 'trigger'> {
  items?: ITopNavButtonDropdownItemProps[];
}

export interface ITopNavButtonProps extends Omit<Partial<ButtonProps>, 'label'> {
  key?: string;
  label?: string | ReactElement | ITopNavButtonPropsLabel;
  labelHover?: string | ReactElement | ITopNavButtonPropsLabel;
  responsive?: boolean; // 是否对宽度做自适应
  force?: boolean; // 没有行动点（href、onXx）、也没有 dropdown 的情况下，默认不会展示，如果要展示，设置为 force
  dropdown?: ITopNavButtonDropdownProps;
  beacon?: BeaconProps;
}

export interface ITopNavLogoProps extends ButtonProps {}

export interface ITopNavDockProps extends Partial<ButtonProps> {
  onActiveChange?(active: boolean): void;
}

export interface ITopNavHelpProps {
  href: string;
  title?: string;
}

export interface ITopNavLanguageItemProps {
  id: string;
  name: string | JSX.Element;
  nameShort?: string | JSX.Element; // 短名字，利用它可以节省 menu 上的展示宽度，不写则展示 name
}

export interface ITopNavLanguageProps {
  current: string;
  items: ITopNavLanguageItemProps[];
  onChange?(id: string): void;
}

export interface ITopNavAccountProps extends ITopNavButtonProps {
  avatar?: string; // 当前用户头像
  defaultAvatar?: string; // 默认「默认头像」是 ET 大脑
  infoPrimary?: string; // 头像左边展示的主要信息
  infoSecondary?: string; // 头像左边展示的次要信息
  infoWidthMin?: number; // 覆盖默认信息的最小宽度 40
  infoWidthMax?: number; // 覆盖默认信息的最大宽度 80
}
