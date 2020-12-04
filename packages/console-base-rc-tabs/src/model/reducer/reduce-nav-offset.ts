import update from 'immutability-helper';

import {
  IContextState
} from '../types';

export default function reduceNavOffset(state: IContextState, value: number): IContextState {
  return update(state, {
    navOffset: {
      $set: Math.min(Math.max(state.navOffsetMax, value), 0) // value 需要控制在 [navOffsetMax, 0] 之间
    }
  });
}
