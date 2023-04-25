import update from 'immutability-helper';

import {
  IModelState,
  IPayloadDrag
} from '../types';

export default function reduceRndDragStop(state: IModelState, payload: IPayloadDrag): IModelState {
  return update(state, {
    $merge: {
      dragging: false,
      right: Math.max(state.viewportW - (payload.x + payload.w), 0),
      bottom: state.viewportH - (payload.y + payload.h)
    }
  });
}
