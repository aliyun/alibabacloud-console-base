import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionMouseEnter(): TModelAction {
  return {
    type: EAction.MOUSE_ENTER
  };
}
