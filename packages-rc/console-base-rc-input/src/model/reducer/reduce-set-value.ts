import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetValue(state: IModelState, payload: string): IModelState {
  return update(state, {
    value: {
      $set: payload
    }
  });
}
