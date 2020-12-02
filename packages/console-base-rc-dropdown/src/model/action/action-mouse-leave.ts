import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionMouseLeave(): TAction {
  return {
    type: EAction.MOUSE_LEAVE
  };
}
