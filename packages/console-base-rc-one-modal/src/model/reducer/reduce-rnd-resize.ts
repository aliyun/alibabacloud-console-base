import update from 'immutability-helper';

import {
  EModalMode
} from '../const';
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
    case EModalMode.FREE:
      return update(state, {
        $merge: {
          resizing,
          x,
          y,
          x1: x + w,
          y1: y + h
        }
      });
    case EModalMode.TO_THE_RIGHT:
    case EModalMode.TO_THE_RIGHT_PINNED:
      return update(state, {
        $merge: {
          resizing,
          pinnedWidth: w
        }
      });
    default:
      return state;
  }
}
