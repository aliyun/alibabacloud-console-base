import {
  EModalMode
} from '../enum';

export interface IModelState {
  mode: EModalMode;
  x: number; // modal 左上角 x
  y: number; // modal 左上角 y
  x1: number; // modal 右下角 x
  y1: number; // modal 右下角 y
  x2: number; // 浏览器可视区域右下角 x
  y2: number; // 浏览器可视区域右下角 y
  pinnedWidth: number; // 靠右模式下只能可以调整宽度，<=0 表示自动
  windowScrollbarWidth: number; // 浏览器窗口的滚轴宽度，需要监测
  dragging: boolean;
  resizing: number;
}