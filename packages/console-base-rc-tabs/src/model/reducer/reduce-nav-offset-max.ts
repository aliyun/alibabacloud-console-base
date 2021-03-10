import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceNavOffsetMax(state: IModelState, value: number): IModelState {
  return update(state, {
    navOffsetMax: {
      $set: Math.min(value, 0)
    }
  });
}
