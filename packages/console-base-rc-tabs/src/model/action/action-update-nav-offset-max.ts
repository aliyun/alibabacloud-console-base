import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionUpdateNavOffsetMax(offsetMax: number): TAction {
  return {
    type: EAction.UPDATE_NAV_OFFSET_MAX,
    payload: offsetMax
  };
}
