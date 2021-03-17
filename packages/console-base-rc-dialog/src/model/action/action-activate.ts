import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionActivate(): TModelAction {
  return {
    type: EAction.ACTIVATE
  };
}
