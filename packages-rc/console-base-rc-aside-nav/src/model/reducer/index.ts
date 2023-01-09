import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetCollapsed from './reduce-set-collapsed';
import reduceSetFiltering from './reduce-set-filtering';
import reduceSetFilterText from './reduce-set-filter-text';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_COLLAPSED:
      return reduceSetCollapsed(state, action.payload);
    case EAction.SET_FILTERING:
      return reduceSetFiltering(state, action.payload);
    case EAction.SET_FILTER_TEXT:
      return reduceSetFilterText(state, action.payload);
    default:
      return state;
  }
}