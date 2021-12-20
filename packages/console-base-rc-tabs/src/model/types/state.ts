export interface IModelState {
  activeKey: string | number;
  navOffset: number; // >= navOffsetMax
  navOffsetMax: number; // <= 0
}