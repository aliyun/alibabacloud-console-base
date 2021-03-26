import {
  IModelState,
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

import reduceSetVisible from './reduce-set-visible';
import reduceSetVisibleTimer from './reduce-set-visible-timer';
import reduceSetDropExiting from './reduce-set-drop-exiting';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
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
