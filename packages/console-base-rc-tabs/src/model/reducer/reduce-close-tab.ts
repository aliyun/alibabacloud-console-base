import update from 'immutability-helper';

import {
  IPropsTab
} from '../../types';
import {
  IModelState
} from '../types';

export default function reduceCloseTab(state: IModelState, tab: IPropsTab): IModelState {
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
