import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetFilterText(state: IModelState, payload: string): IModelState {
  return update(state, {
    filterText: {
      $set: payload
    }
  });
}
