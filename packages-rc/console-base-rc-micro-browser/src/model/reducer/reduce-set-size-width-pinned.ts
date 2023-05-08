import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetSizeWidthPinned(state: IModelState, payload: number): IModelState {
  return update(state, {
    widthPinned: {
      $set: payload
    }
  });
}
