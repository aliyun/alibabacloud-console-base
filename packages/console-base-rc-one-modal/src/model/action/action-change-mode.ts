import {
  EModalMode
} from '../../const';
import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionChangeMode(payload: EModalMode): TModelAction {
  return {
    type: EAction.CHANGE_MODE,
    payload
  };
}
