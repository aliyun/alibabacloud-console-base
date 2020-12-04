import {
  IContextState,
  TAction
} from '../types';
import {
  EAction
} from '../const';

import reduceNothing from './reduce-nothing';

export default function reducer(state: IContextState, action: TAction): IContextState {
  switch (action.type) {
    case EAction.NOTHING:
      return reduceNothing(state);
    default:
      return state;
  }
}
