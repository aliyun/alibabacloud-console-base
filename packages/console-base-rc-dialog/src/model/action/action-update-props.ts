import {
  IDialogPropsMutable
} from '../../types';
import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionUpdateProps<T, D>(payload: IDialogPropsMutable<T, D>): TAction {
  return {
    type: EAction.UPDATE_PROPS,
    payload
  };
}
