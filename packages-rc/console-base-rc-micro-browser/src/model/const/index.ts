import {
  getViewport
} from '@alicloud/mere-dom';

import {
  EMicroBrowserMode
} from '../enum';
import {
  IModelState,
  ISizeAndPosition
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
 * body 上的 class，表示 MicroBrowser 以 PIN 模式打开
 */
export const BODY_CLASS_WITH_MICRO_BROWSER = 'with-micro-browser';

/**
 * RND 钩子
 */
export const CLASS_J_RND_HANDLE = 'J_micro_browser_rnd_handle';
/**
 * 位于 CLASS_J_RND_HANDLE 内部，产生真正拖拽时，不希望结束后触发其 Click 或 DoubleClick 事件
 */
export const CLASS_J_RND_PREVENT_CLICK_AFTER_DRAG = 'J_micro_browser_rnd_prevent_click_after_drag';
/**
 * 位于 CLASS_J_RND_HANDLE 内部，不希望触发拖拽
 */
export const CLASS_J_RND_CANCEL = 'J_micro_browser_rnd_cancel';

export const DEFAULT_SIZE_AND_POSITION: ISizeAndPosition = {
  width: -1,
  widthPinned: -1,
  height: -1,
  right: 60,
  bottom: 60
};

export const DEFAULT_CONTEXT_STATE: IModelState = {
  mode: EMicroBrowserMode.FREE,
  ...DEFAULT_SIZE_AND_POSITION,
  viewportW: viewport.width,
  viewportH: viewport.height,
  resizing: -1,
  dragging: -1
};
