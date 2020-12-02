import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionLock(loading?: boolean): TAction {
  return {
    type: EAction.LOCK,
    payload: loading
  };
}
