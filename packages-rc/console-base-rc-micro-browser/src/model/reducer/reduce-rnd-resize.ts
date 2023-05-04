import update from 'immutability-helper';

import {
  EMicroBrowserMode
} from '../enum';
import {
  IModelState,
  IPayloadResize
} from '../types';

export default function reduceRndResize(state: IModelState, payload: IPayloadResize): IModelState {
  const resizing = payload.stopped ? -1 : state.resizing + 1;
  
  switch (payload.mode) {
    case EMicroBrowserMode.FREE:
      return update(state, {
        $merge: {
          resizing,
          width: payload.w,
          height: payload.h,
          right: Math.max(state.viewportW - (payload.x + payload.w), 0),
          bottom: state.viewportH - (payload.y + payload.h)
        }
      });
    case EMicroBrowserMode.PINNED:
      return update(state, {
        $merge: {
          resizing,
          widthPinned: payload.w
        }
      });
    default:
      return state;
  }
}
