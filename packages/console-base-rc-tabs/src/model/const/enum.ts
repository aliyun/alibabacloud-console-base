export enum EAction {
  ACTIVATE_TAB, // 点击选中某 tab
  CLOSE_TAB,
  PRUNE_CLOSED_TABS, // 关闭 tab 如果导致 props.tabs 变化的，用它来清理已经不存在的项
  UPDATE_NAV_OFFSET_MAX,
  UPDATE_NAV_OFFSET
}
