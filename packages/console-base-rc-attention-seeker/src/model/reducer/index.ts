import {
  IModelState,
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

import reduceSetIndex from './reduce-set-index';
import reduceSetRectStyle from './reduce-set-rect-style';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_INDEX:
      return reduceSetIndex(state, action.payload);
    case EAction.SET_RECT_STYLE:
      return reduceSetRectStyle(state, action.payload);
    default:
      return state;
  }
}
