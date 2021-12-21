import stackFindTopmost from './stack-find-topmost';
import isEventInside from './is-event-inside';

/**
 * 全局点击事件 - 处理外部点击
 */
export default function handleClickExternal(e: MouseEvent): void {
  const topmost = stackFindTopmost();
  
  if (!topmost) {
    return;
  }
  
  const {
    domDialog,
    dispatchCloseOnExternal
  } = topmost;
  
  if (isEventInside(e, domDialog!)) {
    return;
  }
  
  dispatchCloseOnExternal();
}