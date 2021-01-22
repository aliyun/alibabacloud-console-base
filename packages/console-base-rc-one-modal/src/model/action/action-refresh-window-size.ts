import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionRefreshWindowSize(): TAction {
  return {
    type: EAction.REFRESH_WINDOW_SIZE
  };
}
