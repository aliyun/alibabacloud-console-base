import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetPositionBottom(state: IModelState, payload: number): IModelState {
  return update(state, {
    bottom: {
      $set: payload
    }
  });
}
