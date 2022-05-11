import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetNavOffset(state: IModelState, value: number): IModelState {
  return update(state, {
    navOffset: {
      $set: Math.min(Math.max(state.navOffsetMax, value), 0) // value 需要控制在 [navOffsetMax, 0] 之间
    }
  });
}
