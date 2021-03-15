export interface IPropsTab {
  key?: string;
  title: string | JSX.Element;
  content: string | JSX.Element;
  contentPadding?: 'normal' | 'none';
  /**
   * 是否可见，Tab 不渲染，内容渲染（因为内容有可能会有 context，类似全局事件监控等）
   */
  visible?: boolean;
  /**
   * Tab 是否可以被关闭，关闭真正产生的作用需要经过 props.onTabClose 外传后处理
   */
  closable?: boolean;
}

export interface IPropsTabs {
  tabs: IPropsTab[];
  width?: number; // 仅用于通知宽度变化
  classNameForTabBar?: string; // 为了让外部可以有个钩子
  classNameForTabItem?: string; // 为了让外部可以有个钩子
  classNameForTabScroller?: string; // 为了让外部可以有个钩子
  activeKey?: string | number;
  defaultActiveKey?: string | number;
  onChange?(key: string | number): void;
  onTabClose?(tab: IPropsTab, toTabs: IPropsTab[], fromTabs: IPropsTab[]): void;
}
