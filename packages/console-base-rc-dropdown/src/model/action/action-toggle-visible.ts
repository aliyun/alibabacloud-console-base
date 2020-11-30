import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionToggleVisible(visible: boolean): TAction {
  return {
    type: EAction.TOGGLE_VISIBLE,
    payload: visible
  };
}
