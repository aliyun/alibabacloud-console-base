import {
  TDialogData
} from '../../types';
import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionUpdateData<D = TDialogData>(payload: Partial<D>): TAction {
  return {
    type: EAction.UPDATE_DATA,
    payload
  };
}
