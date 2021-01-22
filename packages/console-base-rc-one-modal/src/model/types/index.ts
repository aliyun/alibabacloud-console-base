import {
  Dispatch
} from 'react';

import {
  IPropsModal
} from '../../types';
import {
  EModalMode
} from '../../const';
import {
  EAction
} from '../const';

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

export type TAction = {
  type: EAction.REFRESH_WINDOW_SIZE | EAction.RND_RESIZE_START | EAction.RND_DRAG_START;
} | {
  type: EAction.CHANGE_MODE;
  payload: EModalMode;
} | {
  type: EAction.RND_DRAG_STOP;
  payload: IPayloadDrag;
} | {
  type: EAction.RND_RESIZE;
  payload: IPayloadResize;
};

export interface IContextProps extends Required<IPropsModal> {}

export interface IContextState {
  mode: EModalMode;
  x: number; // modal 左上角 x
  y: number; // modal 左上角 y
  x1: number; // modal 右下角 x
  y1: number; // modal 右下角 y
  x2: number; // 浏览器可视区域右下角 x
  y2: number; // 浏览器可视区域右下角 y
  pinnedWidth: number; // 靠右模式下只能可以调整宽度，<=0 表示自动
  dragging: boolean;
  resizing: number;
}

export interface IContextReducer {
  (state: IContextState, action: TAction): IContextState;
}

export interface IContext {
  PROPS: IContextProps;
  STATE: IContextState;
  dispatch: Dispatch<TAction>;
}
