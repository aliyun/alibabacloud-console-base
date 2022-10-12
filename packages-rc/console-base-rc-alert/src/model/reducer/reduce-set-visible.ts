import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetVisible(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    visible: {
      $set: payload
    }
  });
}
