import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetVisibleBottom(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    visibleBottom: {
      $set: payload
    }
  });
}
