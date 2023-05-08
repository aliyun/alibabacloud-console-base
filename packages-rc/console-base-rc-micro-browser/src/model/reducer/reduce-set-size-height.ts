import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetSizeHeight(state: IModelState, payload: number): IModelState {
  return update(state, {
    height: {
      $set: payload
    }
  });
}
