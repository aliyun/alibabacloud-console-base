import {
  Dispatch
} from 'react';

import {
  EAction
} from '../const';

export type TModelAction = {
  type: EAction.TOGGLE_VISIBLE;
} | {
  type: EAction.SET_VISIBLE;
  payload: boolean;
};

export type TModelDispatch = Dispatch<TModelAction>;
