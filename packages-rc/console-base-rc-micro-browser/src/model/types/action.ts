import {
  Dispatch
} from 'react';

import {
  EAction,
  EMicroBrowserMode
} from '../enum';

import {
  TDraggingResizing
} from './common';

export type TModelAction = {
  type: EAction.SET_MODE;
  payload: EMicroBrowserMode;
} | {
  type: EAction.SET_DRAGGING | EAction.SET_RESIZING;
  payload: TDraggingResizing;
} | {
  type: EAction.SET_SIZE_WIDTH | EAction.SET_SIZE_HEIGHT | EAction.SET_SIZE_WIDTH_PINNED | EAction.SET_POSITION_RIGHT | EAction.SET_POSITION_BOTTOM;
  payload: number;
} | {
  type: EAction.REFRESH_WINDOW_SIZE | EAction.RESET;
};

export type TModelDispatch = Dispatch<TModelAction>;
