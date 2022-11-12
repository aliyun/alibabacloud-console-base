import {
  ReactNode
} from 'react';

import {
  ISidePanelItemPropsWithKey
} from './common';

export interface IModelProps {
  /**
   * 底部工具（系统级别），用配置化的形式，无法很好地抽离并解耦，故提供 children 方式，
   * 要求每个 child 都是 SidePanelItem 否则样式撑不住
   */
  children?: ReactNode;
  /**
   * 通过 onToggleCollapsed 实现受控
   */
  collapsed?: boolean;
  /**
   * 顶部工具
   */
  itemsTop?: ISidePanelItemPropsWithKey[];
  /**
   * 底部工具（系统级别），如果传入 children 则使用 children
   */
  itemsBottom?: ISidePanelItemPropsWithKey[];
  /**
   * 是否展示推入按钮
   */
  onToggleCollapsed?(collapsed: boolean): void;
}