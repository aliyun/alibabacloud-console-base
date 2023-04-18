import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetFilterVisible(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    filterVisible: {
      $set: payload
    }
  });
}
