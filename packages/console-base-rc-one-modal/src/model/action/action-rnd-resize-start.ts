import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionRndResizeStart(): TModelAction {
  return {
    type: EAction.RND_RESIZE_START
  };
}
