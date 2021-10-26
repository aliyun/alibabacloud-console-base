import {
  WIDTH_INITIAL,
  HEIGHT_INITIAL,
  POSITION_R_INITIAL,
  POSITION_B_INITIAL
} from '../../const';
import {
  IModelState
} from '../types';
import {
  getWindowSize
} from '../util';

import {
  EModalMode
} from './enum';

const [W, H] = getWindowSize();

export const DEFAULT_CONTEXT_STATE: IModelState = {
  mode: EModalMode.FREE,
  x: W - POSITION_R_INITIAL - WIDTH_INITIAL,
  y: H - POSITION_B_INITIAL - HEIGHT_INITIAL,
  x1: W - POSITION_R_INITIAL,
  y1: H - POSITION_B_INITIAL,
  x2: W,
  y2: H,
  pinnedWidth: -1,
  resizing: -1,
  dragging: false
};
