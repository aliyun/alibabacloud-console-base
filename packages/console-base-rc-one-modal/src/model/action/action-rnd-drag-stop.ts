import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionRndDragStop(x: number, y: number): TAction {
  return {
    type: EAction.RND_DRAG_STOP,
    payload: {
      x,
      y
    }
  };
}
