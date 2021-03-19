import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionActivateTab(payload: string | number): TModelAction {
  return {
    type: EAction.ACTIVATE_TAB,
    payload
  };
}
