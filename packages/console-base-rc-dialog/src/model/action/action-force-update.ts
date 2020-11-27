import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionForceUpdate(): TAction {
  return {
    type: EAction.FORCE_UPDATE
  };
}
