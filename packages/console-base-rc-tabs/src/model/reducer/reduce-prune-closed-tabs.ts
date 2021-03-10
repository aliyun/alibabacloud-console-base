import update from 'immutability-helper';

import {
  IPropsTab
} from '../../types';
import {
  IModelState
} from '../types';

export default function reducePruneClosedTabs(state: IModelState, tabs: IPropsTab[]): IModelState {
  const {
    closedTabs
  } = state;
  
  if (!closedTabs.length) {
    return state;
  }
  
  let pruned = false;
  
  const prunedClosedTabs = closedTabs.reduce((result, v): IPropsTab[] => {
    if (tabs.includes(v)) {
      result.push(v);
    } else {
      pruned = true;
    }
    
    return result;
  }, [] as IPropsTab[]);
  
  if (!pruned) {
    return state;
  }
  
  return update(state, {
    closedTabs: {
      $set: prunedClosedTabs
    }
  });
}
