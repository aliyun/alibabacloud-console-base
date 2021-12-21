import {
  IDialogStackItem
} from '../types';

import stackGet from './stack-get';
import handleClickExternal from './handle-click-external';
import handleKeydownEsc from './handle-keydown-esc';
import handleMouseDownTrapTab from './handle-mousedown-trap-tab';
import doBackdropAndZIndex from './do-backdrop-and-z-index';

export default function stackPut(dialogId: string, o: IDialogStackItem): void {
  const n = stackGet().put(dialogId, o);
  
  doBackdropAndZIndex();
  
  if (n < 0) {
    return;
  }
  
  if (n === 1) {
    document.addEventListener('click', handleClickExternal, true);
    document.addEventListener('keydown', handleKeydownEsc, true);
    document.addEventListener('keydown', handleMouseDownTrapTab, true);
  }
}