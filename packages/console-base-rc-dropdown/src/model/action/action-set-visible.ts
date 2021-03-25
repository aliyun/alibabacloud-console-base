import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionSetVisible(payload: boolean): TModelAction {
  return {
    type: EAction.SET_VISIBLE,
    payload
  };
}
