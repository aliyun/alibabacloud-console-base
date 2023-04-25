import {
  EMicroBrowserMode
} from '../enum';

import {
  ISizeAndPosition
} from './common';

export interface IModelState extends ISizeAndPosition {
  mode: EMicroBrowserMode;
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
