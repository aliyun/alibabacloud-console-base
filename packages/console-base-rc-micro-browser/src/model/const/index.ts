import {
  getViewport
} from '@alicloud/mere-dom';

import {
  EMicroBrowserMode
} from '../enum';
import {
  IModelState
} from '../types';

const viewport = getViewport();

export const WIDTH_DEFAULT = 420;
export const WIDTH_DEFAULT_PINNED = 320;
export const WIDTH_DEFAULT_MINIMIZED = 40;
export const WIDTH_MIN = 240;
export const WIDTH_MIN_PINNED = 240;

export const HEIGHT_TOOL_BAR = 54; // 包含了顶部工具栏的高度（这里是硬编码 需要注意）
export const HEIGHT_DEFAULT = 680;
export const HEIGHT_DEFAULT_MINIMIZED = 40;
export const HEIGHT_MIN = 400;

/**
 * RND 钩子
 */
export const CLASS_J_RND_HANDLE = 'J_console_base_rc_one_modal_rnd_handle';
export const CLASS_J_RND_CANCEL = 'J_console_base_rc_one_modal_rnd_cancel';

export const DEFAULT_CONTEXT_STATE: IModelState = {
  mode: EMicroBrowserMode.FREE,
  width: -1,
  widthPinned: -1,
  height: -1,
  x1: viewport.width - 60,
  y1: viewport.height - 60,
  x2: viewport.width,
  y2: viewport.height,
  windowScrollbarWidth: 0,
  resizing: -1,
  dragging: false
};