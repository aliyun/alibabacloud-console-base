import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetPage from './reduce-set-page';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_PAGE:
      return reduceSetPage(state, action.payload);
    default:
      return state;
  }
}
