import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

export type TModelAction = {
  type: EAction.SET_COLLAPSED | EAction.SET_QUICK_TOP_VISIBLE;
  payload: boolean;
};

export type TModelDispatch = Dispatch<TModelAction>;
