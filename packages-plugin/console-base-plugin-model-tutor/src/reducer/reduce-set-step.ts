import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetStep(state: IModelState, payload: number): IModelState {
  return update(state, {
    step: {
      $set: payload
    }
  });
}
