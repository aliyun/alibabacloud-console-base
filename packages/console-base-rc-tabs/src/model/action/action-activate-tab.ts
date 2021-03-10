import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionActivateTab(payload: string | number): TAction {
  return {
    type: EAction.ACTIVATE_TAB,
    payload
  };
}
