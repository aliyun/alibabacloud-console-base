import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

export type TModelAction = {
  type: EAction.SET_PAGE;
  payload: number;
};

export type TModelDispatch = Dispatch<TModelAction>;
