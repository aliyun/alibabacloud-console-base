import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetFilterFocused(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    filterFocused: {
      $set: payload
    }
  });
}
