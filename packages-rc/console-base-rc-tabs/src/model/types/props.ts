import {
  ETabsVariant
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
  variant?: ETabsVariant;
  classNameForTabBar?: string; // 为了让外部可以有个钩子
  classNameForTabItem?: string; // 为了让外部可以有个钩子
  classNameForTabX?: string; // 为了让外部可以有个钩子
  classNameForTabScroller?: string; // 为了让外部可以有个钩子
  onChange?(key: string): void;
  onTabClose?(tab: IModelPropsTab, toTabs: IModelPropsTab[], fromTabs: IModelPropsTab[]): void;
}
