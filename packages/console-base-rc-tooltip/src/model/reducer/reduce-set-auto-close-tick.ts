import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetAutoCloseTick(state: IModelState, payload: number): IModelState {
  return update(state, {
    autoCloseTick: {
      $set: payload
    }
  });
}
