import {
  ReactNode
} from 'react';

import {
  ISidePanelItemPropsWithKey
} from './common';

export interface IModelProps {
  /**
   * 底部工具（系统级别），配置化的形式无法很好地抽离并解耦，故提供 children 方式，
   * 要求每个 child 都是 SidePanelItem 否则样式撑不住
   */
  children?: ReactNode;
  /**
   * UI 是否可见，默认 true
   */
  visible?: boolean;
  /**
   * 通过 onCollapsedChange 实现受控
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
   * 给一个 DOM 节点，组件会监测它的滚动情况，并判断是否展示快速置顶按钮
   */
  quickTopContainer?: Window | HTMLElement | null;
  /**
   * QuickTop 显隐变化时的回调，可用于日志
   */
  onQuickTopVisibleChange?(visible: boolean): void;
  /**
   * 是否展示推入按钮
   */
  onCollapsedChange?(collapsed: boolean): void;
}
