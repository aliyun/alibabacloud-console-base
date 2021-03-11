import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionRndDragStart(): TModelAction {
  return {
    type: EAction.RND_DRAG_START
  };
}
