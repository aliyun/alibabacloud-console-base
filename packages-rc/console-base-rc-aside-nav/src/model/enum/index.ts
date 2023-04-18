export enum EAction {
  SET_HOVERED,
  SET_COLLAPSED,
  SET_FILTER_VALUE,
  SET_FILTER_VISIBLE
}

export enum ECheckFilterResult {
  NO, // 无命中
  YES, // 当前节点命中
  CHILD // 子项命中
}
