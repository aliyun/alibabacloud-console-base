import {
  IRect,
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionSetIndex(payload: IRect): TModelAction {
  return {
    type: EAction.SET_RECT,
    payload
  };
}
