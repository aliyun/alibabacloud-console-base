import {
  IPropsTab
} from '../../types';
import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionActivateTab(tab: IPropsTab): TAction {
  return {
    type: EAction.ACTIVATE_TAB,
    payload: tab
  };
}
