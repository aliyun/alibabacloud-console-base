import update from 'immutability-helper';

import {
  IPropsTab
} from '../../types';
import {
  IContextState
} from '../types';

export default function reduceCloseTab(state: IContextState, tab: IPropsTab): IContextState {
  const {
    closedTabs
  } = state;
  
  if (closedTabs.includes(tab)) {
    return state;
  }
  
  return update(state, {
    closedTabs: {
      $push: [tab]
    }
  });
}
