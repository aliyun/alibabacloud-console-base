import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetPage(state: IModelState, payload: number): IModelState {
  return update(state, {
    page: {
      $set: payload
    }
  });
}
