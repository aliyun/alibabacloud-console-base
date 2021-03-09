import {
  IModelState,
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

import reduceSetIndex from './reduce-set-index';
import reduceSetRect from './reduce-set-rect';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_INDEX:
      return reduceSetIndex(state, action.payload);
    case EAction.SET_RECT:
      return reduceSetRect(state, action.payload);
    default:
      return state;
  }
}
