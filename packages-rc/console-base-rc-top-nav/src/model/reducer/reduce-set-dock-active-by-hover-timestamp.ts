import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDockActiveByHoverTimestamp(state: IModelState, payload: number): IModelState {
  return update(state, {
    dockActiveByHoverTimestamp: {
      $set: payload
    }
  });
}
