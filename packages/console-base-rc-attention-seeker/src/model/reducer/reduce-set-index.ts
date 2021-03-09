import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetIndex(state: IModelState, payload: number): IModelState {
  return update(state, {
    index: {
      $set: payload
    }
  });
}
