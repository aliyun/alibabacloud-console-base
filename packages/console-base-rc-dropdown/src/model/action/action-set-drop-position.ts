import {
  TModelAction,
  IModelStateDropPosition
} from '../types';
import {
  EAction
} from '../const';

export default function actionSetDropPosition(payload: IModelStateDropPosition): TModelAction {
  return {
    type: EAction.SET_DROP_POSITION,
    payload
  };
}
