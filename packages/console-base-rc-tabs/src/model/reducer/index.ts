import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetDomTabs from './reduce-set-dom-tabs';
import reduceSetDomNav from './reduce-set-dom-nav';
import reduceSetActiveTabKey from './reduce-set-active-tab-key';
import reduceNavOffsetMax from './reduce-nav-offset-max';
import reduceNavOffset from './reduce-nav-offset';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_DOM_TABS:
      return reduceSetDomTabs(state, action.payload);
    case EAction.SET_DOM_NAV:
      return reduceSetDomNav(state, action.payload);
    case EAction.SET_ACTIVE_TAB_KEY:
      return reduceSetActiveTabKey(state, action.payload);
    case EAction.UPDATE_NAV_OFFSET_MAX:
      return reduceNavOffsetMax(state, action.payload);
    case EAction.UPDATE_NAV_OFFSET:
      return reduceNavOffset(state, action.payload);
    default:
      return state;
  }
}
