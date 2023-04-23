import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

export type TModelAction = {
  type: EAction.SET_VISIBLE_TOP | EAction.SET_VISIBLE_BOTTOM;
  payload: boolean;
};

export type TModelDispatch = Dispatch<TModelAction>;