import {
  Dispatch
} from 'react';

import {
  EAction
} from '../enum';

import {
  IAttentionRect
} from './common';

export type TModelAction = {
  type: EAction.SET_DOM_BACKDROP;
  payload: HTMLOrSVGElement | null;
} | {
  type: EAction.SET_ATTENTION_RECT;
  payload: IAttentionRect;
} | {
  type: EAction.REFRESH_VIEWPORT;
};

export type TModelDispatch = Dispatch<TModelAction>;