/*
 * 全局 ESC 管控
 */
import stackFindTopmost from './stack-find-topmost';

export default function handleKeydownEsc(e: KeyboardEvent): void {
  if (e.key !== 'Escape') {
    return;
  }
  
  const topmost = stackFindTopmost();
  
  if (!topmost) {
    return;
  }
  
  topmost.closeOnEsc();
}
