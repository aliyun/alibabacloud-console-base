import update from 'immutability-helper';

import {
  IModelState
} from '../types';

/**
 * 更新 data
 */
export default function reduceUpdateData(state: IModelState, payload: Record<string, unknown>): IModelState {
  return update(state, {
    data: {
      $merge: payload
    }
  });
}
