import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionUnlock(): TAction {
  return {
    type: EAction.UNLOCK
  };
}
