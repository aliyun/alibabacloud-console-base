import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionUpdateWindowHeight(): TAction {
  return {
    type: EAction.UPDATE_WINDOW_HEIGHT
  };
}
