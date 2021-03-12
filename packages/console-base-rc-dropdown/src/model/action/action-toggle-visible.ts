import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionToggleVisible(payload: boolean): TModelAction {
  return {
    type: EAction.TOGGLE_VISIBLE,
    payload
  };
}
