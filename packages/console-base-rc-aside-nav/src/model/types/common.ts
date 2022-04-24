import {
  ButtonProps
} from '@alicloud/console-base-rc-button';

export type TNavItemMark = 'external' | 'new' | 'publicBeta' | 'beta' | 'alpha';

export interface INavItemPropsBase extends Omit<ButtonProps, 'iconLeft' | 'iconRight'> {
  key?: string;
  icon?: JSX.Element;
  mark?: TNavItemMark;
}

export interface INavItemProps extends INavItemPropsBase {
  selected?: boolean;
  subItems?: (INavItemProps | null)[];
  /**
   * 默认展开子项目，非受控，序列中的第一个带子项的将自动展开，可以通过总 props.subItemsUnfolded 开启所有
   */
  subItemsUnfolded?: boolean;
}

export interface INavItemInFooterProps extends INavItemPropsBase {}

export type TNavItem = INavItemProps | '-' | null;

export interface INavItemPropsParsed extends INavItemProps {
  indent: number;
  subItems: INavItemPropsParsed[];
}

export interface INavItemInFooterPropsParsed extends INavItemInFooterProps {}