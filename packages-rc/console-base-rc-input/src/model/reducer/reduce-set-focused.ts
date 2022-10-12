import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetFocused(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    focused: {
      $set: payload
    }
  });
}
