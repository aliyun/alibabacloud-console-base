import {
  IModelState,
  TModelAction
} from '../types';
import {
  EAction
} from '../enum';

import reduceSetVisibleTop from './reduce-set-visible-top';
import reduceSetVisibleBottom from './reduce-set-visible-bottom';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_VISIBLE_TOP:
      return reduceSetVisibleTop(state, action.payload);
    case EAction.SET_VISIBLE_BOTTOM:
      return reduceSetVisibleBottom(state, action.payload);
    default:
      return state;
  }
}
