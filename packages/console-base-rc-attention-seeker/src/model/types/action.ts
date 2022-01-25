import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

import {
  IRectStyle
} from './common';

export type TModelAction = {
  type: EAction.SET_INDEX;
  payload: number;
} | {
  type: EAction.SET_RECT_STYLE;
  payload: IRectStyle;
} | {
  type: EAction.SET_DOM_BACKDROP;
  payload: HTMLDivElement | null;
};

export type TModelDispatch = Dispatch<TModelAction>;