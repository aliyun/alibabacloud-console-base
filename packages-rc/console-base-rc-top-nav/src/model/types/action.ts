import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

export type TModelAction = {
  type: EAction.SET_DOCK_ACTIVE;
  payload: boolean;
} | {
  type: EAction.SET_DOCK_ACTIVE_BY_HOVER_TIMESTAMP;
  payload: number;
} | {
  type: EAction.SET_DOCK_HOVER_ACTIVE_TIMER;
  payload: number | null;
} | {
  type: EAction.SET_LOGO_STATE;
  payload: boolean;
};

export type TModelDispatch = Dispatch<TModelAction>;