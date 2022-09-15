import {
  EMicroBrowserMode
} from '../enum';

export interface IModelState {
  mode: EMicroBrowserMode;
  /**
   * 当小于等于 0，需要用 props.widthDefault
   */
  width: number;
  widthPinned: number; // 靠右模式下只能可以调整宽度，<=0 表示自动
  height: number;
  x1: number; // 右下角 x
  y1: number; // 右下角 y
  x2: number; // 浏览器可视区域右下角 x
  y2: number; // 浏览器可视区域右下角 y
  windowScrollbarWidth: number; // 浏览器窗口的滚轴宽度，需要监测
  dragging: boolean;
  resizing: number;
}