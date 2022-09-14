import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetWindowScrollbarWidth(state: IModelState, payload: number): IModelState {
  return update(state, {
    windowScrollbarWidth: {
      $set: payload
    }
  });
}
