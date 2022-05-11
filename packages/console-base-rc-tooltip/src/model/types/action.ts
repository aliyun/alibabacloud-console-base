import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

export type TModelAction = {
  type: EAction.SET_VISIBLE;
  payload: boolean;
} | {
  type: EAction.SET_AUTO_CLOSE_TICK;
  payload: number;
};

export type TModelDispatch = Dispatch<TModelAction>;
