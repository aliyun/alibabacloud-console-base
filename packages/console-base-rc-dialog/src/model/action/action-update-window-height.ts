import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionUpdateWindowHeight(): TModelAction {
  return {
    type: EAction.UPDATE_WINDOW_HEIGHT
  };
}
