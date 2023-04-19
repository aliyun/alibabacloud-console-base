import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

export type TModelAction = {
  type: EAction.SET_HOVERED | EAction.SET_COLLAPSED | EAction.SET_FILTER_VISIBLE | EAction.SET_FILTER_FOCUSED;
  payload: boolean;
} | {
  type: EAction.SET_FILTER_VALUE;
  payload: string;
};

export type TModelDispatch = Dispatch<TModelAction>;
