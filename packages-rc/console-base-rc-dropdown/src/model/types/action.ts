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
};

export type TModelDispatch = Dispatch<TModelAction>;
