import {
  IModelState,
  TModelAction
} from '../types';
import {
  EAction
} from '../const';

import reduceNothing from './reduce-nothing';

export default function reducer(state: IModelState, action: TModelAction): IModelState {
  switch (action.type) {
    case EAction.NOTHING:
      return reduceNothing(state);
    default:
      return state;
  }
}
