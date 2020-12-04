import {
  IPropsTab
} from '../../types';
import {
  TAction
} from '../types';
import {
  EAction
} from '../const';

export default function actionPruneClosedTabs(tabs: IPropsTab[]): TAction {
  return {
    type: EAction.PRUNE_CLOSED_TABS,
    payload: tabs
  };
}
