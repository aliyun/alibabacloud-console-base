import getWindowByNewFunction from './get-window-by-new-function';
import getWindowByDom from './get-window-by-dom';

let win: Window | null;

/**
 * 避免沙箱模式下 window 被 with 劫持
 */
export default function getWindow<T extends Window = Window>(): T {
  if (!win) { // 取一次即可
    win = getWindowByNewFunction() || getWindowByDom() || window;
  }
  
  return win as T;
}