import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionActivate(): TAction {
  return {
    type: EAction.ACTIVATE
  };
}
