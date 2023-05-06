export interface IModelState {
  domUi: HTMLDivElement | null;
  domTabList: HTMLUListElement | null;
  activeKey: string;
  width: number;
  navOffset: number; // >= navOffsetMax
  navOffsetMax: number; // <= 0
}
