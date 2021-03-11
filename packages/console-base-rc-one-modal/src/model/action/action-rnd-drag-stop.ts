import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionRndDragStop(x: number, y: number): TModelAction {
  return {
    type: EAction.RND_DRAG_STOP,
    payload: {
      x,
      y
    }
  };
}
