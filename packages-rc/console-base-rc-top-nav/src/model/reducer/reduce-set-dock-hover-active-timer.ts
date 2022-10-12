import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDockHoverActiveTimer(state: IModelState, payload: number | null): IModelState {
  return update(state, {
    dockHoverActiveTimer: {
      $set: payload
    }
  });
}
