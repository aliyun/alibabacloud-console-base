export interface IModelState {
  /**
   * dock 是否为 active 状态，props.dock.active 为其对应受控属性
   */
  dockActive: boolean;
  /**
   * 如果 active 由 hover 触发，记录时间，以避免误操（active 瞬间因点击而取消）
   */
  dockActiveByHoverTimestamp: number;
  /**
   * dock 鼠标移上去后，如果为非 active 状态，则一定时间后自动触发 active
   */
  dockHoverActiveTimer: number | null;
}