import update from 'immutability-helper';

import {
  EMicroBrowserMode
} from '../enum';
import {
  IModelState,
  IPayloadResize
} from '../types';

export default function reduceRndResize(state: IModelState, {
  mode,
  x,
  y,
  w,
  h,
  stopped
}: IPayloadResize): IModelState {
  const resizing = stopped ? -1 : state.resizing + 1;
  
  switch (mode) {
    case EMicroBrowserMode.FREE:
      return update(state, {
        $merge: {
          resizing,
          width: w,
          height: h,
          x1: x + w,
          y1: y + h
        }
      });
    case EMicroBrowserMode.TO_THE_RIGHT:
    case EMicroBrowserMode.TO_THE_RIGHT_PINNED:
      return update(state, {
        $merge: {
          resizing,
          widthPinned: w
        }
      });
    default:
      return state;
  }
}
