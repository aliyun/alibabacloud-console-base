import update from 'immutability-helper';

import {
  EDialogLockState
} from '../enum';
import {
  IModelState
} from '../types';

/**
 * 解除锁定
 */
export default function reduceUnlock(state: IModelState): IModelState {
  return update(state, {
    locked: {
      $set: EDialogLockState.NO
    }
  });
}
