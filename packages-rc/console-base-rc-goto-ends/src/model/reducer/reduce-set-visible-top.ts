import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetVisibleTop(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    visibleTop: {
      $set: payload
    }
  });
}
