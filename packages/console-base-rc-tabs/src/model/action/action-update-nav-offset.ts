import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionUpdateNavOffset(offset: number): TModelAction {
  return {
    type: EAction.UPDATE_NAV_OFFSET,
    payload: offset
  };
}
