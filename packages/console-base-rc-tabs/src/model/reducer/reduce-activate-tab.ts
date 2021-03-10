import update from 'immutability-helper';

import {
  IPropsTab
} from '../../types';
import {
  IModelState
} from '../types';

export default function reduceActivateTab(state: IModelState, tab: IPropsTab): IModelState {
  return update(state, {
    activeTab: {
      $set: tab
    }
  });
}
