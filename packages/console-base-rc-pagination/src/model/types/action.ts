import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

export type TModelAction = {
  type: EAction.SET_DOM_UI;
  payload: HTMLDivElement | null;
} | {
  type: EAction.SET_PAGE;
  payload: number;
} | {
  type: EAction.SET_WIDTH;
  payload: number;
};

export type TModelDispatch = Dispatch<TModelAction>;
