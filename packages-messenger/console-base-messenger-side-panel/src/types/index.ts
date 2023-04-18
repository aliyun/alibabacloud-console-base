/**
 * 设置快速置顶容器，当为 string 的时候，可以是 'window' 或者选择器（需调用者保证全局唯一）
 */
export type TMessengerSidePanelQuickTopContainer = string | Window | HTMLElement | null;

/**
 * 在 messenger 里需要保持依赖的干净程度，不能依赖 JSX，且不可以有无法序列化的方法等，
 * 这部分定义与 @alicloud/console-base-rc-side-panel 的 SidePanelItemProps 有一定的冗余，属于合理冗余
 */
export interface IMessengerSidePanelPayloadItem {
  /**
   * 事件交互必备，必须唯一，不提供和不唯一的将作静默剔除
   */
  key: string;
  /**
   * 无痕埋点，默认用 key 的值，一般不需要
   */
  spm?: string;
  /**
   * 可以用 SVG 字符串或者图片 URL（图片请使用 PNG） - 这里不允许 JSX
   * 1. 如果是 svg 则渲染成 svg
   * 2. 如果是 URL，则认为是图片（请用 png）
   * 对 svg 和 img 这里都有大小约束，请尽可能用正方形
   */
  icon: string;
  iconHovered?: string;
  iconActive?: string;
  iconActiveHovered?: string;
  /**
   * 默认用于 tooltip，也是按钮 aria-label 属性
   */
  title: string;
  titleActive?: string;
  /**
   * 当需要复杂的 tooltip 时，可以设置 tooltip
   */
  tooltip?: string;
  tooltipActive?: string;
  /**
   * tooltip 只能用 string，如果想展示 HTML 可以用 `tooltipAsHtml: true`
   */
  tooltipAsHtml?: boolean;
  /**
   * tooltip 与按钮的上下对齐方式，默认为 middle
   */
  tooltipAlign?: 'top' | 'middle' | 'bottom';
  /**
   * 徽标，数字展示数字，true 展示小红点
   */
  unread?: number | boolean;
  /**
   * 记住按下动作，用 messenger onSidePanelItemActiveChange 进行受控
   */
  active?: boolean;
  /**
   * 将渲染成链接
   */
  href?: string;
  /**
   * 链接的 target，默认为 `_external`
   */
  target?: string;
  /**
   * 可用于外部脚本做钩子，默认会有个 data-console-base-side-panel-item=key 的属性可以用，其他的诉求比如 SPM 可以用这个
   */
  [dataName: `data-${string}`]: unknown;
}
