import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

import {
  IAttentionSeekerRect
} from './common';

export type TModelAction = {
  type: EAction.SET_RECT_STYLE;
  payload: IAttentionSeekerRect;
} | {
  type: EAction.SET_DOM_BACKDROP;
  payload: HTMLOrSVGElement | null;
};

export type TModelDispatch = Dispatch<TModelAction>;