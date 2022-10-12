import {
  EMicroBrowserMode
} from '../enum';

import {
  ISizeAndPosition
} from './common';

export interface IModelState extends ISizeAndPosition {
  mode: EMicroBrowserMode;
  windowScrollbarWidth: number; // 浏览器窗口的滚轴宽度，需要监测
  dragging: boolean;
  resizing: number;
  /**
   * 浏览器可视区域右下角 x
   */
  viewportW: number;
  /**
   * 浏览器可视区域右下角 y
   */
  viewportH: number;
}