export interface IHijacker<T = boolean> {
  condition: (el: HTMLElement) => T | void; // 判定条件，返回「真」即表示劫持成功，改返回值将作为 callback 的第二参数
  callback?(el: HTMLElement, conditionResult: T): void; // 劫持操作
  noPreventDefault?: boolean; // 劫持后是否不 preventDefault
  noStopPropagation?: boolean; // 劫持后是否不 stopPropagation
}

export interface IFnClickHandler {
  (el: HTMLElement, e: MouseEvent): boolean;
}
