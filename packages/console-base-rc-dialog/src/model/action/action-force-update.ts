import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionForceUpdate(): TModelAction {
  return {
    type: EAction.FORCE_UPDATE
  };
}
