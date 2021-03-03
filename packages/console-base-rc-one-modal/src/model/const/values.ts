import _noop from 'lodash/noop';

import {
  EModalMode,
  DEFAULT_VALUES,
  WIDTH_INITIAL,
  HEIGHT_INITIAL,
  POSITION_R_INITIAL,
  POSITION_B_INITIAL
} from '../../const';
import getWindowSize from '../../util/get-window-size';
import {
  IContextState,
  IContextProps
} from '../types';

const [W, H] = getWindowSize();

export const DEFAULT_CONTEXT_PROPS: IContextProps = {
  tabs: [],
  affix: null,
  visible: true,
  // @ts-ignore
  mode: undefined, // FIXME..
  minWidth: DEFAULT_VALUES.MIN_WIDTH,
  minHeight: DEFAULT_VALUES.MIN_HEIGHT,
  maxWidth: DEFAULT_VALUES.MAX_WIDTH,
  maxHeight: DEFAULT_VALUES.MAX_HEIGHT,
  pinnedWidth: DEFAULT_VALUES.PINNED_WIDTH,
  zIndex: DEFAULT_VALUES.Z_INDEX,
  minimizable: false, // 暂时还不好用..
  pinnable: true,
  onModeChange: _noop,
  onHide: _noop,
  onClose: _noop,
  onDestroy: _noop
};

export const DEFAULT_CONTEXT_STATE: IContextState = {
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
