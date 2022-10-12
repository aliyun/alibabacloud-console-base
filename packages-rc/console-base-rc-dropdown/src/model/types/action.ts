import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

export type TModelAction = {
  type: EAction.SET_DOM_DROPDOWN | EAction.SET_DOM_DROP;
  payload: HTMLDivElement | null;
} | {
  type: EAction.SET_VISIBLE;
  payload: boolean;
} | {
  type: EAction.SET_VISIBLE_TIMER;
  payload: number | null;
} | {
  type: EAction.SET_DROP_EXITING;
  payload: boolean;
};

export type TModelDispatch = Dispatch<TModelAction>;