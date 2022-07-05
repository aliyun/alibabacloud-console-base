let result = -1;

function calculateSystemScrollbarWidth(): number {
  const outer = document.createElement('div');
  const inner = document.createElement('div');
  
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  // outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  outer.appendChild(inner);
  
  document.body.appendChild(outer);
  
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  
  outer.parentNode?.removeChild(outer);
  
  return scrollbarWidth < 0 ? 0 : scrollbarWidth;
}

/**
 * 计算浏览器滚轴宽度
 * 在 mac 下 System Settings → General → Show scroll bars，非「Always」的情况下，会是 0
 * 
 * 请直接调用，执行真正的计算只会一次（如果用户切换了系统设置，但没有刷新页面的情况下不会刷新）
 */
export default function getScrollbarWidthOfSystem(): number {
  if (result < 0) {
    result = calculateSystemScrollbarWidth();
  }
  
  return result;
}