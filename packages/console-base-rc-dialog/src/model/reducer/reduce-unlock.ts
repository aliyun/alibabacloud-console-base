import update from 'immutability-helper';

import {
  EDialogLockState
} from '../../const';
import {
  IContextState
} from '../types';

/**
 * 解除锁定
 */
export default function reduceUnlock(state: IContextState): IContextState {
  return update(state, {
    locked: {
      $set: EDialogLockState.NO
    }
  });
}
