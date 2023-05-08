/**
 * 内容区域留白
 *
 * - none 无
 * - top 仅顶部留白（默认）
 * - around 四周都留白
 */
export type TContentPadding = 'none' | 'top' | 'around';

export interface ITabItem {
  key: string;
  title: string | JSX.Element;
  content?: string | JSX.Element | null;
  contentAttr?: {
    [dataName: `data-${string}`]: unknown;
  };
  /**
   * 用以覆盖 tabs.props.contentPadding
   */
  contentPadding?: TContentPadding;
  /**
   * 用户排序，越大越靠后
   */
  order?: number;
  /**
   * 是否可见，Tab 不渲染，内容渲染（因为内容有可能会有 context，类似全局事件监控等）
   */
  visible?: boolean;
  /**
   * Tab 是否可以被关闭，关闭真正产生的作用需要经过 props.onTabClose 外传后处理
   */
  closable?: boolean;
}
