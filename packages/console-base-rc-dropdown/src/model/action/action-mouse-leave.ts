import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionMouseLeave(): TModelAction {
  return {
    type: EAction.MOUSE_LEAVE
  };
}
