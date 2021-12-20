import {
  Dispatch
} from 'react';

import {
  EAction
} from '../const';

export type TModelAction = {
  type: EAction.ACTIVATE_TAB;
  payload: string | number;
} | {
  type: EAction.UPDATE_NAV_OFFSET | EAction.UPDATE_NAV_OFFSET_MAX;
  payload: number;
};

export type TModelDispatch = Dispatch<TModelAction>;