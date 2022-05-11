import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetWidth(state: IModelState, payload: number): IModelState {
  return update(state, {
    width: {
      $set: payload
    }
  });
}
