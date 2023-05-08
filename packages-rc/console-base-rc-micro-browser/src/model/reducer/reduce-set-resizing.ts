import update from 'immutability-helper';

import {
  TDraggingResizing,
  IModelState
} from '../types';

export default function reduceSetDragging(state: IModelState, payload: TDraggingResizing): IModelState {
  return update(state, {
    resizing: {
      $set: payload
    }
  });
}
