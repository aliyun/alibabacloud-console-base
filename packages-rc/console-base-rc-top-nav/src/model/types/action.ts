import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

export type TModelAction = {
  type: EAction.SET_DOCK_ACTIVE;
  payload: boolean;
};

export type TModelDispatch = Dispatch<TModelAction>;
