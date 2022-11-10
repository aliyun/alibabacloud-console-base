import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetCollapsed from './reduce-set-collapsed';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_COLLAPSED:
      return reduceSetCollapsed(state, action.payload);
    default:
      return state;
  }
}
