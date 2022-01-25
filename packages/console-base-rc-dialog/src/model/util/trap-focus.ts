import {
  EDialogFocusHow
} from '../enum';

import getNextElementToFocus from './get-next-element-to-focus';

/**
 * 将焦点局限在 dialog 中无法跳出
 */
export default function trapFocus(domDialog: HTMLDivElement, domDialogContent: HTMLDivElement, how: EDialogFocusHow): void {
  const el = getNextElementToFocus(domDialog, domDialogContent, how);
  
  try {
    el.focus();
    (el as HTMLInputElement).select();
  } catch (err) {
    // ignore it
  }
}