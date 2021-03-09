import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionSetIndex(payload: number): TModelAction {
  return {
    type: EAction.SET_INDEX,
    payload
  };
}
