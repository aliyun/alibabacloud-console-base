import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDockActive(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    dockActive: {
      $set: payload
    }
  });
}
