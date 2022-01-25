import {
  EDialogFocusHow
} from '../enum';

import stackFindTopmost from './stack-find-topmost';
import trapFocus from './trap-focus';

/**
 * 对顶层的 Dialog 进行聚焦，由 Dialog 自己手动调用（当它想在 did mount 之后重设焦点的时候）。
 */
export default function focusDialog(domDialog: HTMLDivElement, domDialogContent: HTMLDivElement): void {
  const topmost = stackFindTopmost();
  
  // 保证只有顶层的 Dialog 可以获得焦点
  if (!topmost || domDialog !== topmost.domDialog || domDialogContent !== topmost.domDialogContent) {
    return;
  }
  
  trapFocus(domDialog, domDialogContent, EDialogFocusHow.AUTO);
}