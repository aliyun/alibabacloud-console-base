import {
  IAttentionSeekerRect
} from './common';

export interface IModelState {
  rectStyle: IAttentionSeekerRect;
  domBackdrop: HTMLOrSVGElement | null;
}