import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionMouseEnter(): TAction {
  return {
    type: EAction.MOUSE_ENTER
  };
}
