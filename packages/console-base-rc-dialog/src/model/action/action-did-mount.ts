import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionDidMount(): TAction {
  return {
    type: EAction.DID_MOUNT
  };
}
