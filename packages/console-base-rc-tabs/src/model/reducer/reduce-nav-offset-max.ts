import update from 'immutability-helper';

import {
  IContextState
} from '../types';

export default function reduceNavOffsetMax(state: IContextState, value: number): IContextState {
  return update(state, {
    navOffsetMax: {
      $set: Math.min(value, 0)
    }
  });
}
