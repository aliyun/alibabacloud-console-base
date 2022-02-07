import {
  ETabsTheme
} from '../enum';

import {
  TContentPadding,
  IModelPropsTab
} from './common';

export interface IModelProps {
  tabs: IModelPropsTab[];
  contentPadding?: TContentPadding;
  /**
   * 仅使用 tab 页，不使用内容，这种情况下，即使 tab 中带了 content 也是不会渲染的
   */
  noContent?: boolean;
  activeKey?: string;
  defaultActiveKey?: string;
  theme?: ETabsTheme;
  width?: number; // 仅用于通知宽度变化 TODO 去掉它
  classNameForTabBar?: string; // 为了让外部可以有个钩子
  classNameForTabItem?: string; // 为了让外部可以有个钩子
  classNameForTabScroller?: string; // 为了让外部可以有个钩子
  onChange?(key: string): void;
  onTabClose?(tab: IModelPropsTab, toTabs: IModelPropsTab[], fromTabs: IModelPropsTab[]): void;
}
