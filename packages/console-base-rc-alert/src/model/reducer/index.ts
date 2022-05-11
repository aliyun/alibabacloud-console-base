import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetVisible from './reduce-set-visible';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_VISIBLE:
      return reduceSetVisible(state, action.payload);
    default:
      return state;
  }
}
