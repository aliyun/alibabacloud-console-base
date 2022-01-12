import {
  EAction,
  IModelState,
  TModelAction
} from '../types';

import reduceSetDomDropdown from './reduce-set-dom-dropdown';
import reduceSetDomDrop from './reduce-set-dom-drop';
import reduceSetVisible from './reduce-set-visible';
import reduceSetVisibleTimer from './reduce-set-visible-timer';
import reduceSetDropExiting from './reduce-set-drop-exiting';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_DOM_DROPDOWN:
      return reduceSetDomDropdown(state, action.payload);
    case EAction.SET_DOM_DROP:
      return reduceSetDomDrop(state, action.payload);
    case EAction.SET_VISIBLE:
      return reduceSetVisible(state, action.payload);
    case EAction.SET_VISIBLE_TIMER:
      return reduceSetVisibleTimer(state, action.payload);
    case EAction.SET_DROP_EXITING:
      return reduceSetDropExiting(state, action.payload);
    default:
      return state;
  }
}
