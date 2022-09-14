import update from 'immutability-helper';

import {
  IModelState,
  IPayloadDrag
} from '../types';

export default function reduceRndDragStop(state: IModelState, payload: IPayloadDrag): IModelState {
  const {
    x,
    y,
    x1,
    y1
  } = state;
  const newX = payload.x;
  const newY = payload.y;
  
  return update(state, {
    $merge: {
      dragging: false,
      x: newX,
      y: newY,
      x1: newX + x1 - x,
      y1: newY + y1 - y
    }
  });
}
