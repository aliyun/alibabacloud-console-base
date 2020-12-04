import update from 'immutability-helper';

import {
  IPropsTab
} from '../../types';
import {
  IContextState
} from '../types';

export default function reduceActivateTab(state: IContextState, tab: IPropsTab): IContextState {
  return update(state, {
    activeTab: {
      $set: tab
    }
  });
}
