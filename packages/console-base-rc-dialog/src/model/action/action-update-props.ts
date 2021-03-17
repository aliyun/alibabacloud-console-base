import {
  IDialogPropsMutable
} from '../../types';
import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionUpdateProps<T, D>(payload: IDialogPropsMutable<T, D>): TModelAction {
  return {
    type: EAction.UPDATE_PROPS,
    payload
  };
}
