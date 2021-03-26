import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetDropExiting(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    dropExiting: {
      $set: payload
    }
  });
}
