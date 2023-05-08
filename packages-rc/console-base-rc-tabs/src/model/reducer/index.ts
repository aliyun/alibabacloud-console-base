import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetDomUi from './reduce-set-dom-ui';
import reduceSetDomTabBar from './reduce-set-dom-tab-bar';
import reduceSetDomTabList from './reduce-set-dom-tab-list';
import reduceSetDomExtra from './reduce-set-dom-extra';
import reduceSetActiveTabKey from './reduce-set-active-tab-key';
import reduceSetWidth from './reduce-set-width';
import reduceSetNavOffset from './reduce-set-nav-offset';
import reduceSetNavOffsetMax from './reduce-set-nav-offset-max';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_DOM_UI:
      return reduceSetDomUi(state, action.payload);
    case EAction.SET_DOM_TAB_BAR:
      return reduceSetDomTabBar(state, action.payload);
    case EAction.SET_DOM_TAB_LIST:
      return reduceSetDomTabList(state, action.payload);
    case EAction.SET_DOM_EXTRA:
      return reduceSetDomExtra(state, action.payload);
    case EAction.SET_ACTIVE_TAB_KEY:
      return reduceSetActiveTabKey(state, action.payload);
    case EAction.SET_WIDTH:
      return reduceSetWidth(state, action.payload);
    case EAction.SET_NAV_OFFSET:
      return reduceSetNavOffset(state, action.payload);
    case EAction.SET_NAV_OFFSET_MAX:
      return reduceSetNavOffsetMax(state, action.payload);
    default:
      return state;
  }
}
