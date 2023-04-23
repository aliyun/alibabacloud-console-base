import {
  ReactNode,
  MouseEvent
} from 'react';

import {
  TNavItem,
  INavItemProps,
  INavItemInFooterProps,
  TUnfoldMode
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
   * 菜单配置
   */
  items: TNavItem[];
  /**
   * 菜单底部内容，只适合静态链接
   */
  itemsInFooter?: (INavItemInFooterProps | null)[];
  /**
   * 菜单子项展开模式
   *
   * - true 全部展开（默认）
   * - false 都不展开
   * - 'first-level' 展开所有第一级（不展开第二级）
   */
  defaultUnfolded?: TUnfoldMode;
  /**
   * 是否展示搜索框
   * 当 minItemsForFilter <= 0 时：永远不搜索
   * 当 minItemsForFilter >= 1 时：菜单总数 >= minItemsForFilter 时展示搜索，否则不展示，默认 10
   */
  minItemsForFilter?: number;
  /**
   * 点击回调，以便在 react-router 下使用
   */
  onItemClick?(item: INavItemProps, e: MouseEvent): void;
  /**
   * 将决定是否展示推入按钮
   */
  onCollapsedChange?(collapsed: boolean): void;
  /**
   * 鼠标移入移出回调，可用于记录日志
   */
  onHoveredChange?(hovered: boolean): void;
  /**
   * 过滤值变化，可用于记录日志
   */
  onFilterValueChange?(value: string): void;
  /**
   * 过滤可见性变化，可用于记录日志
   */
  onFilterVisibleChange?(visible: boolean): void;
}

export interface IModelProviderProps extends IModelProps {
  children: ReactNode;
}
