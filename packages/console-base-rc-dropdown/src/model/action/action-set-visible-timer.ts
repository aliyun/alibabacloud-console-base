import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionSetVisible(payload: number | null): TModelAction {
  return {
    type: EAction.SET_VISIBLE_TIMER,
    payload
  };
}
