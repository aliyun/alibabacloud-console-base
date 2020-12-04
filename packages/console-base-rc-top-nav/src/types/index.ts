import {
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

interface ITopNavButtonLabel {
  icon?: IconType;
  html?: string;
  text?: string | ReactElement;
  count?: number; // 展示个数
  countAsDot?: boolean; // 个数展示为小红点或数字
}

export interface IDropdownItem extends Partial<ButtonProps> {
  key?: string;
  inFooter?: boolean;
}

export interface ITopNavButtonDropdown extends Omit<DropdownProps, 'trigger'> {
  items?: IDropdownItem[];
}

export interface ITopNavButton extends Omit<Partial<ButtonProps>, 'label'> {
  key?: string;
  label?: string | ReactElement | ITopNavButtonLabel;
  responsive?: boolean; // 是否对宽度做自适应
  force?: boolean; // 没有行动点（href、onXx）、也没有 dropdown 的情况下，默认不会展示，如果要展示，设置为 force
  dropdown?: ITopNavButtonDropdown;
}

export interface ITopNavLogo extends ITopNavButton {}

export interface ITopNavDock extends Partial<ButtonProps> {}

export interface ITopNavLanguage {
  current: string;
  items: {
    id: string;
    name: string | JSX.Element;
    nameShort?: string | JSX.Element; // 短名字，利用它可以节省 menu 上的展示宽度，不写则展示 name
  }[];
  onChange?(id: string): void;
}

export interface ITopNavAccount extends ITopNavButton {
  defaultAvatar?: string; // 默认「默认头像」是 ET 大脑
  avatar?: string; // 当前用户头像
}

export interface IPropsTopNav {
  dock?: ITopNavDock; // 程序坞
  logo?: ITopNavLogo;
  menus?: ITopNavButton[];
  language?: ITopNavLanguage;
  account?: ITopNavAccount;
  customLeft?: ReactNode;
  customRight?: ReactNode;
}
