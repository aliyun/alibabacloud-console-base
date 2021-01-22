import {
  TAction,
  IPayloadResize
} from '../types';
import {
  EAction
} from '../const';

export default function actionRndResize(payload: IPayloadResize): TAction {
  return {
    type: EAction.RND_RESIZE,
    payload
  };
}
