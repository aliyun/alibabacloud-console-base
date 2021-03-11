import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionRefreshWindowSize(): TModelAction {
  return {
    type: EAction.REFRESH_WINDOW_SIZE
  };
}
