import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionRndDragStart(): TAction {
  return {
    type: EAction.RND_DRAG_START
  };
}
