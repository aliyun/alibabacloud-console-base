export interface IModelState {
  domUi: HTMLDivElement | null;
  domTabBar: HTMLDivElement | null;
  domTabList: HTMLUListElement | null;
  domExtra: HTMLDivElement | null;
  activeKey: string;
  width: number;
  navOffset: number; // >= navOffsetMax
  navOffsetMax: number; // <= 0
}
