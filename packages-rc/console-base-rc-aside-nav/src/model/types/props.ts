import {
  MouseEvent
} from 'react';

import {
  TNavItem,
  INavItemProps,
  INavItemInFooterProps,
  TSubItemsUnfolded
} from './common';

export interface IModelProps {
  /**
   * 标题，当前在第一层菜单的时候展示的标题
   */
  title?: JSX.Element | string;
  /**
   * 和 upperHref 一起使用，影响标题展示
   * 
   * - 不设置 upperTitle：居中展示，仅箭头
   * - 设置 upperTitle：靠左展示，箭头 + 标题
   */
  upperTitle?: JSX.Element | string;
  /**
   * 当有 upperHref 时表示进入到了内部菜单，会在顶栏替换掉 title 变成回退按钮
   */
  upperHref?: string;
  /**
   * 通过 onCollapsedChange 实现受控
   */
  collapsed?: boolean;
  /**
   * 菜单子项展开方式
   * 
   * - true 全部展开（默认）
   * - false 都不展开
   * - 'fist' 仅展开第一个带子项的
   * - 'first-level' 展开所有第一级（不展开第二级）
   */
  subItemsUnfolded?: TSubItemsUnfolded;
  /**
   * 菜单配置
   */
  items: TNavItem[];
  /**
   * 菜单底部内容，只适合静态链接
   */
  itemsInFooter?: (INavItemInFooterProps | null)[];
  /**
   * 没什么用暂时..
   */
  onHoveredChange?(hovered: boolean): void;
  /**
   * 将决定是否展示推入按钮
   */
  onCollapsedChange?(collapsed: boolean): void;
  /**
   * 点击回调，以便在 react-router 下使用
   */
  onItemClick?(item: INavItemProps, e: MouseEvent): void;
}
