import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetPositionRight(state: IModelState, payload: number): IModelState {
  return update(state, {
    right: {
      $set: payload
    }
  });
}
