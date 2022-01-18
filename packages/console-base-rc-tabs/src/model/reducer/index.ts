import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetDomTabs from './reduce-set-dom-tabs';
import reduceSetDomNav from './reduce-set-dom-nav';
import reduceActivateTab from './reduce-activate-tab';
import reduceNavOffsetMax from './reduce-nav-offset-max';
import reduceNavOffset from './reduce-nav-offset';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_DOM_TABS:
      return reduceSetDomTabs(state, action.payload);
    case EAction.SET_DOM_NAV:
      return reduceSetDomNav(state, action.payload);
    case EAction.ACTIVATE_TAB:
      return reduceActivateTab(state, action.payload);
    case EAction.UPDATE_NAV_OFFSET_MAX:
      return reduceNavOffsetMax(state, action.payload);
    case EAction.UPDATE_NAV_OFFSET:
      return reduceNavOffset(state, action.payload);
    default:
      return state;
  }
}
