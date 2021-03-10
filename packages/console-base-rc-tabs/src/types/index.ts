export interface IPropsTab {
  key?: string | number;
  title: string | JSX.Element;
  content: string | JSX.Element;
  contentPadding?: 'normal' | 'none';
  closable?: boolean;
}

export interface IPropsTabs {
  tabs: IPropsTab[];
  classNameForTabBar?: string; // 为了让外部可以有个钩子
  classNameForTabItem?: string; // 为了让外部可以有个钩子
  classNameForTabScroller?: string; // 为了让外部可以有个钩子
  width?: number; // 仅用于通知宽度变化
  activeKey?: string | number;
  defaultActiveKey?: string | number;
  activeTab?: IPropsTab;
  defaultActiveTab?: IPropsTab;
  onTabActivate?(tab: IPropsTab): void;
  onTabClose?(tab: IPropsTab): void;
}
