import {
  TDialogData
} from '../../types';
import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionUpdateData<D = TDialogData>(payload: Partial<D>): TModelAction {
  return {
    type: EAction.UPDATE_DATA,
    payload
  };
}
