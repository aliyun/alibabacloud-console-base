import {
  EAction
} from '../enum';
import {
  IModelState,
  TModelAction
} from '../types';

import reduceSetDomUi from './reduce-set-dom-ui';
import reduceSetPage from './reduce-set-page';
import reduceSetWidth from './reduce-set-width';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.SET_DOM_UI:
      return reduceSetDomUi(state, action.payload);
    case EAction.SET_PAGE:
      return reduceSetPage(state, action.payload);
    case EAction.SET_WIDTH:
      return reduceSetWidth(state, action.payload);
    default:
      return state;
  }
}
