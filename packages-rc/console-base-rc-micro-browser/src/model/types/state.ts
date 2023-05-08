import {
  EMicroBrowserMode
} from '../enum';

import {
  ISizeAndPosition,
  TDraggingResizing
} from './common';

export interface IModelState extends ISizeAndPosition {
  mode: EMicroBrowserMode;
  /**
   * 我们需要设拖拽点的 `pointer-events: none`，以避免拖拽完毕后触发其 click 事件
   * 
   * 鼠标按下会触发 DragStart，最后会触发 DragStop，中间会触发 0-n 次真正的 Drag，
   * 只有真正触发 Drag 才需要禁用点击
   */
  dragging: TDraggingResizing;
  /**
   * 
   */
  resizing: TDraggingResizing;
  /**
   * 浏览器可视区域右下角 x
   */
  viewportW: number;
  /**
   * 浏览器可视区域右下角 y
   */
  viewportH: number;
}
