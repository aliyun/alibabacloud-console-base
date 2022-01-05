import {
  Dispatch
} from 'react';

import {
  EAction
} from '../const';

export type TModelAction = {
  type: EAction.SET_DOCK_ACTIVE;
  payload: boolean;
} | {
  type: EAction.SET_DOCK_ACTIVE_BY_HOVER_TIMESTAMP;
  payload: number;
} | {
  type: EAction.SET_DOCK_HOVER_ACTIVE_TIMER;
  payload: number | null;
};

export type TModelDispatch = Dispatch<TModelAction>;