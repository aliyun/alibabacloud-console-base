import update from 'immutability-helper';

import {
  IModelState,
  IModelStateDropPosition
} from '../types';

export default function reduceSetDropPosition(state: IModelState, payload: IModelStateDropPosition): IModelState {
  return update(state, {
    dropPosition: {
      $set: payload
    }
  });
}
