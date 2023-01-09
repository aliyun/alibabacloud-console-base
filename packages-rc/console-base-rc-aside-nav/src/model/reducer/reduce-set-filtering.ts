import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetFiltering(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    filtering: {
      $set: payload
    }
  });
}
