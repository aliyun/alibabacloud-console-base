import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetHovered from './reduce-set-hovered';
import reduceSetCollapsed from './reduce-set-collapsed';
import reduceSetFilterValue from './reduce-set-filter-value';
import reduceSetFilterVisible from './reduce-set-filter-visible';
import reduceSetFilterFocused from './reduce-set-filter-focused';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_HOVERED:
      return reduceSetHovered(state, action.payload);
    case EAction.SET_COLLAPSED:
      return reduceSetCollapsed(state, action.payload);
    case EAction.SET_FILTER_VALUE:
      return reduceSetFilterValue(state, action.payload);
    case EAction.SET_FILTER_VISIBLE:
      return reduceSetFilterVisible(state, action.payload);
    case EAction.SET_FILTER_FOCUSED:
      return reduceSetFilterFocused(state, action.payload);
    default:
      return state;
  }
}
