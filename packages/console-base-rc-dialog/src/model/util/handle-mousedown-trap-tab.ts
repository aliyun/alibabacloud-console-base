import {
  EDialogFocusHow
} from '../enum';

import stackFindTopmost from './stack-find-topmost';
import trapFocus from './trap-focus';

/**
 * 全局 tab 管控
 */
export default function handleMouseDownTrapTab(e: KeyboardEvent): void {
  if (e.key !== 'Tab') {
    return;
  }
  
  const topmost = stackFindTopmost();
  
  if (!topmost) {
    return;
  }
  
  trapFocus(topmost.domDialog!, topmost.domDialogContent!, e.shiftKey ? EDialogFocusHow.PREV : EDialogFocusHow.NEXT);
  
  e.preventDefault();
}