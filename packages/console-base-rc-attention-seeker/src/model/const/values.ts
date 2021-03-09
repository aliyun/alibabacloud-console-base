import {
  IRect,
  IModelState
} from '../types';

export const DEFAULT_RECT: IRect = {
  top: 0,
  left: 0,
  width: 0,
  height: 0
};

export const DEFAULT_MODEL_STATE: IModelState = {
  index: 0,
  rect: DEFAULT_RECT
};
