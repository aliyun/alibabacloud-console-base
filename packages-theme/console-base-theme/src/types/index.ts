export interface IPropsEllipsisLines {
  lines: number;
  lineHeight: number;
  /**
   * 默认会用 height 做主动撑高（通常，多行 ellipsis 的使用场景是在设计感比较强的地方）
   * 如果不希望多余的高度的情况下，可以 withMaxHeight: true 用 max-height 属性替代 height
   */
  withMaxHeight?: boolean;
}
