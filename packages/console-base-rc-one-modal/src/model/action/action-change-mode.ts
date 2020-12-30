import {
  EModalMode
} from '../../const';
import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionChangeMode(payload: EModalMode): TAction {
  return {
    type: EAction.CHANGE_MODE,
    payload
  };
}
