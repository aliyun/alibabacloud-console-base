import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetIndex from './reduce-set-index';
import reduceSetRectStyle from './reduce-set-rect-style';
import reduceSetDomBackdrop from './reduce-set-dom-backdrop';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_INDEX:
      return reduceSetIndex(state, action.payload);
    case EAction.SET_RECT_STYLE:
      return reduceSetRectStyle(state, action.payload);
    case EAction.SET_DOM_BACKDROP:
      return reduceSetDomBackdrop(state, action.payload);
    default:
      return state;
  }
}
