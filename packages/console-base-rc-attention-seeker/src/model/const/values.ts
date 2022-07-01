import {
  IAttentionSeekerRect,
  IModelState
} from '../types';

export const DEFAULT_RECT: IAttentionSeekerRect = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  radius: 0
};

export const DEFAULT_MODEL_STATE: IModelState = {
  rectStyle: DEFAULT_RECT,
  domBackdrop: null
};
