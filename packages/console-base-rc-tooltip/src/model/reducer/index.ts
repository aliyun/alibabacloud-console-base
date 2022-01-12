import {
  EAction,
  IModelState,
  TModelAction
} from '../types';

import reduceSetVisible from './reduce-set-visible';
import reduceSetAutoCloseTick from './reduce-set-auto-close-tick';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_VISIBLE:
      return reduceSetVisible(state, action.payload);
    case EAction.SET_AUTO_CLOSE_TICK:
      return reduceSetAutoCloseTick(state, action.payload);
    default:
      return state;
  }
}
