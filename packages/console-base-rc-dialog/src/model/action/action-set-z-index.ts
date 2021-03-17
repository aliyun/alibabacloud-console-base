import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionSetZIndex(zIndex: number): TModelAction {
  return {
    type: EAction.SET_Z_INDEX,
    payload: zIndex
  };
}
