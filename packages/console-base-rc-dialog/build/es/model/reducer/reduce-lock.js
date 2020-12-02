import update from 'immutability-helper';
import { EDialogLockState } from '../../const';

/**
 * 锁定 Dialog，使无法关闭
 */
export default function reduceLock(state, payload) {
  return update(state, {
    locked: {
      $set: payload ? EDialogLockState.LOADING : EDialogLockState.YES
    }
  });
}