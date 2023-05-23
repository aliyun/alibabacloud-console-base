import update from 'immutability-helper';

import {
  EDialogLockState
} from '../enum';
import {
  IModelState
} from '../types';

/**
 * 锁定 Dialog，使无法关闭
 */
export default function reduceLock(state: IModelState, payload?: boolean): IModelState {
  return update(state, {
    locked: {
      $set: payload ? EDialogLockState.LOADING : EDialogLockState.YES
    }
  });
}
