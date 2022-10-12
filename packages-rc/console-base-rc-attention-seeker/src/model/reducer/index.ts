import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetDomBackdrop from './reduce-set-dom-backdrop';
import reduceSetRectStyle from './reduce-set-rect-style';
import reduceRefreshViewport from './reduce-refresh-viewport';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_DOM_BACKDROP:
      return reduceSetDomBackdrop(state, action.payload);
    case EAction.SET_ATTENTION_RECT:
      return reduceSetRectStyle(state, action.payload);
    case EAction.REFRESH_VIEWPORT:
      return reduceRefreshViewport(state);
    default:
      return state;
  }
}
