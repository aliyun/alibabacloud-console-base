export interface IModelState {
  domDropdown: HTMLDivElement | null;
  domDrop: HTMLDivElement | null;
  visible: boolean;
  visibleTimer: number | null; // 如果是 visible 的时候就是隐藏
  dropExiting: boolean;
}