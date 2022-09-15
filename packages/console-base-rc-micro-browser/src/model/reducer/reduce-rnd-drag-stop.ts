import update from 'immutability-helper';

import {
  IModelState,
  IPayloadDrag
} from '../types';

export default function reduceRndDragStop(state: IModelState, payload: IPayloadDrag): IModelState {
  return update(state, {
    $merge: {
      dragging: false,
      x1: payload.x + payload.w,
      y1: payload.y + payload.h
    }
  });
}
