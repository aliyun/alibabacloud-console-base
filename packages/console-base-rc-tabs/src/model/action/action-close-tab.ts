import {
  IPropsTab
} from '../../types';
import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionCloseTab(tab: IPropsTab): TAction {
  return {
    type: EAction.CLOSE_TAB,
    payload: tab
  };
}
