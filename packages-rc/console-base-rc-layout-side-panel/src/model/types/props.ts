import {
  ISidePanelItemProps
} from './common';

export interface IModelProps {
  /**
   * 通过 onToggleCollapsed 实现受控
   */
  collapsed?: boolean;
  /**
   * 顶部工具
   */
  itemsTop?: ISidePanelItemProps[];
  /**
   * 底部工具
   */
  itemsBottom?: ISidePanelItemProps[];
  /**
   * 是否展示推入按钮
   */
  onToggleCollapsed?(collapsed: boolean): void;
}