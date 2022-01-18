import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

export type TModelAction = {
  type: EAction.SET_DOM_TABS | EAction.SET_DOM_NAV;
  payload: HTMLDivElement | null;
} | {
  type: EAction.ACTIVATE_TAB;
  payload: string | number;
} | {
  type: EAction.UPDATE_NAV_OFFSET | EAction.UPDATE_NAV_OFFSET_MAX;
  payload: number;
};

export type TModelDispatch = Dispatch<TModelAction>;