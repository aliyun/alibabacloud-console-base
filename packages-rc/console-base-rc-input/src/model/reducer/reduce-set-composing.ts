import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetComposing(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    composing: {
      $set: payload
    }
  });
}
