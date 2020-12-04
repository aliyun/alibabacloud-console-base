import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionNothing(): TAction {
  return {
    type: EAction.NOTHING
  };
}
