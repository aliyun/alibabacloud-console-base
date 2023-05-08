import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

export type TModelAction = {
  type: EAction.SET_DOM_UI | EAction.SET_DOM_TAB_BAR | EAction.SET_DOM_EXTRA;
  payload: HTMLDivElement | null;
} | {
  type: EAction.SET_DOM_TAB_LIST;
  payload: HTMLUListElement | null;
} | {
  type: EAction.SET_ACTIVE_TAB_KEY;
  payload: string;
} | {
  type: EAction.SET_WIDTH | EAction.SET_NAV_OFFSET | EAction.SET_NAV_OFFSET_MAX;
  payload: number;
};

export type TModelDispatch = Dispatch<TModelAction>;
