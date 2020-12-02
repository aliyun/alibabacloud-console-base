import {
  IContextState,
  TAction
} from '../types';
import {
  EAction
} from '../const';

import reduceToggleVisible from './reduce-toggle-visible';

export default function reducer(state: IContextState, action: TAction): IContextState {
  switch (action.type) {
    case EAction.TOGGLE_VISIBLE:
      return reduceToggleVisible(state, action.payload);
    default:
      return state;
  }
}
