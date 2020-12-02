import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionDeactivate(): TAction {
  return {
    type: EAction.DEACTIVATE
  };
}
