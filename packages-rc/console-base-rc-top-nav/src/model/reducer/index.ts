import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetDockActive from './reduce-set-dock-active';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_DOCK_ACTIVE:
      return reduceSetDockActive(state, action.payload);
    default:
      return state;
  }
}
