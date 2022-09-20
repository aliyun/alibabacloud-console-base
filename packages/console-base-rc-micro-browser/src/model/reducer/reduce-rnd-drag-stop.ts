import update from 'immutability-helper';

import {
  IModelState,
  IPayloadDrag
} from '../types';

export default function reduceRndDragStop(state: IModelState, payload: IPayloadDrag): IModelState {
  return update(state, {
    $merge: {
      dragging: false,
      right: state.viewportW - (payload.x + payload.w),
      bottom: state.viewportH - (payload.y + payload.h)
    }
  });
}
