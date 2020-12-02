import update from 'immutability-helper';

import {
  EDialogLockState
} from '../../const';
import {
  IContextState
} from '../types';

/**
 * 锁定 Dialog，使无法关闭
 */
export default function reduceLock(state: IContextState, payload?: boolean): IContextState {
  return update(state, {
    locked: {
      $set: payload ? EDialogLockState.LOADING : EDialogLockState.YES
    }
  });
}
