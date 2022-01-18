export interface IModelState {
  domTabs: HTMLDivElement | null;
  domNav: HTMLDivElement | null;
  activeKey: string | number;
  navOffset: number; // >= navOffsetMax
  navOffsetMax: number; // <= 0
}