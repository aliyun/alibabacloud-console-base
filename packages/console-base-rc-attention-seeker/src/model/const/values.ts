import {
  IAttentionRect,
  IModelState
} from '../types';

export const DEFAULT_ATTENTION_RECT: IAttentionRect = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  radius: 0
};

export const DEFAULT_MODEL_STATE: IModelState = {
  domBackdrop: null,
  attentionRect: DEFAULT_ATTENTION_RECT,
  viewportWidth: 0,
  viewportHeight: 0
};
