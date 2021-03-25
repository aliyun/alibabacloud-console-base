import {
  IModelState,
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

import reduceSetVisible from './reduce-set-visible';
import reduceSetVisibleTimer from './reduce-set-visible-timer';
import reduceSetDropPosition from './reduce-set-drop-position';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_VISIBLE:
      return reduceSetVisible(state, action.payload);
    case EAction.SET_VISIBLE_TIMER:
      return reduceSetVisibleTimer(state, action.payload);
    case EAction.SET_DROP_POSITION:
      return reduceSetDropPosition(state, action.payload);
    default:
      return state;
  }
}
