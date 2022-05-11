import {
  IRectStyle
} from './common';

export interface IModelState {
  index: number;
  rectStyle: IRectStyle;
  domBackdrop: HTMLDivElement | null;
}