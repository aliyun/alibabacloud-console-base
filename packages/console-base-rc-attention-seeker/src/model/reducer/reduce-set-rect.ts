import update from 'immutability-helper';

import {
  IRect,
  IModelState
} from '../types';

export default function reduceSetIndex(state: IModelState, payload: IRect): IModelState {
  return update(state, {
    rect: {
      $merge: payload
    }
  });
}
