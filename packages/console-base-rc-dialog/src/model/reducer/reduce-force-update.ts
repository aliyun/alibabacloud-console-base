import update from 'immutability-helper';

import {
  IModelState
} from '../types';

/**
 * 强制更新以重新 render
 */
export default function reduceForceUpdate(state: IModelState): IModelState {
  return update(state, {
    countForcedUpdate: {
      $set: state.countForcedUpdate + 1
    }
  });
}
