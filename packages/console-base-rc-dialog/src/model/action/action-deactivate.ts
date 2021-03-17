import {
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionDeactivate(): TModelAction {
  return {
    type: EAction.DEACTIVATE
  };
}
