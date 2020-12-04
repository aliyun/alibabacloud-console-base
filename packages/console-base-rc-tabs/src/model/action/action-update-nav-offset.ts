import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionUpdateNavOffset(offset: number): TAction {
  return {
    type: EAction.UPDATE_NAV_OFFSET,
    payload: offset
  };
}
