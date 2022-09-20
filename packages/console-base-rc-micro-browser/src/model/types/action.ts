import {
  Dispatch
} from 'react';

import {
  EAction,
  EMicroBrowserMode
} from '../enum';

import {
  IPayloadDrag,
  IPayloadResize
} from './common';

export type TModelAction = {
  type: EAction.REFRESH_WINDOW_SIZE | EAction.RND_RESIZE_START | EAction.RND_DRAG_START | EAction.RESET;
} | {
  type: EAction.SET_MODE;
  payload: EMicroBrowserMode;
} | {
  type: EAction.RND_DRAG_STOP;
  payload: IPayloadDrag;
} | {
  type: EAction.RND_RESIZE;
  payload: IPayloadResize;
} | {
  type: EAction.SET_WINDOW_SCROLLBAR_WIDTH;
  payload: number;
};

export type TModelDispatch = Dispatch<TModelAction>;