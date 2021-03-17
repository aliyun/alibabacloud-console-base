import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionLock(loading?: boolean): TModelAction {
  return {
    type: EAction.LOCK,
    payload: loading
  };
}
