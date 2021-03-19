import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionUpdateNavOffsetMax(offsetMax: number): TModelAction {
  return {
    type: EAction.UPDATE_NAV_OFFSET_MAX,
    payload: offsetMax
  };
}
