export interface IModelProps {
  /**
   * 要监测的会滚动的容器，其 `overflow` 一般为 `auto` 或 `scroll`，注意，它不一定是组件的父容器（尽量不要是）
   */
  container: HTMLElement | null;
  /**
   * 有的时候，容器是固定高度的，内部可能会有一个单独的内容容器，它的高度会变化
   */
  containerInner?: HTMLElement | null;
  /**
   * 自定义距离父容器右下角的 x 方向的位移，默认 12
   */
  offsetX?: number;
  /**
   * 自定义距离父容器右下角的 y 方向的位移，默认 12
   */
  offsetY?: number;
  /**
   * 点击置顶按钮后的回调
   */
  onGotoTop?(): void;
  /**
   * 点击置底按钮后的回调
   */
  onGotoBottom?(): void;
}