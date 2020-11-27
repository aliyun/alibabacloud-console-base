import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionSetZIndex(zIndex: number): TAction {
  return {
    type: EAction.SET_Z_INDEX,
    payload: zIndex
  };
}
