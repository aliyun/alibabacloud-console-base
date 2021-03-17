import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionUnlock(): TModelAction {
  return {
    type: EAction.UNLOCK
  };
}
