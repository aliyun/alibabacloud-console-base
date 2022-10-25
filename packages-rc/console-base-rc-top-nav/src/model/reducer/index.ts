import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetDockActive from './reduce-set-dock-active';
import reduceSetDockActiveByHoverTimestamp from './reduce-set-dock-active-by-hover-timestamp';
import reduceSetDockHoverActiveTimer from './reduce-set-dock-hover-active-timer';
import reduceSetTopNavWidth from './reduce-set-top-nav-width';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_DOCK_ACTIVE:
      return reduceSetDockActive(state, action.payload);
    case EAction.SET_DOCK_ACTIVE_BY_HOVER_TIMESTAMP:
      return reduceSetDockActiveByHoverTimestamp(state, action.payload);
    case EAction.SET_DOCK_HOVER_ACTIVE_TIMER:
      return reduceSetDockHoverActiveTimer(state, action.payload);
    case EAction.SET_LOGO_STATE:
      return reduceSetTopNavWidth(state, action.payload);
    default:
      return state;
  }
}
