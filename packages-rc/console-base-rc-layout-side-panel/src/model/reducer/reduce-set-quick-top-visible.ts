import update from 'immutability-helper';

import {
  IModelState
} from '../types';

export default function reduceSetQuickTopVisible(state: IModelState, payload: boolean): IModelState {
  return update(state, {
    quickTopVisible: {
      $set: payload
    }
  });
}
