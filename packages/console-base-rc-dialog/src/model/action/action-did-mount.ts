import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionDidMount(): TModelAction {
  return {
    type: EAction.DID_MOUNT
  };
}
