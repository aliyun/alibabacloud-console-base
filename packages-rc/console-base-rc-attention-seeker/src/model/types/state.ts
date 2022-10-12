import {
  IAttentionRect
} from './common';

export interface IModelState {
  domBackdrop: HTMLOrSVGElement | null;
  attentionRect: IAttentionRect;
  viewportWidth: number;
  viewportHeight: number;
}