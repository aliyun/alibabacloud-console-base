import {
  getViewport
} from '@alicloud/mere-dom';

import {
  POSITION_R_INITIAL,
  POSITION_B_INITIAL
} from '../../const';
import {
  EMicroBrowserMode
} from '../enum';
import {
  IModelState
} from '../types';

const viewport = getViewport();

export const DEFAULT_CONTEXT_STATE: IModelState = {
  mode: EMicroBrowserMode.FREE,
  width: -1,
  height: -1,
  widthPinned: -1,
  x1: viewport.width - POSITION_R_INITIAL,
  y1: viewport.height - POSITION_B_INITIAL,
  x2: viewport.width,
  y2: viewport.height,
  windowScrollbarWidth: 0,
  resizing: -1,
  dragging: false
};