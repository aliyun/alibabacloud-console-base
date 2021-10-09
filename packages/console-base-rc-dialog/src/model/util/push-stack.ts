import {
  EDialogFocusHow
} from '../const';
import {
  showBackdrop,
  removeBackdrop
} from '../../rc/backdrop';
import {
  IDialogStackItem
} from '../types';

import createStack from './create-stack';
import getNextElementToFocus from './get-next-element-to-focus';

const STACK = createStack<IDialogStackItem>();

/**
 * 找到「最顶」的 dialog，这里的最顶不一定是 id 最大的，它是指 z-index 最大的当中 id 最大的那个
 */
function findTopmost(): IDialogStackItem | undefined {
  let topmostZIndex = -1;
  let topmostNumId = -1;
  
  STACK.each((v, k) => {
    const {
      zIndex
    } = v;
    const num = Number(k);
    
    if (zIndex > topmostZIndex) {
      topmostZIndex = zIndex;
      topmostNumId = num;
    } else if (zIndex === topmostZIndex && num > topmostNumId) {
      topmostNumId = num;
    }
  });
  
  return STACK.get(topmostNumId);
}

/**
 * 判断鼠标点击事件是否发生在 dialog 内部
 */
function inDialog(e: MouseEvent, domDialog: HTMLDivElement): boolean {
  let el: HTMLElement | null = e.target as HTMLElement;

  while (el && el !== document.body) {
    if (el === domDialog) {
      return true;
    }
  
    el = el.parentElement; // eslint-disable-line no-param-reassign
  }

  return false;
}

/**
 * 将焦点局限在 dialog 中无法跳出
 */
function trapFocus(domDialog: HTMLDivElement, domDialogContent: HTMLDivElement, how: EDialogFocusHow): void {
  const el = getNextElementToFocus(domDialog, domDialogContent, how);
  
  try {
    el.focus();
    (el as HTMLInputElement).select();
  } catch (err) {
    // ignore it
  }
}

/**
 * 全局点击事件 - 处理外部点击
 */
function handleClickExternalClick(e: MouseEvent): void {
  const topmost = findTopmost();
  
  if (!topmost) {
    return;
  }
  
  const {
    domDialog,
    dispatchCloseOnExternal
  } = topmost;
  
  if (inDialog(e, domDialog!)) {
    return;
  }
  
  dispatchCloseOnExternal();
}

/*
 * 全局 ESC 管控
 */
function handleKeydownEsc(e: KeyboardEvent): void {
  if (e.key !== 'Escape') {
    return;
  }
  
  const topmost = findTopmost();
  
  if (!topmost) {
    return;
  }
  
  topmost.dispatchCloseOnEsc();
}

/**
 * 全局 tab 管控
 */
function handleMouseDownTrapTab(e: KeyboardEvent): void {
  if (e.key !== 'Tab') {
    return;
  }
  
  const topmost = findTopmost();
  
  if (!topmost) {
    return;
  }
  
  trapFocus(topmost.domDialog!, topmost.domDialogContent!, e.shiftKey ? EDialogFocusHow.PREV : EDialogFocusHow.NEXT);
  
  e.preventDefault();
}

/**
 * 处理背投和 z-index
 */
function doBackdropAndZIndex(): void {
  const topmost = findTopmost();
  
  if (!topmost) {
    removeBackdrop();
    
    return;
  }
  
  if (!topmost.backdrop) {
    return;
  }
  
  STACK.each(v => {
    if (v === topmost) {
      v.dispatchSetZIndex(-1); // 回到最顶
    } else {
      v.dispatchSetZIndex(topmost.zIndexBackdrop - 1); // 被最顶的 backdrop 压住
    }
  });
  
  showBackdrop(topmost.zIndexBackdrop);
}

function putToSack(dialogId: string, o: IDialogStackItem): void {
  const n = STACK.put(dialogId, o);
  
  doBackdropAndZIndex();
  
  if (n < 0) {
    return;
  }
  
  if (n === 1) {
    document.addEventListener('click', handleClickExternalClick, true);
    document.addEventListener('keydown', handleKeydownEsc, true);
    document.addEventListener('keydown', handleMouseDownTrapTab, true);
  }
}

function removeFromStack(dialogId: string): void {
  const n = STACK.remove(dialogId);
  
  doBackdropAndZIndex();
  
  if (n < 0) {
    return;
  }
  
  if (n === 0) {
    document.removeEventListener('click', handleClickExternalClick, true);
    document.removeEventListener('keydown', handleKeydownEsc, true);
    document.removeEventListener('keydown', handleMouseDownTrapTab, true);
  }
}

/**
 * 压栈，每打开一个 Dialog 向各个堆栈中推入一个，并返回出栈方法（可用于 useEffect）
 */
export default function pushStackAll(dialogId: string, item: IDialogStackItem): () => void {
  putToSack(dialogId, item);
  
  return () => removeFromStack(dialogId);
}

/**
 * 对顶层的 Dialog 进行聚焦，由 Dialog 自己手动调用（当它想在 did mount 之后重设焦点的时候）。
 */
export function focusDialog(domDialog: HTMLDivElement, domDialogContent: HTMLDivElement): void {
  const topmost = findTopmost();
  
  // 保证只有顶层的 Dialog 可以获得焦点
  if (!topmost || domDialog !== topmost.domDialog || domDialogContent !== topmost.domDialogContent) {
    return;
  }
  
  trapFocus(domDialog, domDialogContent, EDialogFocusHow.AUTO);
}
