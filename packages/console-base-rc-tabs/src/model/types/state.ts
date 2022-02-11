export interface IModelState {
  domUi: HTMLDivElement | null;
  domNav: HTMLDivElement | null;
  activeKey: string;
  width: number;
  navOffset: number; // >= navOffsetMax
  navOffsetMax: number; // <= 0
}