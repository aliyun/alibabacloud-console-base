import {
  IModelState,
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

import reduceSetVisible from './reduce-set-visible';
import reduceToggleVisible from './reduce-toggle-visible';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_VISIBLE:
      return reduceSetVisible(state, action.payload);
    case EAction.TOGGLE_VISIBLE:
      return reduceToggleVisible(state);
    default:
      return state;
  }
}
