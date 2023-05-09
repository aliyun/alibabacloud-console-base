import {
  ETabsVariant
} from '../enum';

import {
  TContentPadding,
  ITabItem
} from './common';

export interface IModelProps {
  tabs: ITabItem[];
  /**
   * 位于顶部右侧的附加内容，会算它的宽度，所以不要有会引起宽度变化的逻辑
   */
  extra?: JSX.Element;
  /**
   * 样式变数
   */
  variant?: ETabsVariant;
  /**
   * 默认的内容 padding 模式
   */
  contentPadding?: TContentPadding;
  /**
   * 仅使用 tab 页，不使用内容，这种情况下，即使 tab 中带了 content 也是不会渲染的
   */
  noContent?: boolean;
  activeKey?: string;
  defaultActiveKey?: string;
  // 以下 classNameForXx 是为了让外部有样式钩子
  classNameForTabBar?: string;
  classNameForTabItem?: string;
  classNameForTabX?: string;
  classNameForTabScroller?: string;
  classNameForTabExtra?: string;
  onChange?(key: string): void;
  onTabClose?(tab: ITabItem, toTabs: ITabItem[], fromTabs: ITabItem[]): void;
  onTabBarDoubleClick?(): void;
}
