import update from 'immutability-helper';

import {
  IContextState
} from '../types';

/**
 * 更新 data
 */
export default function reduceUpdateData(state: IContextState, payload: Record<string, any>): IContextState {
  return update(state, {
    data: {
      $merge: payload
    }
  });
}
