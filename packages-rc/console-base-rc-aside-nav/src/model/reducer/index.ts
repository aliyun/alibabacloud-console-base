import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetHovered from './reduce-set-hovered';
import reduceSetCollapsed from './reduce-set-collapsed';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_HOVERED:
      return reduceSetHovered(state, action.payload);
    case EAction.SET_COLLAPSED:
      return reduceSetCollapsed(state, action.payload);
    default:
      return state;
  }
}
