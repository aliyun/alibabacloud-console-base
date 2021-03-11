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

export type TModelAction = {
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

export type TModelDispatch = Dispatch<TModelAction>;

export interface IModelState {
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

export interface IModelReducer {
  (state: IModelState, action: TModelAction): IModelState;
}

export interface IModelContext {
  props: IPropsModal;
  state: IModelState;
  dispatch: TModelDispatch;
}
