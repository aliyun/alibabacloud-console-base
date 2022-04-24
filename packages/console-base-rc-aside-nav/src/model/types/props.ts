import {
  TNavItem,
  INavItemInFooterProps
} from './common';

export interface IModelProps {
  /**
   * 标题，当前在第一层菜单的时候展示的标题
   */
  title?: JSX.Element | string;
  /**
   * 当有 upperHref 时表示进入到了内部菜单，会在顶栏替换掉 title 变成回退按钮
   */
  upperHref?: string;
  /**
   * 菜单配置
   */
  items: TNavItem[];
  /**
   * 菜单底部内容，只适合静态链接
   */
  itemsInFooter?: (INavItemInFooterProps | null)[];
  /**
   * 通过 onToggleCollapsed 实现受控
   */
  collapsed?: boolean;
  /**
   * 是否默认展开所有子项目
   * 
   * 默认：true
   * 
   * 当为 false 的时候，将默认自动展开第一个带子项菜单，可以通过 unfoldedFirst 调配
   */
  unfoldedAll?: boolean;
  /**
   * 默认：true
   */
  unfoldedFirst?: boolean;
  /**
   * 是否展示推入按钮
   */
  onToggleCollapsed?(collapsed: boolean): void;
}