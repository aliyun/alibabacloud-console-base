import stackGet from './stack-get';
import handleClickExternal from './handle-click-external';
import handleKeydownEsc from './handle-keydown-esc';
import handleMouseDownTrapTab from './handle-mousedown-trap-tab';
import doBackdropAndZIndex from './do-backdrop-and-z-index';

export default function stackPull(dialogId: string): void {
  const n = stackGet().remove(dialogId);
  
  doBackdropAndZIndex();
  
  if (n < 0) {
    return;
  }
  
  if (n === 0) {
    document.removeEventListener('click', handleClickExternal, true);
    document.removeEventListener('keydown', handleKeydownEsc, true);
    document.removeEventListener('keydown', handleMouseDownTrapTab, true);
  }
}