import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionNothing(): TModelAction {
  return {
    type: EAction.NOTHING
  };
}
