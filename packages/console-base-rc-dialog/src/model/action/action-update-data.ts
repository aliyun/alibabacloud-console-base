import {
  TDialogData
} from '../../types';
import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionUpdateData<D = TDialogData>(payload: D): TAction {
  return {
    type: EAction.UPDATE_DATA,
    payload
  };
}
