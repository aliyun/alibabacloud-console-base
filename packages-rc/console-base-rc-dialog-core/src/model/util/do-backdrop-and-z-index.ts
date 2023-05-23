import {
  showBackdrop,
  removeBackdrop
} from './backdrop';
import stackGet from './stack-get';
import stackFindTopmost from './stack-find-topmost';

/**
 * 处理背投和 z-index
 */
export default function doBackdropAndZIndex(): void { // eslint-disable-line @typescript-eslint/naming-convention
  const topmost = stackFindTopmost();
  
  if (!topmost) {
    removeBackdrop();
    
    return;
  }
  
  if (!topmost.backdrop) {
    return;
  }
  
  stackGet().each(v => {
    if (v === topmost) {
      v.setZIndex(-1); // 回到最顶
    } else {
      v.setZIndex(topmost.zIndexBackdrop - 1); // 被最顶的 backdrop 压住
    }
  });
  
  showBackdrop(topmost.zIndexBackdrop);
}
