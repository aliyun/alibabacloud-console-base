import update from 'immutability-helper';
import { EDialogLockState } from '../../const';

/**
 * 解除锁定
 */
export default function reduceUnlock(state) {
  return update(state, {
    locked: {
      $set: EDialogLockState.NO
    }
  });
}