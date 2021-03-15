import {
  IModelState,
  TAction
} from '../types';
import {
  EAction
} from '../const';

import reduceActivateTab from './reduce-activate-tab';
import reduceNavOffsetMax from './reduce-nav-offset-max';
import reduceNavOffset from './reduce-nav-offset';

export default function reducer(state: IModelState, action: TAction): IModelState {
  switch (action.type) {
    case EAction.ACTIVATE_TAB:
      return reduceActivateTab(state, action.payload);
    case EAction.UPDATE_NAV_OFFSET_MAX:
      return reduceNavOffsetMax(state, action.payload);
    case EAction.UPDATE_NAV_OFFSET:
      return reduceNavOffset(state, action.payload);
    default:
      return state;
  }
}
