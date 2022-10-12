function handleKeydown(e: KeyboardEvent): void {
  if (e.code === 'Escape') {
    e.preventDefault();
  }
}

/**
 * 默认情况下，浏览器在按下 ESC 键后，会终止网络请求，fetcher 不能默认禁止这种方式，但若应用需要，可以调用此方法
 */
export default function preventEscCancelling(): () => void {
  window.addEventListener('keydown', handleKeydown, true);
  
  return () => window.removeEventListener('keydown', handleKeydown, true);
}