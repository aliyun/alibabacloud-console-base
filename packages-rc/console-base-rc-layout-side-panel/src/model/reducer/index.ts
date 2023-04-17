import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetCollapsed from './reduce-set-collapsed';
import reduceSetQuickTopVisible from './reduce-set-quick-top-visible';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_COLLAPSED:
      return reduceSetCollapsed(state, action.payload);
    case EAction.SET_QUICK_TOP_VISIBLE:
      return reduceSetQuickTopVisible(state, action.payload);
    default:
      return state;
  }
}
