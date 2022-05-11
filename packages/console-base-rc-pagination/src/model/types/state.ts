export interface IModelState {
  domUi: HTMLDivElement | null;
  page: number;
  width: number; // 组件宽度是否足以支持 full 模式
}