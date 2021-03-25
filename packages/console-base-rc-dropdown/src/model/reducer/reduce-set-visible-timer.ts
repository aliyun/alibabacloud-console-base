import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetVisibleTimer(state: IModelState, payload: number | null): IModelState {
  return update(state, {
    visibleTimer: {
      $set: payload
    }
  });
}
