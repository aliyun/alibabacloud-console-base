import {
  Dispatch
} from 'react';

import {
  EAction,
  EModalMode
} from '../enum';

export interface IPayloadDrag {
  x: number;
  y: number;
}

export interface IPayloadResize {
  mode: EModalMode; // 当前所处模式
  x: number;
  y: number;
  w: number;
  h: number;
  stopped?: boolean;
}

export type TModelAction = {
  type: EAction.REFRESH_WINDOW_SIZE | EAction.RND_RESIZE_START | EAction.RND_DRAG_START;
} | {
  type: EAction.SET_MODE;
  payload: EModalMode;
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