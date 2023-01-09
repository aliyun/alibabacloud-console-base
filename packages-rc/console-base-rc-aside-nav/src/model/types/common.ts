import {
  ButtonProps
} from '@alicloud/console-base-rc-button';

export type TNavItemMark = 'external' | 'new' | 'beta-public' | 'beta' | 'alpha';

export type TSubItemsUnfolded = boolean | 'fist' | 'first-level';

export interface INavItemPropsBase extends Omit<ButtonProps, 'iconLeft' | 'iconRight'> {
  key: string;
  icon?: JSX.Element;
  mark?: TNavItemMark;
}

export interface INavItemProps extends INavItemPropsBase {
  selected?: boolean;
  subItems?: (INavItemProps | '-' | null)[];
  /**
   * 默认展开子项目，非受控，序列中的第一个带子项的将自动展开，覆盖顶级 props 指定的行为
   */
  subItemsUnfolded?: boolean;
  /**
   * 菜单搜索关键字
   */
  keywords?: string[];
}

export interface INavItemInFooterProps extends INavItemPropsBase {}

export type TNavItem = INavItemProps | '-' | null;

// 解析后的类型
export interface IParsedDivider {
  key: string;
  divider: true;
  indent: number;
}

export interface IParsedItem extends Omit<INavItemProps, 'subItems'> {
  divider: undefined;
  indent: number;
  subItems: (IParsedItem | IParsedDivider)[];
}

export type TParsedItemOrDivider = IParsedItem | IParsedDivider;

export interface IParsedItemInFooter extends INavItemInFooterProps {}