import {
  TModelAction,
  IPayloadResize
} from '../types';
import {
  EAction
} from '../const';

export default function actionRndResize(payload: IPayloadResize): TModelAction {
  return {
    type: EAction.RND_RESIZE,
    payload
  };
}
