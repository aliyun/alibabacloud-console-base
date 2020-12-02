import update from 'immutability-helper';

import {
  IContextState
} from '../types';

/**
 * 强制更新以重新 render
 */
export default function reduceForceUpdate(state: IContextState): IContextState {
  return update(state, {
    countForcedUpdate: {
      $set: state.countForcedUpdate + 1
    }
  });
}
