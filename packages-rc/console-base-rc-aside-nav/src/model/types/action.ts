import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

export type TModelAction = {
  type: EAction.SET_COLLAPSED;
  payload: boolean;
} | {
  type: EAction.SET_FILTERING;
  payload: boolean;
} | {
  type: EAction.SET_FILTER_TEXT;
  payload: string;
};

export type TModelDispatch = Dispatch<TModelAction>;
