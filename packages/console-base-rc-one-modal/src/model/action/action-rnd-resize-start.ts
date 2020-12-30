import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionRndResizeStart(): TAction {
  return {
    type: EAction.RND_RESIZE_START
  };
}
