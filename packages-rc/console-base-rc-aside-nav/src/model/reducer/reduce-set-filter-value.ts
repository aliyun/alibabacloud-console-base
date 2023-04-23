import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetFilterValue(state: IModelState, payload: string): IModelState {
  return update(state, {
    filterValue: {
      $set: payload
    }
  });
}
