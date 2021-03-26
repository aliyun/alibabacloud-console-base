import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionSetDropExiting(payload: boolean): TModelAction {
  return {
    type: EAction.SET_DROP_EXITING,
    payload
  };
}
